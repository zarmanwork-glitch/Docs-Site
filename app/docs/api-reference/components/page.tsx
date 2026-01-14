import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';

export const metadata = {
  title: 'Components - API Reference',
  description: 'UI components reference for the documentation site',
};

export default function Components() {
  return (
    <>
      <h1 id="components" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Components
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Reference documentation for all UI components.
      </p>

      <h2 id="codeblock" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        CodeBlock
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Display syntax-highlighted code blocks with optional language labels.
      </p>
      
      <h3 id="codeblock-props" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Props
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Default</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">children</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">ReactNode</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">-</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Code content to display</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">language</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">string</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">"typescript"</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Language label</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="codeblock-example" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Example
      </h3>
      <CodeBlock language="typescript">
{`import { CodeBlock } from '@/components/ui/CodeBlock';

<CodeBlock language="javascript">
  const greeting = "Hello, World!";
  console.log(greeting);
</CodeBlock>`}
      </CodeBlock>

      <h2 id="callout" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Callout
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Display important information with different visual styles.
      </p>
      
      <h3 id="callout-props" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Props
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Default</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">children</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">ReactNode</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">-</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Callout content</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">type</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">"info" | "warning" | "error" | "success"</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">"info"</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Visual style</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="callout-example" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Example
      </h3>
      <CodeBlock language="typescript">
{`import { Callout } from '@/components/ui/Callout';

<Callout type="warning">
  This feature is experimental and may change in future versions.
</Callout>`}
      </CodeBlock>

      <Callout type="warning">
        This feature is experimental and may change in future versions.
      </Callout>

      <h2 id="card" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Card
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Clickable card component for linking to other pages.
      </p>
      
      <h3 id="card-props" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        Props
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Required</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">title</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">string</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Yes</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Card title</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">description</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">string</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Yes</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Card description</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">href</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">string</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Yes</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Link URL</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">icon</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">string</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">No</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Icon emoji</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
