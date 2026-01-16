import { CodeBlock } from '@/components/code-block';

export default function JavaScriptFundamentalsPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>
          JavaScript Fundamentals
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master the core concepts of JavaScript programming.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Variables and Data Types
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            JavaScript has several data types including strings, numbers,
            booleans, objects, and more.
          </p>
          <CodeBlock>{`// String
const message = "Hello World";

// Number
let count = 42;
let price = 19.99;

// Boolean
const isActive = true;

// Object
const user = {
  name: "John",
  age: 30
};

// Array
const colors = ["red", "green", "blue"];`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Functions
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Functions are reusable blocks of code that perform specific tasks.
          </p>
          <CodeBlock>{`// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
