import { CodeBlock } from '@/components/code-block';

export default function UseStatePage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useState Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master React's most fundamental hook for managing component state.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useState?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useState
            </code>{' '}
            is a React Hook that allows components to persist data across
            renders. It triggers a UI update whenever its value changes by
            comparing the old and new memory references. It supports direct
            values, functional updates for stale data protection, and lazy
            initialization for performance-heavy tasks.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Usage
          </h2>
          <CodeBlock>{`import { useState } from 'react';

function Counter() {
  // Declare a state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Concepts
          </h2>

          <div className='space-y-4'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                1. Direct Value Updates
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                The simplest way to update state is by passing a new value
                directly.
              </p>
              <CodeBlock>{`const [name, setName] = useState('John');

// Direct update
setName('Jane');`}</CodeBlock>
            </div>

            <div className='border-l-4 border-green-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                2. Functional Updates (Stale Data Protection)
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Use a function when the new state depends on the previous state.
                This prevents stale closures.
              </p>
              <CodeBlock>{`const [count, setCount] = useState(0);

// ❌ Can cause issues with stale data
setCount(count + 1);

// ✅ Always gets latest state
setCount(prevCount => prevCount + 1);

// Example: Multiple rapid updates
function handleClick() {
  setCount(c => c + 1); // Uses latest value
  setCount(c => c + 1); // Uses latest value
  setCount(c => c + 1); // Uses latest value
  // Result: count increases by 3
}`}</CodeBlock>
            </div>

            <div className='border-l-4 border-purple-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                3. Lazy Initialization (Performance)
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                For expensive computations, pass a function to useState. It only
                runs once on mount.
              </p>
              <CodeBlock>{`// ❌ Runs on every render (expensive!)
const [data, setData] = useState(expensiveComputation());

// ✅ Only runs once on mount
const [data, setData] = useState(() => expensiveComputation());

// Real example
const [items, setItems] = useState(() => {
  const saved = localStorage.getItem('items');
  return saved ? JSON.parse(saved) : [];
});`}</CodeBlock>
            </div>

            <div className='border-l-4 border-orange-500 pl-4'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                4. Memory Reference Comparison
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                React uses Object.is() comparison to detect changes. Modifying
                objects/arrays in place won't trigger re-renders.
              </p>
              <CodeBlock>{`const [items, setItems] = useState([1, 2, 3]);

// ❌ Doesn't trigger re-render (same reference)
items.push(4);
setItems(items);

// ✅ Creates new array (new reference)
setItems([...items, 4]);

// Object example
const [user, setUser] = useState({ name: 'John', age: 30 });

// ❌ Mutates object
user.age = 31;
setUser(user);

// ✅ Creates new object
setUser({ ...user, age: 31 });`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Common Patterns
          </h2>
          <CodeBlock>{`// Toggle boolean
const [isOpen, setIsOpen] = useState(false);
setIsOpen(prev => !prev);

// Update object property
const [user, setUser] = useState({ name: '', email: '' });
setUser(prev => ({ ...prev, email: 'new@email.com' }));

// Add to array
const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]);

// Remove from array
setItems(prev => prev.filter(item => item.id !== id));

// Update array item
setItems(prev => prev.map(item => 
  item.id === id ? { ...item, completed: true } : item
));`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>
              Always use functional updates when new state depends on old state
            </li>
            <li>Use lazy initialization for expensive initial values</li>
            <li>Never mutate state directly - always create new references</li>
            <li>
              Keep state as simple as possible - split complex state into
              multiple useState calls
            </li>
            <li>
              Consider useReducer for complex state logic with multiple
              sub-values
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
