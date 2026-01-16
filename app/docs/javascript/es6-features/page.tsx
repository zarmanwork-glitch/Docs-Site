import { CodeBlock } from '@/components/code-block';

export default function ES6FeaturesPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>ES6+ Features</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Learn modern JavaScript features introduced in ES6 and beyond.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Arrow Functions
          </h2>
          <CodeBlock>{`// Traditional function
function square(x) {
  return x * x;
}

// Arrow function
const square = x => x * x;

// Arrow function with multiple parameters
const add = (a, b) => a + b;`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Destructuring
          </h2>
          <CodeBlock>{`// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age } = { name: "John", age: 30 };

// Function parameter destructuring
function greet({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Template Literals
          </h2>
          <CodeBlock>{`const name = "World";
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const message = \`
  This is a
  multi-line
  string
\`;`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
