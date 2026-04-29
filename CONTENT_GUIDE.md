# 📋 BIRD Lab 웹사이트 콘텐츠 업데이트 가이드

> 비개발자를 위한 설명서입니다. 코드를 몰라도 JSON 파일만 수정하면 대부분의 내용을 업데이트할 수 있습니다.

---

## 목차

1. [전체 구조 이해하기](#1-전체-구조-이해하기)
2. [뉴스 추가하기](#2-뉴스-추가하기)
3. [멤버 추가/수정하기](#3-멤버-추가수정하기)
4. [논문 추가하기](#4-논문-추가하기)
5. [갤러리 이벤트 추가하기](#5-갤러리-이벤트-추가하기)
6. [랩 기본 정보 수정하기](#6-랩-기본-정보-수정하기)
7. [채용 공고 수정하기](#7-채용-공고-수정하기)
8. [사진 추가하는 방법](#8-사진-추가하는-방법)
9. [변경 후 배포하기](#9-변경-후-배포하기)

---

## 1. 전체 구조 이해하기

웹사이트의 내용은 모두 `data/` 폴더 안의 JSON 파일로 관리됩니다.

```
my-lab-website/
├── data/                  ← ✅ 여기서 내용을 수정합니다
│   ├── lab.json           ← 랩 기본 정보 (이름, 주소, 이메일 등)
│   ├── people.json        ← 멤버 목록 (PI, 대학원생, 졸업생)
│   ├── publications.json  ← 논문 목록
│   ├── news.json          ← 뉴스 목록
│   ├── gallery.json       ← 갤러리 이벤트 목록
│   ├── research.json      ← 연구 분야 4가지
│   └── opportunities.json ← 채용 공고
│
└── public/                ← ✅ 사진 파일을 여기에 넣습니다
    ├── people/            ← 멤버 사진
    ├── gallery/           ← 갤러리 사진
    ├── news/              ← 뉴스 이미지
    ├── covers/            ← 저널 커버 이미지
    └── research/          ← 연구 분야 대표 이미지
```

### JSON 파일 편집 방법
- VS Code, 메모장++, 또는 텍스트 편집기로 열기
- **주의**: 쉼표(`,`), 따옴표(`"`), 괄호(`{`, `}`, `[`, `]`)를 실수로 지우지 않도록 주의

---

## 2. 뉴스 추가하기

### 파일: `data/news.json`

```json
{
  "featured": [...],   ← 상단 카드 형태로 표시되는 주요 뉴스 (보통 2개)
  "items": [...]       ← 목록 형태로 표시되는 일반 뉴스
}
```

### 일반 뉴스 추가 (텍스트만)

`"items"` 배열의 **맨 앞**에 추가합니다. (최신순으로 위에 있어야 합니다)

```json
"items": [
  { "id": 26, "text": "Apr 2026. 새로운 멤버 홍길동이 합류했습니다. Welcome!" },  ← 새로 추가
  { "id": 1,  "text": "Mar 2026. ..." },
  ...
]
```

- `id`는 기존 숫자 중 가장 큰 번호 + 1로 설정
- `text`는 `"월 연도. 내용"` 형식

### 주요 뉴스 추가 (이미지 포함 카드)

1. 이미지를 `public/news/` 폴더에 복사
2. `"featured"` 배열에 추가:

```json
"featured": [
  {
    "id": 3,
    "date": "Apr 2026.",
    "title": "뉴스 제목",
    "linkLabel": "Youtube Link",
    "link": "https://...",
    "image": "/news/이미지파일명.png"
  },
  ...
]
```

---

## 3. 멤버 추가/수정하기

### 파일: `data/people.json`

구조:
```json
{
  "pi": { ... },          ← PI 정보 (1명)
  "members": [ ... ],     ← 현재 멤버 목록
  "alumni": [ ... ]       ← 졸업생/이전 멤버 목록
}
```

### 새 멤버 추가

1. 멤버 사진을 `public/people/` 폴더에 복사 (파일명 예: `lee-minjun.jpg`)
2. `"members"` 배열에 추가:

```json
{
  "id": "lee-minjun",
  "name": "Minjun Lee",
  "role": "Graduate Student",
  "category": "phd",
  "photo": "/people/lee-minjun.jpg"
}
```

- `role` 예시: `"Postdoctoral Associate"`, `"Graduate Student"`, `"Undergraduate Intern"`, `"Visiting Scientist"`
- `category` 예시: `"postdoc"`, `"phd"`, `"intern"`

### 멤버를 졸업생으로 이동

`"members"`에서 해당 멤버를 삭제하고, `"alumni"`에 추가:

```json
{
  "id": "lee-minjun",
  "name": "Minjun Lee",
  "period": "Graduate Student (Mar. 2024 ~ Feb. 2026)",
  "current": "Samsung Electronics"
}
```

---

## 4. 논문 추가하기

### 파일: `data/publications.json`

### 논문 추가

`"list"` 배열의 **맨 앞**에 추가합니다. `"id"`는 가장 큰 번호 + 1.

```json
{
  "id": 27,
  "title": "논문 제목을 여기에",
  "authors": "J. Byun, S. Kim, H. Park",
  "pi": "J. Byun",
  "venue": "Nature Robotics",
  "venueColor": "#c00000",
  "details": "1, 123-130 (2026)",
  "pdf": "https://...",
  "year": 2026
}
```

- `"pi"` 값은 저자 중 PI 이름의 앞부분 (`"J. Byun"`)으로 설정 → 자동으로 **굵게+밑줄** 표시됨
- `"venueColor"`: Nature 계열은 `"#c00000"`, Science는 `"#c00000"`, 임의로 지정 가능
- `"note"` (선택): `"Front Cover"` 등 특이사항 있으면 추가

### 저널 커버 이미지 추가

1. 커버 이미지를 `public/covers/` 폴더에 복사
2. `"covers"` 배열에 추가:

```json
{
  "id": 8,
  "image": "/covers/nature-robotics-2026.png",
  "journal": "Nature Robotics"
}
```

---

## 5. 갤러리 이벤트 추가하기

### 파일: `data/gallery.json`

구조: 연도별로 그룹화된 이벤트 목록

### 새 이벤트 추가

1. 사진들을 `public/gallery/` 폴더에 복사
2. 해당 연도의 `"events"` 배열 **맨 앞**에 추가 (최신순):

```json
{
  "id": "2026-conference",
  "date": "June 15-17, 2026",
  "caption": "ICRA 2026 발표 🎤",
  "photos": [
    "/gallery/사진1.jpg",
    "/gallery/사진2.jpg",
    "/gallery/사진3.jpg"
  ]
}
```

- 사진이 여러 장이면 갤러리 페이지에서 **슬라이드쇼**로 자동 표시됩니다
- 사진이 없으면 `"photos": []` 로 두면 해당 이벤트는 표시되지 않음

### 새 연도 추가 (예: 2027)

배열 맨 앞에 추가:

```json
[
  {
    "year": 2027,
    "events": []
  },
  {
    "year": 2026,
    "events": [...]
  },
  ...
]
```

---

## 6. 랩 기본 정보 수정하기

### 파일: `data/lab.json`

헤더 로고 옆 태그라인, 홈 페이지 소개글, 푸터 주소 등을 여기서 수정합니다.

```json
{
  "tagline": "헤더 아래 표시되는 한 줄 소개",
  "title1": "홈 페이지 파란색 소개 첫 문장",
  "description1": "홈 페이지 소개 본문",
  "addressLine1": "주소 줄 1 (푸터에 표시)",
  "addressLine2": "주소 줄 2 (푸터에 표시)",
  "phone": "+82-2-958-5357",
  "email": "junghwan@kist.re.kr",
  "copyright": "Junghwan Byun"
}
```

---

## 7. 채용 공고 수정하기

### 파일: `data/opportunities.json`

```json
{
  "intro": "상단 소개 문단",
  "positions": [
    {
      "id": 1,
      "type": "Postdoc",
      "title": "Postdocs",
      "description": "공고 설명",
      "requirements": [
        "자격 요건 1",
        "자격 요건 2"
      ],
      "open": true
    }
  ],
  "contactEmail": "junghwan@kist.re.kr"
}
```

- `"open": false` 로 설정하면 닫힌 공고
- `"requirements"` 배열에 항목 추가/삭제 가능

---

## 8. 사진 추가하는 방법

| 사진 종류 | 저장 위치 | 파일명 예시 |
|----------|----------|------------|
| 멤버 사진 | `public/people/` | `kim-minsu.jpg` |
| 갤러리 사진 | `public/gallery/` | `conference-2026.jpg` |
| 뉴스 이미지 | `public/news/` | `paper-2026.png` |
| 저널 커버 | `public/covers/` | `science-2026.png` |
| 연구 분야 이미지 | `public/research/` | `new-research.png` |

### 권장 사항
- 멤버 사진: **세로 방향**, 해상도 500×700px 이상
- 갤러리 사진: **가로 방향**, 해상도 1000×750px 이상
- 뉴스 이미지: **16:10 비율**, 해상도 800×500px 이상
- 파일 크기: 한 장당 **2MB 이하** 권장 (너무 크면 로딩 느려짐)

---

## 9. 변경 후 배포하기

파일을 수정한 뒤에는 **GitHub에 push**하면 Vercel이 자동으로 배포합니다.

```bash
git add .
git commit -m "뉴스 추가 / 멤버 업데이트" 등 변경 내용 설명
git push
```

약 1~2분 후 실제 웹사이트에 반영됩니다.

> **주의**: JSON 파일 수정 시 문법 오류(쉼표 누락, 괄호 불일치 등)가 있으면 빌드가 실패합니다. 수정 후 [JSONLint](https://jsonlint.com/) 에 붙여넣어 유효성을 확인하는 것을 추천합니다.
