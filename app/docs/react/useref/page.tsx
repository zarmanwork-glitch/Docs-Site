import { CodeBlock } from '@/components/code-block';

export default function UseRefPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useRef Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Store values that persist across renders without triggering
          re-renders.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useRef?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useRef
            </code>{' '}
            is a React Hook that holds a value that doesn't trigger a re-render
            when changed. It's perfect for accessing DOM elements, storing timer
            IDs, or keeping any mutable value that needs to survive re-renders -
            your "secret storage" that React doesn't watch.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Syntax
          </h2>
          <CodeBlock>{`import { useRef } from 'react';

const ref = useRef(initialValue);

// Access the value:
ref.current // returns the current value

// Update the value:
ref.current = newValue // doesn't trigger re-render!`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Accessing DOM Elements
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            The most common use case - directly access and manipulate DOM
            elements:
          </p>
          <CodeBlock>{`import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    // Access the DOM element directly
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Common Use Cases
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                1. Storing Timer IDs
              </h3>
              <CodeBlock>{`function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  
  const startTimer = () => {
    // Store the interval ID
    timerRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    // Access the stored ID to clear it
    clearInterval(timerRef.current);
  };
  
  useEffect(() => {
    // Cleanup on unmount
    return () => clearInterval(timerRef.current);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                2. Tracking Previous Values
              </h3>
              <CodeBlock>{`function UsePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                3. Avoiding Stale Closures
              </h3>
              <CodeBlock>{`function Chat() {
  const [message, setMessage] = useState('');
  const latestMessage = useRef(message);
  
  // Always keep ref updated
  useEffect(() => {
    latestMessage.current = message;
  }, [message]);
  
  const sendMessage = () => {
    setTimeout(() => {
      // This always gets the latest message,
      // even if the component re-rendered
      console.log('Sending:', latestMessage.current);
    }, 3000);
  };
  
  return (
    <div>
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send (3s delay)</button>
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                4. Measuring DOM Elements
              </h3>
              <CodeBlock>{`function MeasureElement() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);
  
  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', background: 'lightblue' }}>
        Measure me!
      </div>
      <p>Width: {dimensions.width}px</p>
      <p>Height: {dimensions.height}px</p>
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                5. Storing Mutable Values
              </h3>
              <CodeBlock>{`function ClickTracker() {
  const clickCountRef = useRef(0);
  const [renders, setRenders] = useState(0);
  
  const handleClick = () => {
    // Increment without causing re-render
    clickCountRef.current += 1;
    console.log('Clicks:', clickCountRef.current);
  };
  
  const forceRender = () => {
    setRenders(r => r + 1);
  };
  
  return (
    <div>
      <p>Renders: {renders}</p>
      <p>Clicks (check console): {clickCountRef.current}</p>
      <button onClick={handleClick}>Click (no re-render)</button>
      <button onClick={forceRender}>Force Re-render</button>
    </div>
  );
}`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            useRef vs useState
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-900 dark:text-purple-300 mb-2'>
                useRef
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>Doesn't trigger re-render</li>
                <li>Mutable (can change .current)</li>
                <li>Persists across renders</li>
                <li>For DOM access, timers, etc.</li>
                <li>Changes are synchronous</li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
                useState
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>Triggers re-render</li>
                <li>Immutable (must use setter)</li>
                <li>Persists across renders</li>
                <li>For UI state that affects render</li>
                <li>Updates are asynchronous</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Use for values that shouldn't trigger re-renders</li>
              <li>Perfect for DOM element references</li>
              <li>Great for storing timer/interval IDs</li>
              <li>
                Don't read/write ref.current during rendering (use useEffect)
              </li>
              <li>Initialize with null for DOM refs</li>
              <li>Remember: changing ref.current doesn't update the UI</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
