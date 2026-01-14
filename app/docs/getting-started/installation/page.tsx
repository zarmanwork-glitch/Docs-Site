import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';

export const metadata = {
  title: 'Installation - Documentation',
  description: 'Detailed installation instructions for your documentation site',
};

export default function Installation() {
  return (
    <>
      <h1 id="installation" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Installation
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Step-by-step guide to installing and setting up your documentation site.
      </p>

      <h2 id="system-requirements" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        System Requirements
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        <li>Node.js 18.17 or later</li>
        <li>macOS, Windows (including WSL), or Linux</li>
      </ul>

      <h2 id="automatic-installation" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Automatic Installation
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We recommend creating a new documentation site using <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">create-next-app</code>,
        which sets up everything automatically:
      </p>
      <CodeBlock language="bash">
{`npx create-next-app@latest my-docs --typescript --tailwind --app`}
      </CodeBlock>

      <h2 id="manual-installation" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Manual Installation
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        To manually create a new project, install the required packages:
      </p>
      <CodeBlock language="bash">
{`npm install next@latest react@latest react-dom@latest`}
      </CodeBlock>

      <h3 id="package-json" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Update package.json
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Add the following scripts to your <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">package.json</code>:
      </p>
      <CodeBlock language="json">
{`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`}
      </CodeBlock>

      <Callout type="info">
        These scripts refer to the different stages of developing an application:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>dev</strong>: runs Next.js in development mode</li>
          <li><strong>build</strong>: builds the application for production</li>
          <li><strong>start</strong>: starts a Next.js production server</li>
          <li><strong>lint</strong>: runs Next.js' built-in ESLint configuration</li>
        </ul>
      </Callout>

      <h2 id="folder-structure" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Folder Structure
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Here's the recommended folder structure:
      </p>
      <CodeBlock language="plaintext">
{`my-docs/
├── app/
│   ├── docs/
│   │   ├── getting-started/
│   │   ├── api-reference/
│   │   └── examples/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── ui/
│   └── search/
├── lib/
├── public/
├── package.json
└── tsconfig.json`}
      </CodeBlock>

      <h2 id="configuration" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Configuration
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Create a <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">next.config.ts</code> file
        in the root of your project:
      </p>
      <CodeBlock language="typescript">
{`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your configuration options
};

export default nextConfig;`}
      </CodeBlock>

      <Callout type="success">
        You're now ready to start building! Run <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">npm run dev</code> to
        start the development server.
      </Callout>
    </>
  );
}
