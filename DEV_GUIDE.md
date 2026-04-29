# 🛠️ BIRD Lab 웹사이트 개발자 가이드

> 디자인 수정, 레이아웃 변경, 새 페이지 추가 등 코드 수준의 작업을 위한 설명서입니다.

---

## 목차

1. [프로젝트 구조](#1-프로젝트-구조)
2. [기술 스택](#2-기술-스택)
3. [로컬 개발 환경](#3-로컬-개발-환경)
4. [디자인 시스템 (CSS 변수)](#4-디자인-시스템-css-변수)
5. [다크모드](#5-다크모드)
6. [컴포넌트 설명](#6-컴포넌트-설명)
7. [페이지별 설명](#7-페이지별-설명)
8. [이미지 교체하기](#8-이미지-교체하기)
9. [새 페이지 추가하기](#9-새-페이지-추가하기)
10. [네비게이션 수정하기](#10-네비게이션-수정하기)
11. [Vercel 배포](#11-vercel-배포)

---

## 1. 프로젝트 구조

```
my-lab-website/
│
├── src/
│   ├── app/                     ← Next.js App Router 페이지들
│   │   ├── layout.js            ← 전체 레이아웃 (헤더 + 푸터)
│   │   ├── globals.css          ← 전역 CSS (디자인 토큰, 애니메이션, 모든 스타일)
│   │   ├── page.js              ← 홈 페이지 (/)
│   │   ├── research/page.js     ← 연구 페이지 (/research)
│   │   ├── people/page.js       ← 멤버 페이지 (/people)
│   │   ├── publications/page.js ← 논문 페이지 (/publications)
│   │   ├── news/page.js         ← 뉴스 페이지 (/news)
│   │   ├── gallery/page.js      ← 갤러리 페이지 (/gallery)
│   │   ├── opportunities/page.js← 채용 페이지 (/opportunities)
│   │   └── contact/page.js      ← 연락처 페이지 (/contact)
│   │
│   └── components/              ← 재사용 컴포넌트
│       ├── NavLinks.js          ← 네비게이션 바 (클라이언트 컴포넌트)
│       ├── ThemeProvider.js     ← 다크모드 컨텍스트 (클라이언트 컴포넌트)
│       └── Carousel.js          ← 갤러리 슬라이드쇼 (클라이언트 컴포넌트)
│
├── data/                        ← 콘텐츠 데이터 (JSON)
│   ├── lab.json
│   ├── people.json
│   ├── publications.json
│   ├── news.json
│   ├── gallery.json
│   ├── research.json
│   └── opportunities.json
│
├── public/                      ← 정적 파일 (이미지 등)
│   ├── hero.jpg                 ← 홈 히어로 이미지
│   ├── lab-logo1.png            ← 헤더 로고 (작은 버전)
│   ├── lab-logo1-orig.png       ← 푸터 로고 (큰 버전)
│   ├── kist-ci.png              ← KIST CI 로고
│   ├── people/                  ← 멤버 사진
│   ├── gallery/                 ← 갤러리 사진
│   ├── news/                    ← 뉴스 이미지
│   ├── covers/                  ← 저널 커버
│   └── research/                ← 연구 분야 이미지
│
├── next.config.mjs              ← Next.js 설정
├── postcss.config.mjs           ← PostCSS / Tailwind 설정
├── CONTENT_GUIDE.md             ← 비개발자용 가이드
└── DEV_GUIDE.md                 ← 이 파일
```

---

## 2. 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| UI 라이브러리 | React 19 |
| CSS | Custom CSS + Tailwind v4 (utility는 거의 안 씀) |
| 이미지 최적화 | next/image (자동 WebP 변환, lazy loading) |
| 배포 | Vercel |
| 데이터 | JSON 파일 (DB 없음) |

---

## 3. 로컬 개발 환경

```bash
cd C:\Next\my-lab-website

# 의존성 설치 (처음 한 번만)
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:3000

# 빌드 테스트 (배포 전 확인)
npm run build

# 빌드 캐시 초기화 (문제 발생 시)
rmdir /s /q .next && npm run dev
```

**첫 컴파일은 30초~1분 소요** (이후 변경사항은 1~3초 내 반영)

---

## 4. 디자인 시스템 (CSS 변수)

모든 색상과 그림자는 `src/app/globals.css` 상단의 CSS 변수로 관리됩니다.

```css
:root {
  /* 배경 */
  --bg:            #ffffff;      /* 메인 배경 */
  --bg-alt:        #f7f8fa;      /* 카드, 섹션 배경 */
  --surface:       #ffffff;      /* 모달, 팝업 배경 */

  /* 텍스트 */
  --text:          #1a1a2e;      /* 주 텍스트 */
  --text-secondary:#4a5568;      /* 보조 텍스트 */
  --text-muted:    #718096;      /* 흐린 텍스트 */

  /* 강조 색상 */
  --accent:        #2B579A;      /* 파란색 (주 강조) */
  --accent-hover:  #1e3f72;      /* 파란색 호버 */
  --accent-soft:   rgba(43,87,154,0.08); /* 파란색 배경 */
  --accent2:       #7030A0;      /* 보라색 (보조 강조) */
  --red:           #c00000;      /* 저널명 색상 */

  /* 그림자 */
  --shadow-sm: 0 1px 4px rgba(0,0,0,0.07);
  --shadow-md: 0 4px 18px rgba(0,0,0,0.10);
  --shadow-lg: 0 12px 36px rgba(0,0,0,0.13);
}
```

### 주 색상 변경 방법

예) 파란색을 초록색 계열로 변경:

```css
:root {
  --accent:       #1a7a4a;  /* 초록 */
  --accent-hover: #145c37;
  --accent-soft:  rgba(26,122,74,0.08);
}
[data-theme="dark"] {
  --accent:       #4ade80;  /* 다크모드 초록 */
  --accent-hover: #86efac;
}
```

### 폰트 변경

`globals.css`에서 `body` 스타일의 `font-family` 수정:

```css
body {
  font-family: 'Pretendard', 'Inter', Arial, sans-serif;
}
```

Google Fonts 사용 시 `src/app/layout.js`의 `<html>` 위에 `<head>` 추가 또는 `next/font` 사용.

---

## 5. 다크모드

### 동작 방식
1. `ThemeProvider.js`가 `localStorage`에서 테마 설정을 읽음
2. `document.documentElement`에 `data-theme="dark"` attribute 설정
3. CSS에서 `[data-theme="dark"]` 선택자로 모든 변수 오버라이드
4. `NavLinks.js`의 🌙/☀️ 버튼으로 토글

### 다크모드 색상 수정

`globals.css`의 `[data-theme="dark"]` 블록에서 수정:

```css
[data-theme="dark"] {
  --bg:       #0d1117;   /* GitHub Dark 스타일 배경 */
  --accent:   #58a6ff;   /* 밝은 파란색 */
  /* ... */
}
```

---

## 6. 컴포넌트 설명

### `NavLinks.js` — 네비게이션

- **`mainItems`**: 항상 표시되는 메뉴 (HOME, RESEARCH, PEOPLE, PUBLICATIONS, NEWS)
- **`extraItems`**: 화면 넓을 때 표시, 좁을 때 MORE... 드롭다운으로 숨김
- 기준 너비: **1024px** (`@media (max-width: 1024px)` in globals.css)
- 다크모드 토글 버튼 포함

메뉴 항목 추가 시 `mainItems` 또는 `extraItems` 배열에 추가:
```js
{ href: "/new-page", label: "NEW PAGE" }
```

### `Carousel.js` — 갤러리 슬라이드쇼

- 사진이 1장이면 정적 이미지로 표시
- 사진이 2장 이상이면 자동 슬라이드 (4초 간격)
- 마우스 호버 시 이전/다음 버튼 표시
- 하단 점(dots)으로 현재 위치 표시

자동 슬라이드 간격 변경 (`Carousel.js` 31번째 줄):
```js
const timer = setInterval(() => go(1), 4000); // 4000ms = 4초
```

### `ThemeProvider.js` — 다크모드 상태 관리

- `useTheme()` hook으로 어디서든 `{ theme, toggle }` 사용 가능
- `'use client'`로 선언된 클라이언트 컴포넌트

---

## 7. 페이지별 설명

### 홈 (`src/app/page.js`)
- 히어로 이미지: `public/hero.jpg`
- 히어로 텍스트: 하드코딩 (수정 시 파일 직접 편집)
- 소개글: `data/lab.json`의 `title1`, `description1`
- 저널 커버 슬라이드: `data/publications.json`의 `covers`
- 최근 뉴스: `data/news.json`의 `items` (상위 5개)

### 연구 (`src/app/research/page.js`)
- 4개 연구 분야 그리드: `data/research.json`
- 각 이미지: `public/research/` 폴더

### 멤버 (`src/app/people/page.js`)
- 전체 데이터: `data/people.json`
- PI 카드, 멤버 그리드, 졸업생 목록 순서로 표시

### 논문 (`src/app/publications/page.js`)
- 전체 데이터: `data/publications.json`
- PI 저자 강조: `pub.pi` 값과 일치하는 저자 토큰을 **굵게+밑줄**
- 저널명 색상: `pub.venueColor`로 개별 지정

### 뉴스 (`src/app/news/page.js`)
- 상단 카드: `data/news.json`의 `featured`
- 하단 목록: `data/news.json`의 `items`

### 갤러리 (`src/app/gallery/page.js`)
- 데이터: `data/gallery.json`
- 사진이 있는 이벤트만 표시 (`photos.length > 0`)
- 각 이벤트에 `Carousel` 컴포넌트 사용

---

## 8. 이미지 교체하기

### 히어로 이미지 교체

`public/hero.jpg`를 새 파일로 교체하거나, `src/app/page.js`에서 경로 수정:

```jsx
<Image src="/새이미지.jpg" alt="Lab hero" fill ... />
```

### 로고 교체

| 파일 | 용도 | 위치 |
|------|------|------|
| `public/lab-logo1.png` | 헤더 로고 (작은 버전, 배경 없는 버전) | `layout.js` |
| `public/lab-logo1-orig.png` | 푸터 로고 | `layout.js` |
| `public/kist-ci.png` | 푸터 KIST 로고 | `layout.js` |

로고 크기 조정 (`src/app/layout.js`):
```jsx
<Image src="/lab-logo1.png" width={160} height={50}
  style={{ height: "46px", width: "auto" }} />
```
`height: "46px"` 값으로 헤더 내 로고 높이 조정.

### 연구 분야 이미지 교체

`data/research.json`에서 `image` 경로 수정:
```json
{ "id": "soft-robot", "image": "/research/새이미지.png", ... }
```

---

## 9. 새 페이지 추가하기

### 1단계: 페이지 파일 생성

`src/app/새경로/page.js` 생성:

```jsx
export default function NewPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)" }}>
        페이지 제목
      </h1>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "1rem 0 2rem" }} />
      {/* 내용 */}
    </div>
  );
}
```

### 2단계: 네비게이션에 추가

`src/components/NavLinks.js`에서 `mainItems` 또는 `extraItems`에 추가:

```js
{ href: "/새경로", label: "NEW MENU" }
```

### 클라이언트 컴포넌트가 필요한 경우

(버튼 클릭, 상태 관리, 이벤트 핸들러 등 필요 시)

파일 맨 위에 추가:
```js
'use client';
```

**주의**: 서버 컴포넌트(기본값)에서는 `onClick`, `onChange`, `onMouseEnter` 등의 이벤트 핸들러를 직접 쓸 수 없습니다. 인터랙션이 필요하면 별도 클라이언트 컴포넌트로 분리하거나 CSS hover를 사용하세요.

---

## 10. 네비게이션 수정하기

### 메뉴 순서 변경

`src/components/NavLinks.js`의 배열 순서를 바꾸면 됩니다:

```js
const mainItems = [
  { href: "/", label: "HOME", exact: true },
  { href: "/people", label: "PEOPLE" },    // ← 순서 변경
  { href: "/research", label: "RESEARCH" },
  ...
];
```

### 좁은 화면 기준 너비 변경

`src/app/globals.css`:

```css
@media (max-width: 1024px) {   /* ← 이 숫자 변경 */
  .nav-extra { display: none !important; }
  .nav-more  { display: list-item; }
}
```

---

## 11. Vercel 배포

### 자동 배포 (GitHub 연동)

GitHub에 push하면 자동 배포됩니다:

```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```

### 수동 배포

```bash
npm install -g vercel   # 처음 한 번만
vercel --prod
```

### 빌드 오류 확인

로컬에서 먼저 확인:
```bash
npm run build
```

일반적인 오류 원인:
- **JSON 문법 오류**: `data/` 폴더의 파일에 쉼표 누락, 따옴표 불일치 등
- **이미지 경로 오류**: `public/` 폴더에 파일이 없는데 JSON에서 참조
- **클라이언트/서버 컴포넌트 혼용**: 서버 컴포넌트에서 이벤트 핸들러 사용

---

## 빠른 참조 — 자주 하는 작업

| 작업 | 수정 파일 |
|------|----------|
| 색상 테마 변경 | `src/app/globals.css` → `:root` 변수 |
| 헤더 로고 | `public/lab-logo1.png` 교체 |
| 히어로 이미지 | `public/hero.jpg` 교체 |
| 푸터 주소/이메일 | `data/lab.json` |
| 뉴스 추가 | `data/news.json` |
| 멤버 추가 | `data/people.json` + `public/people/` |
| 논문 추가 | `data/publications.json` |
| 갤러리 추가 | `data/gallery.json` + `public/gallery/` |
| 메뉴 항목 추가 | `src/components/NavLinks.js` |
| 새 페이지 추가 | `src/app/새경로/page.js` 생성 |
| 슬라이드 속도 변경 | `src/components/Carousel.js` → `setInterval` ms값 |
| 다크모드 색상 | `src/app/globals.css` → `[data-theme="dark"]` |
