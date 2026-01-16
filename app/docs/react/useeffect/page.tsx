import { CodeBlock } from '@/components/code-block';

export default function UseEffectPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useEffect Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master side effects in React - API calls, subscriptions, and more.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useEffect?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useEffect
            </code>{' '}
            is a React Hook that runs code after render based on a dependency
            array. It's perfect for synchronizing your component with external
            systems like APIs, WebSockets, timers, and subscriptions.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Usage
          </h2>
          <CodeBlock>{`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This runs after every render where userId changes
    setLoading(true);
    
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Dependency array
  
  if (loading) return <div>Loading...</div>;
  return <div>Hello, {user.name}!</div>;
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Dependency Array
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            The second argument to useEffect controls when the effect runs:
          </p>
          <CodeBlock>{`// Runs after EVERY render
useEffect(() => {
  console.log('Runs every render');
});

// Runs only ONCE after initial render
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// Runs when 'count' changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Cleanup Function
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Return a cleanup function to prevent memory leaks with timers,
            subscriptions, or event listeners:
          </p>
          <CodeBlock>{`useEffect(() => {
  // Setup
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  // Cleanup function
  return () => {
    clearInterval(timer);
    console.log('Cleanup: timer cleared');
  };
}, []);`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Common Use Cases
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                1. Fetching Data
              </h3>
              <CodeBlock>{`useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, []);`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                2. WebSocket Connection
              </h3>
              <CodeBlock>{`useEffect(() => {
  const socket = new WebSocket('ws://localhost:8080');
  
  socket.onmessage = (event) => {
    setMessages(prev => [...prev, event.data]);
  };
  
  return () => socket.close();
}, []);`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                3. Event Listeners
              </h3>
              <CodeBlock>{`useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Always include all dependencies used inside the effect</li>
              <li>Use cleanup functions to prevent memory leaks</li>
              <li>
                Avoid object/array dependencies (they cause infinite loops)
              </li>
              <li>
                Consider using useCallback/useMemo for function/object
                dependencies
              </li>
              <li>
                Don't forget async functions need to be defined inside the
                effect
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
