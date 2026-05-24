
-- user_progress
create table public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  briefing_id text not null,
  category text not null,
  completed_at timestamptz not null default now(),
  unique (user_id, briefing_id)
);
alter table public.user_progress enable row level security;

create policy "user_progress select own" on public.user_progress
  for select to authenticated using (auth.uid() = user_id);
create policy "user_progress insert own" on public.user_progress
  for insert to authenticated with check (auth.uid() = user_id);
create policy "user_progress delete own" on public.user_progress
  for delete to authenticated using (auth.uid() = user_id);

create index user_progress_user_idx on public.user_progress(user_id);

-- quiz_attempts
create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  briefing_id text not null,
  selected_answer text not null,
  is_correct boolean not null,
  attempted_at timestamptz not null default now()
);
alter table public.quiz_attempts enable row level security;

create policy "quiz_attempts select own" on public.quiz_attempts
  for select to authenticated using (auth.uid() = user_id);
create policy "quiz_attempts insert own" on public.quiz_attempts
  for insert to authenticated with check (auth.uid() = user_id);

create index quiz_attempts_user_idx on public.quiz_attempts(user_id);

-- user_streaks
create table public.user_streaks (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_active_date date,
  updated_at timestamptz not null default now()
);
alter table public.user_streaks enable row level security;

create policy "user_streaks select own" on public.user_streaks
  for select to authenticated using (auth.uid() = user_id);
create policy "user_streaks insert own" on public.user_streaks
  for insert to authenticated with check (auth.uid() = user_id);
create policy "user_streaks update own" on public.user_streaks
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- streak updater function
create or replace function public.bump_user_streak(_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  today date := current_date;
  existing public.user_streaks%rowtype;
begin
  select * into existing from public.user_streaks where user_id = _user_id;

  if not found then
    insert into public.user_streaks (user_id, current_streak, longest_streak, last_active_date)
    values (_user_id, 1, 1, today);
    return;
  end if;

  if existing.last_active_date = today then
    return;
  elsif existing.last_active_date = today - 1 then
    update public.user_streaks
      set current_streak = existing.current_streak + 1,
          longest_streak = greatest(existing.longest_streak, existing.current_streak + 1),
          last_active_date = today,
          updated_at = now()
      where user_id = _user_id;
  else
    update public.user_streaks
      set current_streak = 1,
          longest_streak = greatest(existing.longest_streak, 1),
          last_active_date = today,
          updated_at = now()
      where user_id = _user_id;
  end if;
end;
$$;
