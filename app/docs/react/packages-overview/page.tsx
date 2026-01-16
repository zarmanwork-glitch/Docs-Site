import { CodeBlock } from '@/components/code-block';

export default function ReactPackagesOverviewPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>
          React Packages Overview
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Understanding the different React packages and when to use them.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Package Comparison
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                    Feature
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                    react
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                    react-dom
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                    react-dom/client
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                    react-dom/server
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Main Environment
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    The Brain (Platform Agnostic)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Universal / Legacy
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Browser (Client)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Node.js (Server)
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Primary Use
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Managing State, Hooks, & Logic
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Core DOM utilities
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Rendering & Hydration
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Generating HTML for SEO
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Key Function 1
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      useState / useReducer
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      findDOMNode
                    </code>{' '}
                    (Legacy)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      createRoot
                    </code>{' '}
                    (Initial Render)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      renderToString
                    </code>{' '}
                    (Static HTML)
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Key Function 2
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      useEffect / useMemo
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      unmountComponentAtNode
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      hydrateRoot
                    </code>{' '}
                    (The "Handover")
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      renderToPipeableStream
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Interactivity
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Defines the logic of "what happens"
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Enables React DOM activity
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Enables clicks, state, events
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Produces static non-active UI
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Tree Shaking
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Always required in the bundle
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Bundled by default
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Used in Vite production builds
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Stripped from client bundles
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Code Example
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      const [count, setCount] = useState(0)
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      createPortal(child, container)
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      createRoot(el).render(&lt;App /&gt;)
                    </code>
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    <code className='text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                      renderToString(&lt;App /&gt;)
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Understanding Each Package
          </h2>

          <div className='space-y-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-blue-500 mb-3'>
                react (The Core)
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                The core React library is platform-agnostic and contains all the
                logic for components, hooks, and state management. It's the
                "brain" that doesn't care whether you're rendering to the DOM,
                mobile, or VR.
              </p>
              <CodeBlock>{`import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}</CodeBlock>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-green-500 mb-3'>
                react-dom
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                Provides DOM-specific methods. Contains utilities that work in
                both client and server environments. Mostly legacy code now
                split into react-dom/client and react-dom/server.
              </p>
              <CodeBlock>{`import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    children,
    document.getElementById('modal-root')
  );
}`}</CodeBlock>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-500 mb-3'>
                react-dom/client
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                Modern client-side rendering API. Use{' '}
                <code className='bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                  createRoot
                </code>{' '}
                for new apps and{' '}
                <code className='bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded'>
                  hydrateRoot
                </code>{' '}
                for SSR hydration.
              </p>
              <CodeBlock>{`import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// For SSR hydration
import { hydrateRoot } from 'react-dom/client';
hydrateRoot(document.getElementById('root'), <App />);`}</CodeBlock>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-orange-500 mb-3'>
                react-dom/server
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                Server-side rendering methods. Generates static HTML on the
                server for SEO and initial page load performance. The output is
                non-interactive until hydrated on the client.
              </p>
              <CodeBlock>{`import { renderToString } from 'react-dom/server';

const html = renderToString(<App />);

// For streaming (modern)
import { renderToPipeableStream } from 'react-dom/server';

renderToPipeableStream(<App />, {
  onShellReady() {
    response.pipe(writable);
  }
});`}</CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
