# TrendLingo — Build Plan

Duolingo 스타일의 산업 트렌드 학습 앱. Mock 데이터로 시작하되, 실제 로그인과 학습 진행도(완료한 브리핑, 퀴즈 점수, 스트릭)는 Lovable Cloud에 저장합니다.

## 1. Pages & Routes (TanStack Start file-based routing)

```text
src/routes/
  __root.tsx                          기존 유지 + Auth listener + QueryClient
  index.tsx                           Homepage (6개 카테고리 카드)
  login.tsx                           이메일/패스워드 + Google 로그인
  categories.$slug.tsx                카테고리 대시보드 (Today/Week/Month 탭)
  _authenticated.tsx                  Auth gate layout
  _authenticated/profile.tsx          학습 진행도 + 스트릭
```

- 카테고리별 대시보드는 비로그인도 열람 가능 (학습 자체는 자유)
- "Mark as Learned"와 퀴즈 결과 저장은 로그인 필요 → 클릭 시 `/login`으로 유도
- 카테고리: AI, Semiconductors, Stocks & Investing, Automotive/EV, Healthcare, Energy
- 각 라우트마다 고유한 `head()` 메타데이터 (SEO)

## 2. Components

```text
src/components/
  HomeHero.tsx              타이틀, 태그라인, CTA
  CategoryCard.tsx          아이콘 + 설명 + Start Learning
  CategoryHeader.tsx        선택된 산업 헤더 + Back 버튼
  TimeWindowTabs.tsx        Today / Week / Month 탭
  BriefingCard.tsx          요약 카드 (difficulty/keywords/reading time badges)
  BriefingDetailModal.tsx   상세 모달 (Dialog from shadcn)
  QuizBox.tsx               객관식 1문항 + 정답 피드백
  StreakBadge.tsx           "🔥 N day streak" 배지
  ProgressIndicator.tsx     "X / 9 briefings learned"
  AuthButtons.tsx           로그인/로그아웃 헤더 버튼
```

## 3. Mock Data

`src/data/briefings.ts` — 단일 source of truth. 데이터 모델은 유저가 제공한 스키마 그대로 + `importanceScore` 필드 추가.

- AI, Semiconductors, Stocks & Investing: 각각 9개 (today 3 + week 3 + month 3)
- Automotive/EV, Healthcare, Energy: 각각 3개 정도 placeholder
- 각 briefing마다 quiz 1개

```ts
// 향후 확장용 placeholder 함수 (주석 + 빈 구현)
export async function fetchNewsByCategory(category: string) { /* TODO: real API */ }
export function rankArticlesByImportance(items: Briefing[]) { /* importanceScore 정렬 */ }
export async function summarizeWithLLM(rawText: string) { /* Lovable AI Gateway */ }
export async function generateQuizFromBriefing(b: Briefing) { /* LLM */ }
```

## 4. Backend (Lovable Cloud)

### Auth
- Email/password + Google (Lovable broker 사용)
- `_authenticated` layout으로 보호된 라우트 게이트

### Database tables (with RLS)

```sql
-- 학습 완료 기록
user_progress (
  id uuid pk,
  user_id uuid references auth.users on delete cascade,
  briefing_id text not null,        -- mock data의 id 문자열
  category text not null,
  completed_at timestamptz default now(),
  unique(user_id, briefing_id)
)

-- 퀴즈 결과
quiz_attempts (
  id uuid pk,
  user_id uuid references auth.users on delete cascade,
  briefing_id text not null,
  selected_answer text not null,
  is_correct boolean not null,
  attempted_at timestamptz default now()
)

-- 스트릭 (집계는 함수로)
user_streaks (
  user_id uuid pk references auth.users on delete cascade,
  current_streak int default 0,
  longest_streak int default 0,
  last_active_date date
)
```

- 모든 테이블 RLS 활성화, `user_id = auth.uid()` 정책
- 프로필 테이블은 만들지 않음 (이름/아바타 등 필요 없음 — auth.users만 사용)

### Server Functions (`createServerFn`)

```text
src/lib/progress.functions.ts
  - markBriefingLearned({ briefingId, category })
  - submitQuizAttempt({ briefingId, selectedAnswer, isCorrect })
  - getUserProgress()        // 진행도 + 스트릭 집계
```

전부 `requireSupabaseAuth` 미들웨어로 보호. `src/start.ts`에 `attachSupabaseAuth` 등록 확인.

## 5. Design

모던 SaaS / 학습 앱 톤. Linear/Notion + Duolingo의 친근함 약간.

- **컬러 (oklch in `src/styles.css`)**: 부드러운 그린 primary (학습/성장), 따뜻한 오렌지 accent (스트릭/CTA), 깔끔한 오프화이트 배경, 진한 슬레이트 텍스트. 다크모드 토큰 함께 정의.
- **타이포**: Geist 또는 Inter (헤딩 semibold)
- **레이아웃**: 카드 중심, 부드러운 그림자 (`shadow-elegant` 토큰), `rounded-2xl`, 넉넉한 spacing
- **배지**: difficulty(난이도별 컬러), reading time, keywords
- **모션**: framer-motion으로 카드 마운트 시 살짝 fade-up, 모달 부드럽게
- 반응형: 모바일 1열 → 태블릿 2열 → 데스크탑 3열

## 6. Build Order

1. Lovable Cloud 활성화 + DB 스키마 마이그레이션
2. Design tokens + 글로벌 스타일
3. Mock data (`src/data/briefings.ts`) + types
4. Homepage + CategoryCard
5. Category dashboard + TimeWindowTabs + BriefingCard
6. BriefingDetailModal + QuizBox
7. Auth (login 페이지 + `_authenticated` layout + root listener)
8. Server functions + "Mark as Learned" / 퀴즈 결과 저장 연결
9. Profile 페이지 + StreakBadge + ProgressIndicator
10. SEO 메타데이터 + 폴리시

## 7. Out of Scope (나중에)

- 실제 뉴스 API / LLM 요약 연동 (placeholder 함수만 남김)
- 푸시 알림, 이메일 다이제스트
- 카테고리 추가 / 사용자별 즐겨찾기
- 리더보드, 친구 기능

---

**기술 메모**: TanStack Start v1 + React 19 + Tailwind v4 (이미 셋업됨). Supabase Edge Functions는 사용하지 않고 모든 백엔드 로직은 `createServerFn`. `src/integrations/supabase/client.server`는 admin 작업에만, 유저 스코프 작업은 `requireSupabaseAuth` 미들웨어 사용.
