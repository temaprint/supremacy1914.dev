# Supremacy 1914 Fan Hub

![](/public/supremacy1914.jpg)
A multilingual community hub for Supremacy 1914 players, built with Astro. Connect with fellow strategists, read guides, find allies, and join Telegram communities in 17 languages.

![Supremacy 1914](https://img.shields.io/badge/Game-Supremacy%201914-olive)
![Languages](https://img.shields.io/badge/Languages-17-blue)
![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-blueviolet)

## Features

- **17 Language Support**: English, Russian, German, French, Turkish, Spanish, Portuguese, Polish, Italian, Finnish, Swedish, Norwegian, Arabic, Indonesian, Japanese, Chinese, and Hindi
- **Strategic Guides**: Comprehensive beginner's guides and advanced tactics
- **Alliance Finder**: Connect with players worldwide
- **Community Rules**: Clear code of honor and fair play principles
- **Telegram Integration**: Direct links to language-specific communities
- **Dark Mode**: Built-in theme toggle for comfortable viewing
- **Responsive Design**: Optimized for all devices
- **Military-Themed UI**: WWI-inspired design aesthetic

## Tech Stack

- **Framework**: Astro 5.2.5
- **Styling**: Tailwind CSS 3.4.3
- **Icons**: Lucide Astro
- **i18n**: Custom translation system
- **Build**: Vite
- **Deployment**: Static site generation

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Layout.astro          # Base layout wrapper
│   │   ├── Header.astro          # Navigation with language switcher
│   │   ├── Footer.astro          # Footer with links
│   │   ├── ThemeToggle.astro     # Dark/light mode toggle
│   │   ├── LanguageSwitcher.astro # Language selection dropdown
│   │   ├── TelegramButton.astro  # Telegram CTA component
│   │   ├── GuideCard.astro       # Feature card component
│   │   └── Welcome.astro         # Hero section
│   ├── i18n/
│   │   └── index.ts              # Translation configuration
│   ├── pages/
│   │   ├── index.astro           # Homepage (English)
│   │   ├── guide.astro           # Beginner's guide
│   │   ├── rules.astro           # Community rules
│   │   ├── allies.astro          # Alliance finder
│   │   ├── contact.astro         # Contact/FAQ
│   │   ├── report.astro          # Report violations
│   │   ├── ar/                   # Arabic pages
│   │   ├── de/                   # German pages
│   │   ├── es/                   # Spanish pages
│   │   ├── fi/                   # Finnish pages
│   │   ├── fr/                   # French pages
│   │   ├── hi/                   # Hindi pages
│   │   ├── id/                   # Indonesian pages
│   │   ├── it/                   # Italian pages
│   │   ├── ja/                   # Japanese pages
│   │   ├── nb/                   # Norwegian pages
│   │   ├── pl/                   # Polish pages
│   │   ├── pt/                   # Portuguese pages
│   │   ├── ru/                   # Russian pages
│   │   ├── sv/                   # Swedish pages
│   │   ├── tr/                   # Turkish pages
│   │   └── zh/                   # Chinese pages
│   └── styles/
│       └── global.css            # Global styles & theme
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd supremacy1914-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Internationalization (i18n)

The site uses a custom translation system defined in `src/i18n/index.ts`. To add a new language:

1. Add the language to the `languages` object
2. Create translation keys in the `translations` object
3. Create a new folder in `src/pages/[lang-code]/`
4. Copy page templates and update language-specific links

### Supported Languages

- 🇬🇧 English (en) - Default
- 🇷🇺 Russian (ru)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇹🇷 Turkish (tr)
- 🇪🇸 Spanish (es)
- 🇵🇹 Portuguese (pt)
- 🇵🇱 Polish (pl)
- 🇮🇹 Italian (it)
- 🇫🇮 Finnish (fi)
- 🇸🇪 Swedish (sv)
- 🇳🇴 Norwegian (nb)
- 🇸🇦 Arabic (ar)
- 🇮🇩 Indonesian (id)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇮🇳 Hindi (hi)

## Design System

### Colors

The site uses a military-themed color palette:

- **Military Olive**: `#4A5D23` - Primary action color
- **Military Tan**: `#C8B895` - Secondary highlight
- **Military Brass**: `#8B7355` - Accent color
- **Military Dark**: `#1A1F16` - Dark mode background

### Typography

- Headers: Bold, military-inspired
- Body: Clean, readable sans-serif
- Proper contrast ratios for accessibility

## Features by Page

### Homepage (`/`, `/[lang]/`)
- Hero section with community welcome
- Feature cards for guides, allies, and rules
- Telegram integration for each language
- Responsive grid layout

### Beginner's Guide (`/guide`, `/[lang]/guide`)
- Getting started instructions
- Economy & resource management
- Diplomacy strategies
- Common mistakes to avoid

### Community Rules (`/rules`, `/[lang]/rules`)
- Fair play principles
- Prohibited behaviors
- Enforcement policy
- Philosophy statement

### Alliance Finder (`/allies`, `/[lang]/allies`)
- Search filters (language, experience, style, timezone)
- Alliance tips sidebar
- Community statistics
- Direct Telegram integration

### Contact (`/contact`, `/[lang]/contact`)
- FAQ section
- Multiple contact channels
- Telegram moderator handles
- Response time estimates

### Report Violations (`/report`, `/[lang]/report`)
- Violation type selection
- Detailed report form
- Evidence upload
- Process explanation

## Customization

### Telegram Links

Update Telegram community links in `src/i18n/index.ts`:

```typescript
export const telegramLinks = {
  ru: 'https://t.me/supremacy1914ru',
  default: 'https://t.me/Supremacy1914EN'
};
```

### Theme Colors

Modify colors in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      'military-olive': '#4A5D23',
      'military-tan': '#C8B895',
      // ...
    }
  }
}
```

## Build & Deployment

The site generates static HTML pages for all languages:

```bash
npm run build
```

This creates 102 static pages in the `dist/` directory, ready for deployment to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Contributing

Contributions are welcome! Areas for improvement:

- Additional language translations
- New guide content
- UI/UX enhancements
- Performance optimizations
- Accessibility improvements

## License

This is a fan-made community project and is not officially affiliated with Supremacy 1914 or Bytro Labs GmbH.

## Links

- [Supremacy 1914 Official Site](https://supremacy1914.com)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)

## Support

For questions or issues:
- Join our Telegram communities (links on homepage)
- Open an issue on GitHub
- Contact moderators via the contact page

---

Built with ⚔️ for the Supremacy 1914 community
