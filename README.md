# Ethisyn Web Platform

> Building technology with purpose.

Official repository for [ethisyn.in](https://ethisyn.in) — an independent product technology company founded in Hyderabad in 2025.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Instrument Sans, Instrument Serif, IBM Plex Mono
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/), [Axe-Core](https://github.com/dequelabs/axe-core)
- **Performance**: 100/100 Lighthouse Desktop, 100/100 Accessibility, Zero CLS

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Scripts

- `npm run dev`: Starts local development server.
- `npm run build`: Compiles production build.
- `npm start`: Starts production server.
- `npm run typecheck`: Runs TypeScript compiler validation.
- `npm run lint`: Runs ESLint checks.
- `npm test`: Runs Vitest unit & component test suite.
- `npm run test:e2e`: Runs Playwright E2E and axe-core accessibility tests.

---

## License

© 2025 Ethisyn. All rights reserved.
