import { CodeBlock } from '@/components/code-block';

export default function JavaScriptGettingStartedPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>
          Getting Started with JavaScript
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          JavaScript is the programming language of the web. Learn the
          fundamentals and modern features to build powerful applications.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is JavaScript?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            JavaScript is a high-level, interpreted programming language that
            conforms to the ECMAScript specification. It's a language that is
            also characterized as dynamic, weakly typed, prototype-based and
            multi-paradigm.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Why Learn JavaScript?
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Essential for web development</li>
            <li>Runs in the browser and on servers (Node.js)</li>
            <li>Large ecosystem and community</li>
            <li>Versatile - frontend, backend, mobile, desktop</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Your First JavaScript Code
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Here's a simple JavaScript example:
          </p>
          <CodeBlock>{`// Variables
const name = 'JavaScript';
let year = 2024;

// Function
function greet(language) {
  return \`Hello, \${language}!\`;
}

// Call the function
console.log(greet(name));

// Array and loop
const features = ['dynamic', 'versatile', 'popular'];
features.forEach(feature => {
  console.log(feature);
});`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Next Steps
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Continue learning by exploring:
          </p>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Variables and data types</li>
            <li>Functions and scope</li>
            <li>Objects and arrays</li>
            <li>Async programming with Promises</li>
            <li>Modern ES6+ features</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
