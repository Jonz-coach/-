이 파일은 이미 Next.js + Tailwind + shadcn/ui 프로젝트에 그대로 넣을 수 있는 구조이지만, 실제로 배포하려면 몇 가지 준비가 필요합니다.

1. Next.js 프로젝트 초기화:
```bash
npx create-next-app@latest my-lol-coaching --typescript --tailwind
```

2. shadcn/ui 설치:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge input textarea dialog tabs
```

3. 위 초안을 `app/page.tsx`에 붙여넣고, `lucide-react`와 `recharts`, `framer-motion` 설치:
```bash
npm install lucide-react recharts framer-motion
```

4. 컴포넌트 임포트 경로 확인 (`@/components/ui/...` 구조를 shadcn/ui 기본 경로와 맞추기)

5. GitHub에 푸시 후, Vercel에서 배포

즉, 지금 코드를 `page.tsx`로 저장하고 위 라이브러리를 설치하면 그대로 작동합니다.
