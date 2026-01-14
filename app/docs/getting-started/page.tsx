import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';
import Link from 'next/link';

export const metadata = {
  title: 'Getting Started - Documentation',
  description: 'Learn how to get started with building your documentation site',
};

export default function GettingStarted() {
  return (
    <>
      <h1 id="introduction" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Getting Started
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Welcome to the documentation site! This guide will help you get started with building
        and customizing your own documentation.
      </p>

      <h2 id="what-is-this" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        What is this?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        This is a modern documentation site built with the latest web technologies:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        <li><strong>Next.js 14+</strong> - React framework with App Router</li>
        <li><strong>TypeScript</strong> - Type-safe development</li>
        <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
        <li><strong>Responsive Design</strong> - Works on all devices</li>
        <li><strong>Dark Mode</strong> - Built-in theme support</li>
      </ul>

      <Callout type="info">
        This documentation site is designed to be a starting point. Feel free to customize
        it to match your brand and requirements.
      </Callout>

      <h2 id="prerequisites" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Prerequisites
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Before you begin, make sure you have the following installed:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        <li>Node.js 18+ or later</li>
        <li>npm, yarn, or pnpm package manager</li>
        <li>A code editor (VS Code recommended)</li>
      </ul>

      <h2 id="installation" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Installation
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        First, install the dependencies:
      </p>
      <CodeBlock language="bash">
        npm install
      </CodeBlock>

      <h2 id="development" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Development
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Run the development server:
      </p>
      <CodeBlock language="bash">
        npm run dev
      </CodeBlock>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Open <a href="http://localhost:3000" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">http://localhost:3000</a> in
        your browser to see the result.
      </p>

      <Callout type="success">
        You can start editing the page by modifying files in the <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">app</code> directory.
        The page auto-updates as you edit the file.
      </Callout>

      <h2 id="next-steps" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Next Steps
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Now that you have the site running, here are some next steps:
      </p>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            <Link href="/docs/getting-started/installation" className="hover:text-blue-600 dark:hover:text-blue-400">
              Installation Guide
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Learn more about setting up your environment
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            <Link href="/docs/guides/routing" className="hover:text-blue-600 dark:hover:text-blue-400">
              Routing Guide
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Understand how to create and organize pages
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            <Link href="/docs/examples" className="hover:text-blue-600 dark:hover:text-blue-400">
              Examples
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Check out real-world examples and templates
          </p>
        </div>
      </div>
    </>
  );
}
