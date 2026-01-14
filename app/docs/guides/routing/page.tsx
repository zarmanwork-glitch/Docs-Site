import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';

export const metadata = {
  title: 'Routing - Guides',
  description: 'Learn how to handle routing in your documentation site',
};

export default function Routing() {
  return (
    <>
      <h1 id="routing" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Routing
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Learn how to create and organize routes in your documentation site using Next.js App Router.
      </p>

      <h2 id="file-based-routing" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        File-Based Routing
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Next.js uses a file-based routing system where folders define routes. Each folder can contain
        a <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">page.tsx</code> file
        that exports a React component.
      </p>
      <CodeBlock language="plaintext">
{`app/
├── page.tsx                    # Route: /
└── docs/
    ├── page.tsx                # Route: /docs
    ├── getting-started/
    │   └── page.tsx            # Route: /docs/getting-started
    └── api-reference/
        └── page.tsx            # Route: /docs/api-reference`}
      </CodeBlock>

      <h2 id="creating-routes" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Creating Routes
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        To create a new route, create a folder and add a <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">page.tsx</code> file:
      </p>
      <CodeBlock language="typescript">
{`// app/docs/my-page/page.tsx
export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <p>This is my custom documentation page.</p>
    </div>
  );
}`}
      </CodeBlock>

      <h2 id="dynamic-routes" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Dynamic Routes
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Create dynamic routes using square brackets:
      </p>
      <CodeBlock language="typescript">
{`// app/docs/[slug]/page.tsx
export default function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Doc: {params.slug}</div>;
}`}
      </CodeBlock>

      <h2 id="layouts" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Layouts
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Layouts wrap multiple pages and preserve state during navigation:
      </p>
      <CodeBlock language="typescript">
{`// app/docs/layout.tsx
import { Sidebar } from '@/components/layout/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}`}
      </CodeBlock>

      <Callout type="info">
        Layouts are shared between all pages in a route segment and maintain state during navigation.
      </Callout>

      <h2 id="navigation" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Navigation
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Use the <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">Link</code> component for client-side navigation:
      </p>
      <CodeBlock language="typescript">
{`import Link from 'next/link';

<Link href="/docs/getting-started">
  Getting Started
</Link>`}
      </CodeBlock>
    </>
  );
}
