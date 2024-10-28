# Next.js Multi-Language Project

A modern Next.js application with built-in internationalization support, using Next.js 15, React 19, and NextUI components.

## Features

- 🌐 Multi-language support
- 🎨 NextUI components integration
- 🌓 Dark/Light theme switching
- ⚡ Turbopack for faster development
- 🔄 Auto-updates during development
- 📱 Responsive design

## Tech Stack

- Next.js 15.0.1
- React 19.0.0-rc
- NextUI v2
- TypeScript
- Tailwind CSS
- Framer Motion
- Next Themes

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo/next-multi-lang.git
cd next-multi-lang
```

2. Install dependencies: (you can use either npm, yarn, pnpm or bun)

```bash
bun install
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

next-multi-lang/
├── src/
│ ├── app/
│ │ ├── [lang]/ # Dynamic language routes
│ │ │ ├── page.tsx # Home page
│ │ │ ├── about/ # About page
│ │ │ └── layout.tsx # Language-specific layout
│ │ └── layout.tsx # Root layout
│ ├── components/
│ │ ├── card/ # Card component
│ │ ├── header/ # Header component
│ │ └── layout/ # Layout components
│ ├── dictionaries/ # Translation files
│ │ ├── en/ # English translations
│ │ └── ro/ # Romanian translations
│ ├── providers/ # App providers
│ └── middleware.ts # Language routing middleware
├── public/ # Static assets
└── configuration files # Various config files

## Internationalization

The project supports multiple languages through dictionary files located in `src/dictionaries/`. Currently supported languages:

- English (en)
- Romanian (ro)

To add a new language:

1. Create a new directory in `src/dictionaries/` with the language code
2. Copy the translation.json structure from an existing language
3. Translate the content

## Available Scripts

- `dev` - Runs the development server with Turbopack
- `build` - Creates a production build
- `start` - Runs the production server
- `lint` - Runs ESLint for code quality checks

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [NextUI Documentation](https://nextui.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
