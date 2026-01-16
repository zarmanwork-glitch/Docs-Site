import { CodeBlock } from '@/components/code-block';

export default function UseMemoPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useMemo Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Cache expensive calculations to boost performance and prevent
          unnecessary work.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useMemo?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useMemo
            </code>{' '}
            is a React Hook that caches the result of an expensive calculation
            between renders. It's perfect for filtering large arrays, heavy math
            transformations, or any computation that would slow down your app if
            recalculated on every render.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Syntax
          </h2>
          <CodeBlock>{`import { useMemo } from 'react';

const memoizedValue = useMemo(() => {
  // Expensive calculation here
  return computeExpensiveValue(a, b);
}, [a, b]); // Dependencies: only recalculate if these change`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Simple Example
          </h2>
          <CodeBlock>{`import { useState, useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');
  
  // WITHOUT useMemo: filters on EVERY render
  // const filteredItems = items.filter(item => 
  //   item.name.includes(filter)
  // );
  
  // WITH useMemo: only filters when items or filter change
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]);
  
  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
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
                1. Filtering/Sorting Large Lists
              </h3>
              <CodeBlock>{`function ProductList({ products, category }) {
  const sortedProducts = useMemo(() => {
    return products
      .filter(p => p.category === category)
      .sort((a, b) => b.rating - a.rating);
  }, [products, category]);
  
  return (
    <ul>
      {sortedProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                2. Heavy Math Calculations
              </h3>
              <CodeBlock>{`function PrimeNumbers({ max }) {
  const primes = useMemo(() => {
    console.log('Calculating primes...');
    const isPrime = (n) => {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    };
    
    return Array.from({ length: max }, (_, i) => i)
      .filter(isPrime);
  }, [max]);
  
  return <div>Found {primes.length} primes</div>;
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                3. Derived State
              </h3>
              <CodeBlock>{`function ShoppingCart({ items }) {
  const summary = useMemo(() => ({
    total: items.reduce((sum, item) => sum + item.price * item.qty, 0),
    itemCount: items.reduce((sum, item) => sum + item.qty, 0),
    tax: items.reduce((sum, item) => sum + item.price * item.qty, 0) * 0.1
  }), [items]);
  
  return (
    <div>
      <p>Items: {summary.itemCount}</p>
      <p>Subtotal: \${summary.total.toFixed(2)}</p>
      <p>Tax: \${summary.tax.toFixed(2)}</p>
      <p>Total: \${(summary.total + summary.tax).toFixed(2)}</p>
    </div>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                4. Preventing Referential Inequality
              </h3>
              <CodeBlock>{`function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useMemo: new object every render
  // const config = { theme: 'dark', lang: 'en' };
  
  // With useMemo: same object reference unless dependencies change
  const config = useMemo(() => ({
    theme: 'dark',
    lang: 'en'
  }), []); // Empty deps = never changes
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Render: {count}
      </button>
      {/* Child only re-renders if config actually changes */}
      <Child config={config} />
    </div>
  );
}

function Child({ config }) {
  console.log('Child rendered');
  return <div>Theme: {config.theme}</div>;
}`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            When NOT to Use useMemo
          </h2>
          <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-2'>
            <p className='font-semibold text-amber-900 dark:text-amber-300'>
              Don't overuse useMemo! It adds overhead.
            </p>
            <ul className='list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300'>
              <li>Simple calculations (adding two numbers)</li>
              <li>Rendering is already fast</li>
              <li>Values change on every render anyway</li>
              <li>You're just guessing it might be slow</li>
            </ul>
          </div>
          <CodeBlock>{`// ❌ BAD: Unnecessary overhead
const sum = useMemo(() => a + b, [a, b]);

// ✅ GOOD: Just calculate it
const sum = a + b;

// ❌ BAD: Values always change
const timestamp = useMemo(() => Date.now(), []);

// ✅ GOOD: Use when actually expensive
const filteredList = useMemo(() => 
  hugeList.filter(item => item.price > 100),
  [hugeList]
);`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            useMemo vs useCallback
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-900 dark:text-purple-300 mb-2'>
                useMemo
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>Memoizes VALUES</li>
                <li>Returns the result</li>
                <li>For expensive calculations</li>
                <li>Example: filtered arrays, totals</li>
              </ul>
              <CodeBlock language='javascript'>{`const value = useMemo(
  () => compute(a, b),
  [a, b]
);`}</CodeBlock>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
                useCallback
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>Memoizes FUNCTIONS</li>
                <li>Returns the function itself</li>
                <li>For passing to child components</li>
                <li>Example: event handlers</li>
              </ul>
              <CodeBlock language='javascript'>{`const fn = useCallback(
  () => doSomething(a, b),
  [a, b]
);`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>
                Profile first - only optimize if there's a real performance
                issue
              </li>
              <li>Use for expensive calculations on large datasets</li>
              <li>Include all dependencies in the dependency array</li>
              <li>Don't memoize everything - it has overhead too</li>
              <li>Combine with React.memo for child components</li>
              <li>Remember: premature optimization is the root of all evil</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
