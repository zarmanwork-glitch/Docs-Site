import { CodeBlock } from '@/components/code-block';

export default function UseCallbackPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useCallback Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Cache function definitions to prevent unnecessary child component
          re-renders.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useCallback?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useCallback
            </code>{' '}
            is a React Hook that caches a function definition between renders.
            It's perfect for passing functions to optimized child components,
            preventing them from re-rendering unnecessarily when the function
            hasn't actually changed.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Syntax
          </h2>
          <CodeBlock>{`import { useCallback } from 'react';

const memoizedCallback = useCallback(() => {
  // Function body
  doSomething(a, b);
}, [a, b]); // Dependencies: only recreate if these change`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Problem useCallback Solves
          </h2>
          <CodeBlock>{`import { useState, memo } from 'react';

// Child component wrapped in memo (only re-renders if props change)
const Button = memo(({ onClick, children }) => {
  console.log('Button rendered:', children);
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  
  // ❌ PROBLEM: New function created every render
  // Even though Button is memo'd, it still re-renders
  // because onClick is a "new" function each time
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
      <button onClick={() => setOther(other + 1)}>
        Other: {other}
      </button>
    </div>
  );
  // When you click "Other", Button re-renders even though it shouldn't!
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Solution with useCallback
          </h2>
          <CodeBlock>{`import { useState, useCallback, memo } from 'react';

const Button = memo(({ onClick, children }) => {
  console.log('Button rendered:', children);
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  
  // ✅ SOLUTION: Function reference stays the same
  // unless 'count' changes
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
      <button onClick={() => setOther(other + 1)}>
        Other: {other}
      </button>
    </div>
  );
  // Now Button only re-renders when count changes!
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Common Use Cases
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                1. Event Handlers for Child Components
              </h3>
              <CodeBlock>{`function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []); // No dependencies - function never changes
  
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, []);
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                2. Callback Props with Dependencies
              </h3>
              <CodeBlock>{`function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  
  // Memoize callback that depends on 'query'
  const handleSearch = useCallback(async () => {
    const data = await fetch(\`/api/search?q=\${query}\`);
    const json = await data.json();
    setResults(json);
  }, [query]); // Recreate only when query changes
  
  return (
    <div>
      <SearchButton onSearch={handleSearch} />
      <ResultsList results={results} />
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                3. Avoiding Effect Dependencies
              </h3>
              <CodeBlock>{`function DataFetcher() {
  const [data, setData] = useState(null);
  
  // Stable function reference
  const fetchData = useCallback(async (id) => {
    const response = await fetch(\`/api/data/\${id}\`);
    const json = await response.json();
    setData(json);
  }, []);
  
  useEffect(() => {
    // Can safely include fetchData in dependencies
    fetchData(123);
  }, [fetchData]); // Won't cause infinite loop!
  
  return <div>{data?.name}</div>;
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                4. Custom Hooks
              </h3>
              <CodeBlock>{`function useDebounce(callback, delay) {
  const callbackRef = useRef(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  return useCallback((...args) => {
    const timer = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
}

function SearchInput() {
  const [query, setQuery] = useState('');
  
  const debouncedSearch = useDebounce((value) => {
    console.log('Searching for:', value);
    // API call here
  }, 500);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return <input value={query} onChange={handleChange} />;
}`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            When NOT to Use useCallback
          </h2>
          <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-2'>
            <p className='font-semibold text-amber-900 dark:text-amber-300'>
              Don't use useCallback unless you need it!
            </p>
            <ul className='list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300'>
              <li>Function is not passed to child components</li>
              <li>Child components aren't wrapped in React.memo</li>
              <li>Function is used only in event handlers</li>
              <li>No performance issues to solve</li>
            </ul>
          </div>
          <CodeBlock>{`// ❌ BAD: Unnecessary overhead
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Not needed if not passed to children
  
  return <button onClick={increment}>{count}</button>;
}

// ✅ GOOD: No memo needed here
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            useCallback vs useMemo
          </h2>
          <div className='space-y-3'>
            <p className='text-zinc-600 dark:text-zinc-400'>
              These hooks are actually related:
            </p>
            <CodeBlock>{`// These are equivalent:
const memoizedCallback = useCallback(fn, deps);
const memoizedCallback = useMemo(() => fn, deps);

// useCallback is just syntactic sugar for useMemo!`}</CodeBlock>

            <div className='grid md:grid-cols-2 gap-4 mt-4'>
              <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
                <h3 className='font-semibold text-purple-900 dark:text-purple-300 mb-2'>
                  useCallback
                </h3>
                <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                  <li>Returns the function itself</li>
                  <li>For passing to children</li>
                  <li>Prevents re-renders</li>
                </ul>
              </div>

              <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
                <h3 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
                  useMemo
                </h3>
                <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                  <li>Returns function's result</li>
                  <li>For expensive calculations</li>
                  <li>Prevents re-computing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Only use with React.memo'd child components</li>
              <li>Include all dependencies in the dependency array</li>
              <li>
                Use functional updates (setCount(c c + 1)) to avoid dependencies
              </li>
              <li>Don't use for every function - it has overhead</li>
              <li>Profile performance before and after optimization</li>
              <li>Remember: readability premature optimization</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
