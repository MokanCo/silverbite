# Silverbite Technologies

The Silverbite Technologies website. Next.js, TypeScript, and Tailwind CSS.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` before deploying.

- `NEXT_PUBLIC_SITE_URL` sets canonical URLs, Open Graph, and the sitemap.
- `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_CONTACT_PHONE` are optional footer details.
- `CONTACT_WEBHOOK_URL` receives contact form submissions. The form reports success only after that endpoint returns a 2xx response.
