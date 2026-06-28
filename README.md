This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Resume Proxy

The portfolio keeps the same public resume path:

`/Aneesh_Grover_Resume.pdf`

In production, Next.js rewrites that path to the URL stored in `NEXT_PUBLIC_RESUME_URL`.

Set `NEXT_PUBLIC_RESUME_URL` to the final PDF URL from the separate resume repository, for example:

`https://aneesh-382005.github.io/resume-LaTeX/Aneesh_Grover_Resume.pdf`

If `NEXT_PUBLIC_RESUME_URL` is not set, the app falls back to the local file in `public/` for development.

Note: the app now proxies requests to `/Aneesh_Grover_Resume.pdf` through an API route `/api/resume` which fetches the external PDF and forces an `inline` Content-Disposition. This avoids browsers treating the raw GitHub Pages URL as a download.
