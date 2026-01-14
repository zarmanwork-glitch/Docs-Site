# Documentation Site

A modern, feature-rich documentation site built with Next.js 14+, TypeScript, and Tailwind CSS. Inspired by Next.js's documentation design.

![Documentation Site](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4+-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- ✨ **Modern Stack**: Built with Next.js 14+ App Router, TypeScript, and Tailwind CSS
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark Mode**: Built-in dark mode support with system preference detection
- 🧭 **Smart Navigation**: Sidebar navigation with active state and table of contents
- 🔍 **Search**: Search component ready for integration with your preferred search solution
- 🎨 **Beautiful UI**: Clean, professional design with customizable components
- ⚡ **Performance**: Optimized for fast loading and excellent user experience
- 📝 **Rich Components**: Pre-built components for code blocks, callouts, cards, and more
- 🔒 **Type-Safe**: Fully typed with TypeScript for better development experience

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zarmanwork-glitch/Docs-Site.git
cd Docs-Site
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Docs-Site/
├── app/                          # Next.js App Router pages
│   ├── docs/                     # Documentation pages
│   │   ├── getting-started/      # Getting started guides
│   │   ├── guides/               # Feature guides
│   │   ├── api-reference/        # API documentation
│   │   └── examples/             # Example implementations
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   ├── Sidebar.tsx           # Left sidebar navigation
│   │   └── TableOfContents.tsx   # Right table of contents
│   ├── ui/                       # UI components
│   │   ├── Card.tsx              # Card component
│   │   ├── Callout.tsx           # Callout/alert component
│   │   └── CodeBlock.tsx         # Code block component
│   └── search/                   # Search components
│       └── Search.tsx            # Search dialog
├── lib/                          # Utility functions
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Creating Documentation Pages

### Basic Page

Create a new file in the `app/docs` directory:

```typescript
// app/docs/my-page/page.tsx
export const metadata = {
  title: 'My Page - Documentation',
  description: 'Description of my page',
};

export default function MyPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">My Page</h1>
      <p className="text-lg text-gray-600 mb-8">
        Page content goes here...
      </p>
    </>
  );
}
```

### Using Components

#### Code Blocks

```typescript
import { CodeBlock } from '@/components/ui/CodeBlock';

<CodeBlock language="typescript">
  const example = "Hello World";
</CodeBlock>
```

#### Callouts

```typescript
import { Callout } from '@/components/ui/Callout';

<Callout type="info">
  This is an important note!
</Callout>
```

Available types: `info`, `warning`, `error`, `success`

#### Cards

```typescript
import { Card } from '@/components/ui/Card';

<Card
  title="Card Title"
  description="Card description"
  href="/docs/link"
  icon="🚀"
/>
```

## Customization

### Update Navigation

Edit `components/layout/Sidebar.tsx` to customize the sidebar navigation:

```typescript
const navigation: NavItem[] = [
  {
    title: 'Your Section',
    href: '/docs/your-section',
    items: [
      { title: 'Page 1', href: '/docs/your-section/page-1' },
      { title: 'Page 2', href: '/docs/your-section/page-2' },
    ],
  },
];
```

### Styling

The site uses Tailwind CSS. Customize the theme in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Metadata

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## Examples Included

The site includes several example documentation pages:

- **Getting Started**: Introduction, installation, and quick start guides
- **Guides**: Routing, data fetching, and styling guides
- **API Reference**: Component and function documentation
- **Examples**: Real-world examples including blog, e-commerce, and dashboard templates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js
