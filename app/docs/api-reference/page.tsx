import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'API Reference - Documentation',
  description: 'Complete API reference for components, functions, and hooks',
};

export default function APIReference() {
  return (
    <>
      <h1 id="api-reference" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        API Reference
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Complete reference for all components, functions, and hooks available in the documentation site.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Card
          title="Components"
          description="UI components including CodeBlock, Callout, Card, and layout components"
          href="/docs/api-reference/components"
          icon="🧩"
        />
        <Card
          title="Functions"
          description="Utility functions and helpers for building documentation"
          href="/docs/api-reference/functions"
          icon="⚡"
        />
        <Card
          title="Hooks"
          description="React hooks for common documentation site patterns"
          href="/docs/api-reference/hooks"
          icon="🪝"
        />
      </div>
    </>
  );
}
