# Jonathan Ogbeide — Portfolio

A personal portfolio site showcasing my work, experience, and services. Built as a single-page, scroll-driven experience with animated transitions.

## Stack

- **React 18** + **TypeScript**
- **Vite** for dev/build
- **Tailwind CSS** for styling
- **Framer Motion** + **GSAP** for animations
- **Lenis** for smooth scrolling

## Sections

- **Hero** — masked cursor reveal effect
- **About** — scroll-linked text reveal, experience & education, tech stack
- **Work** — horizontal-scroll project showcase
- **Services** — stacking service cards
- **Contact** — email + socials

## Getting started

```bash
yarn install
yarn dev       # start dev server
yarn build     # type-check + production build
yarn preview   # preview production build
yarn lint      # run eslint
```

## Project structure

```
src/
  App.tsx              # composes sections + cursor mask
  components/
    headers/           # fixed menu button + sidebar nav
    herosect/          # hero with masked reveal
    about/             # about, experience, tech stack
    works/             # horizontal-scroll projects
    myservices/        # stacking service cards
    contact/           # contact section
    fillercomponent.tsx
  constants/           # nav items, work data, types
  assets/              # images + svg icons
```

## Deployment

Static build — deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
