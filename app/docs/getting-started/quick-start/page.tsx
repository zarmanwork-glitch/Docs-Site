import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';

export const metadata = {
  title: 'Quick Start - Documentation',
  description: 'Get up and running quickly with your documentation site',
};

export default function QuickStart() {
  return (
    <>
      <h1 id="quick-start" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Quick Start
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Get your documentation site up and running in minutes.
      </p>

      <h2 id="create-first-page" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Create Your First Page
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Create a new file in the <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">app/docs</code> directory:
      </p>
      <CodeBlock language="typescript">
{`// app/docs/my-first-page/page.tsx
export default function MyFirstPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        My First Page
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is my first documentation page!
      </p>
    </>
  );
}`}
      </CodeBlock>

      <h2 id="add-metadata" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Add Metadata
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Add SEO-friendly metadata to your pages:
      </p>
      <CodeBlock language="typescript">
{`export const metadata = {
  title: 'My First Page - Documentation',
  description: 'Learn about my awesome feature',
};`}
      </CodeBlock>

      <h2 id="use-components" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Use Built-in Components
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The documentation site includes several useful components:
      </p>

      <h3 id="code-blocks" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Code Blocks
      </h3>
      <CodeBlock language="typescript">
{`import { CodeBlock } from '@/components/ui/CodeBlock';

<CodeBlock language="javascript">
  const hello = "world";
</CodeBlock>`}
      </CodeBlock>

      <h3 id="callouts" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Callouts
      </h3>
      <CodeBlock language="typescript">
{`import { Callout } from '@/components/ui/Callout';

<Callout type="info">
  This is an informational callout
</Callout>`}
      </CodeBlock>

      <Callout type="info">
        This is an informational callout
      </Callout>

      <Callout type="warning">
        This is a warning callout
      </Callout>

      <Callout type="error">
        This is an error callout
      </Callout>

      <Callout type="success">
        This is a success callout
      </Callout>

      <h2 id="customize-navigation" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Customize Navigation
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Update the sidebar navigation in <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">components/layout/Sidebar.tsx</code>:
      </p>
      <CodeBlock language="typescript">
{`const navigation: NavItem[] = [
  {
    title: 'My Section',
    href: '/docs/my-section',
    items: [
      { title: 'Page 1', href: '/docs/my-section/page-1' },
      { title: 'Page 2', href: '/docs/my-section/page-2' },
    ],
  },
];`}
      </CodeBlock>

      <h2 id="deploy" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Deploy
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Deploy your documentation site to Vercel:
      </p>
      <CodeBlock language="bash">
{`# Build for production
npm run build

# Or deploy directly to Vercel
npx vercel`}
      </CodeBlock>

      <Callout type="success">
        Congratulations! You've created your first documentation page. Continue exploring
        the other sections to learn more advanced features.
      </Callout>
    </>
  );
}
