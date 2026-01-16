import { CodeBlock } from '@/components/code-block';

export default function VitePage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>Vite Build Tool</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Fast, modern frontend tooling that revolutionizes the development
          experience.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is Vite?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Vite (French for "fast") is a modern frontend build tool designed to
            replace older, slower bundlers like Webpack. It significantly speeds
            up the development process by using a "no-bundle" approach during
            development—leveraging Native ES Modules (ESM) to serve files
            directly to the browser. In production, it uses Rollup to create a
            highly optimized, minified bundle of your code.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Features
          </h2>

          <div className='grid gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-500 mb-3'>
                ⚡ Lightning Fast HMR
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Hot Module Replacement (HMR) is instant regardless of app size.
                Changes reflect in the browser immediately without full page
                reloads.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-green-500 mb-3'>
                📦 No Bundle Dev Server
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                During development, Vite serves files as native ES modules. The
                browser does the module resolution, making cold starts extremely
                fast.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-blue-500 mb-3'>
                🎯 Optimized Builds
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Production builds use Rollup with pre-configured optimizations
                including code splitting, tree-shaking, and asset optimization.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-orange-500 mb-3'>
                🔧 Framework Agnostic
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Works with React, Vue, Svelte, and more. Official templates
                available for all major frameworks.
              </p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Getting Started with Vite + React
          </h2>
          <CodeBlock>{`# Create a new Vite project
npm create vite@latest my-react-app -- --template react

# Navigate to project
cd my-react-app

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            How It Works
          </h2>

          <div className='space-y-4'>
            <div className='border-l-4 border-purple-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Development Mode
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Vite uses native ES modules. When you request a file, Vite
                transforms it on-demand and serves it. This means:
              </p>
              <ul className='list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Instant server start (no bundling)</li>
                <li>Only requested files are transformed</li>
                <li>HMR updates are instant</li>
                <li>No rebuild needed for route changes</li>
              </ul>
            </div>

            <div className='border-l-4 border-green-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Production Mode
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Uses Rollup for bundling with automatic optimizations:
              </p>
              <ul className='list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Tree-shaking removes unused code</li>
                <li>Code splitting for optimal loading</li>
                <li>Asset optimization and compression</li>
                <li>CSS code splitting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Configuration
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Create a{' '}
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              vite.config.js
            </code>{' '}
            file:
          </p>
          <CodeBlock>{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Vite vs Webpack
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Feature
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Vite
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Webpack
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Dev Server Start
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Instant (&lt;1s)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Slow (10-30s)
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    HMR Speed
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Instant
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Slow (scales with app size)
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Configuration
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Minimal
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Complex
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Build Speed
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Fast (Rollup)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Moderate
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Learning Curve
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Easy
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Steep
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Why Use Vite?
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Dramatically faster development experience</li>
            <li>Better developer productivity with instant feedback</li>
            <li>
              Modern, future-proof architecture based on native ES modules
            </li>
            <li>Simpler configuration compared to Webpack</li>
            <li>Great plugin ecosystem and growing community</li>
            <li>Official support from major frameworks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
