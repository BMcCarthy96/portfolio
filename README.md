# brandonmccarthy portfolio

My portfolio site: [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## Structure

- `app/page.tsx`: single-page layout assembling all sections
- `components/`: Header, Hero, ProjectCard, Projects, Skills, Experience, About, Contact, Footer
- `data/projects.ts`: all project content (cards render from this one file)
- `data/site.ts`: name, links, nav, tagline
- `public/projects/`: project screenshots (2x, 16:10)
- `public/resume.pdf`: current resume

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```
