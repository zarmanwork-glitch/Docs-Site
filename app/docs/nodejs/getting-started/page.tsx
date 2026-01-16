import { CodeBlock } from '@/components/code-block';

export default function NodeGettingStartedPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-zinc-900 dark:text-white'>
          Getting Started with Node.js
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Node.js is a JavaScript runtime built on Chrome&lsquo;s V8 engine.
          Learn how to build server-side applications with Node.js.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is Node.js?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Node.js is an open-source, cross-platform JavaScript runtime
            environment that executes JavaScript code outside of a web browser.
            It's designed to build scalable network applications.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Prerequisites
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Basic understanding of JavaScript</li>
            <li>Familiarity with command line/terminal</li>
            <li>A code editor (VS Code recommended)</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Installation
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Download and install Node.js from the official website or use a
            version manager like nvm:
          </p>
          <CodeBlock>{`# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node

# Verify installation
node --version
npm --version`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Your First Node.js App
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Create a simple HTTP server:
          </p>
          <CodeBlock>{`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
