import { CodeBlock } from '@/components/code-block';

export default function EsbuildPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>esbuild</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          An extremely fast JavaScript bundler and minifier written in Go.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is esbuild?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            esbuild is an extremely fast JavaScript bundler and minifier written
            in Go. Its primary goal is to bring a new era of performance to
            frontend tooling. Unlike traditional bundlers (Webpack, Rollup)
            written in JavaScript, esbuild is compiled to native machine code,
            allowing it to perform 10x to 100x faster by utilizing
            parallelization and efficient memory management.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Installation
          </h2>
          <CodeBlock>{`# Install esbuild
npm install --save-dev esbuild

# Or using yarn
yarn add --dev esbuild

# Or using pnpm
pnpm add -D esbuild`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Features
          </h2>

          <div className='grid gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-orange-500 mb-3'>
                ⚡ Extreme Speed
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Written in Go and compiled to native machine code. Bypasses
                JavaScript runtime bottlenecks for 10–100x faster builds.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-500 mb-3'>
                🔄 Native Parallelism
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Fully utilizes all available CPU cores to process files in
                parallel, preventing bottlenecks on a single thread.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-blue-500 mb-3'>
                📦 TypeScript & JSX Support
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Built-in support for transpiling .ts, .tsx, and .jsx without
                external plugins. No need for Babel.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-green-500 mb-3'>
                🌳 Tree Shaking
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Automatically removes unused code from your final production
                bundle, resulting in smaller files.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-red-500 mb-3'>
                ✂️ Bundling & Minification
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Combines multiple files into one and shrinks code by removing
                whitespace and shortening variables.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-cyan-500 mb-3'>
                🔌 Plugin API
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Extensible plugin system allows developers to hook into the
                build process for specialized handling.
              </p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Usage
          </h2>
          <CodeBlock>{`# Bundle a single file
esbuild src/index.js --bundle --outfile=dist/bundle.js

# Bundle and minify
esbuild src/index.js --bundle --minify --outfile=dist/bundle.js

# Watch mode for development
esbuild src/index.js --bundle --watch --outfile=dist/bundle.js

# For multiple entry points
esbuild src/app.js src/home.js --bundle --outdir=dist`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            CLI Options
          </h2>
          <div className='space-y-3'>
            <div className='border-l-4 border-orange-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --bundle
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Bundles all imports into a single file
              </p>
            </div>
            <div className='border-l-4 border-purple-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --minify
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Removes whitespace and shortens variable names
              </p>
            </div>
            <div className='border-l-4 border-blue-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --watch
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Watches files for changes and rebuilds automatically
              </p>
            </div>
            <div className='border-l-4 border-green-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --sourcemap
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Generates source maps for debugging
              </p>
            </div>
            <div className='border-l-4 border-red-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --define:KEY=VALUE
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Substitutes a global variable with a constant value
              </p>
            </div>
            <div className='border-l-4 border-cyan-500 pl-4'>
              <code className='text-sm font-semibold text-zinc-900 dark:text-white'>
                --external:MODULE
              </code>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                Marks a module as external (won't be bundled)
              </p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Configuration via JavaScript
          </h2>
          <CodeBlock>{`// build.js
require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/bundle.js',
  loader: {
    '.png': 'dataurl',
    '.svg': 'dataurl'
  },
  external: ['react', 'react-dom'],
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).catch(() => process.exit(1))`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            TypeScript & JSX
          </h2>
          <CodeBlock>{`// esbuild automatically detects .ts, .tsx, .jsx
// No configuration needed!

esbuild src/index.tsx --bundle --outfile=dist/bundle.js

// With JSX framework
esbuild src/index.tsx --bundle --jsx=react --outfile=dist/bundle.js

// Supported JSX options:
// - react (default)
// - preact
// - automatic (React 17+)
// - preserve (output unchanged)`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Platform Support
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            esbuild can bundle code for different platforms:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-zinc-900 dark:text-white mb-2'>
                Browser (ESM)
              </h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                Outputs ES modules for the browser
              </p>
            </div>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-zinc-900 dark:text-white mb-2'>
                Node.js (CommonJS)
              </h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                Outputs CommonJS for Node.js
              </p>
            </div>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-zinc-900 dark:text-white mb-2'>
                IIFE (Browser)
              </h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                Self-executing function for scripts
              </p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            esbuild vs Traditional Bundlers
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Feature
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    esbuild
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Webpack/Rollup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Build Speed
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    10–100x faster
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Slower
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Language
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Go (native)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    JavaScript
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Setup
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Simple
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Complex
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Plugin Support
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Growing
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Extensive
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Use Cases
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Fast development builds during active development</li>
            <li>Production bundling for ultra-fast compile times</li>
            <li>Building CLI tools and backend code</li>
            <li>Libraries that need quick distribution builds</li>
            <li>Projects where build speed is critical</li>
            <li>As the underlying engine for Vite and other tools</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
