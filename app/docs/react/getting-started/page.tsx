import { CodeBlock } from '@/components/code-block';

export default function ReactGettingStartedPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-zinc-900 dark:text-white'>
          Getting Started with React
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          React is a JavaScript library for building user interfaces. Learn how
          to get started with React in your projects.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is React?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It lets you compose complex UIs from
            small and isolated pieces of code called "components&quot;.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Prerequisites
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Basic understanding of HTML and CSS</li>
            <li>Familiarity with JavaScript ES6+ features</li>
            <li>Node.js installed on your machine</li>
            <li>A code editor (VS Code recommended)</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Quick Start
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            The easiest way to get started with React is using Create React App
            or a framework like Next.js:
          </p>
          <CodeBlock>{`npx create-react-app my-app
cd my-app
npm start`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
