# dev-pyun.github.io

편채범 웹 포트폴리오. Next.js 정적 export로 빌드해 GitHub Pages 사용자 사이트(`https://dev-pyun.github.io`)에 배포합니다.

## 구성

- `content/projects.ts` — 모든 문구·수치의 단일 출처. PDF와 동일하게 유지합니다.
- `app/` — Home(`/`), Projects(`/projects`, `/projects/[slug]`), About, Contact
- `public/portfolio.pdf` — 제출용 PDF. `main`에 반영되면 사이트의 `/portfolio.pdf`로 바로 제공됩니다.
- `public/images/` — 발표자료에서 추출한 결과 이미지
- `.github/workflows/ci.yml` — PR·비-main 브랜치 push 시 lint / type-check / build
- `.github/workflows/deploy.yml` — `main` push 시 검증 후 GitHub Pages 배포

## 로컬 실행

```bash
npm ci
npm run dev          # http://localhost:3000
npm run lint
npm run type-check
npm run build        # out/ 에 정적 파일 생성
```

## GitHub Pages 배포 설정 (최초 1회)

1. 저장소 이름이 `dev-pyun.github.io`인지 확인합니다. 사용자 사이트라 basePath가 없습니다.
2. 저장소 Settings → Pages → **Build and deployment → Source**를 **GitHub Actions**로 바꿉니다.
3. `main`에 push하면 `deploy.yml`이 실행되고, 완료 후 `https://dev-pyun.github.io`에서 확인합니다.

## 내용 수정

- 문구·수치: `content/projects.ts`만 수정합니다.
- PDF 교체: `public/portfolio.pdf`를 덮어쓰고 `main`에 push합니다.
- 디자인 토큰: `app/globals.css`의 `:root` 변수. 강조색은 `--signal` **한 개**만 바꾸면 한계선·스위치·각인·포커스링이 모두 따라옵니다 (지원사별 대응). 나머지 색은 패널 그라운드 `--panel`, 각인 `--engrave*`, 괘선 `--score*`.
- 디자인 시스템 전체는 `DESIGN.md`, 제품 사실은 `PRODUCT.md`를 참고합니다.

## 공개 범위

손해사정 프로젝트는 비공개 연구라 코드·프롬프트·케이스를 올리지 않습니다. 이 저장소에는 일반화된 설명과 공개 가능한 이미지만 포함합니다. 개인 연락처는 이메일만 표시합니다.
