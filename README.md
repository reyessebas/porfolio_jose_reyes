# Portafolio — Vite + React + TypeScript

Minimalista, moderno y elegante. 100% responsive, dual-theme (Dark/Light), interactividad rica con framer-motion, selector EN/ES, galería con hover y sección Workflow para videos.

## Requisitos
- Node.js >= 18

## Inicio rápido
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Scripts
- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción
- `npm run preview`: previsualización del build

## Estilos
- TailwindCSS con `darkMode: 'class'`.
- Micro-interacciones: framer-motion y utilidades Tailwind.

## Hero Scroll-Expansion
Se incluye un bloque inspirado en 21st.dev (shadcn blocks), adaptado para Vite en `src/components/blocks/scroll-expansion-hero.tsx` y usado en `src/components/Hero.tsx`.

Si deseas instalar el bloque desde 21st.dev con shadcn CLI (opcional, orientado a Next.js), el comando de referencia es:
```bash
npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero
```

## I18n
Proveedor simple EN/ES (`src/providers/LanguageProvider.tsx`) con diccionarios en `src/locales/*`.

## CV
Coloca tu PDF en `public/cv/CV-demo.pdf` o reemplaza el enlace en la sección Sobre Mí.