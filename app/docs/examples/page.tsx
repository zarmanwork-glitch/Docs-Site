import { Card } from '@/components/ui/Card';
import { CodeBlock } from '@/components/ui/CodeBlock';

export const metadata = {
  title: 'Examples - Documentation',
  description: 'Real-world examples and templates for common use cases',
};

export default function Examples() {
  return (
    <>
      <h1 id="examples" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Examples
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Explore real-world examples and templates to jumpstart your project.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card
          title="Blog Example"
          description="A complete blog with posts, categories, and tags"
          href="/docs/examples/blog"
          icon="📝"
        />
        <Card
          title="E-commerce Example"
          description="Product catalog with shopping cart and checkout"
          href="/docs/examples/ecommerce"
          icon="🛍️"
        />
        <Card
          title="Dashboard Example"
          description="Analytics dashboard with charts and metrics"
          href="/docs/examples/dashboard"
          icon="📊"
        />
      </div>

      <h2 id="quick-example" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        Quick Example: Simple Documentation Page
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Here's a complete example of a simple documentation page:
      </p>
      <CodeBlock language="typescript">
{`// app/docs/my-feature/page.tsx
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';

export const metadata = {
  title: 'My Feature - Documentation',
  description: 'Learn how to use my awesome feature',
};

export default function MyFeature() {
  return (
    <>
      <h1 id="my-feature" className="text-4xl font-bold mb-4">
        My Feature
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This feature makes your app awesome!
      </p>

      <h2 id="usage" className="text-2xl font-semibold mt-8 mb-4">
        Usage
      </h2>
      <CodeBlock language="typescript">
        {\`import { myFeature } from '@/lib/my-feature';
        
const result = myFeature();
console.log(result);\`}
      </CodeBlock>

      <Callout type="info">
        Remember to configure the feature in your settings!
      </Callout>
    </>
  );
}`}
      </CodeBlock>
    </>
  );
}
