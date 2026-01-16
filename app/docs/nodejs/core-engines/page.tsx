import { CodeBlock } from '@/components/code-block';

export default function CoreEnginesPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-green-600 dark:text-green-400'>
          The Core Engines
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Understanding the foundational components that power Node.js.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Overview
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Node.js is built on three core components that work together to
            execute JavaScript outside the browser. Understanding these engines
            is crucial to mastering Node.js performance and behavior.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            V8 Engine
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h3 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
              Google's JavaScript Engine (Written in C++)
            </h3>
            <p className='text-zinc-700 dark:text-zinc-300 mb-3'>
              <strong>Key Fact:</strong> Converts JavaScript to Machine Code and
              manages the Call Stack and Memory (Heap).
            </p>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Compiles JavaScript into optimized machine code</li>
              <li>Manages the execution context (Call Stack)</li>
              <li>Handles memory allocation (Heap)</li>
              <li>Performs garbage collection</li>
              <li>The same engine that powers Google Chrome</li>
            </ul>
          </div>

          <div className='mt-4'>
            <h4 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
              What V8 Does
            </h4>
            <CodeBlock>{`// V8 takes this JavaScript...
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log(result);

// ...and converts it to highly optimized machine code
// that your CPU can execute directly.

// V8 also manages:
// 1. Call Stack: Tracks function execution
// 2. Memory Heap: Stores objects and data
// 3. Garbage Collection: Cleans up unused memory`}</CodeBlock>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Libuv
          </h2>
          <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
            <h3 className='font-semibold text-purple-900 dark:text-purple-300 mb-2'>
              The Asynchronous I/O Library (Written in C)
            </h3>
            <p className='text-zinc-700 dark:text-zinc-300 mb-3'>
              <strong>Key Fact:</strong> Manages the Thread Pool, Event Loop,
              and OS interaction for asynchronous operations.
            </p>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Handles all asynchronous I/O operations</li>
              <li>Manages a thread pool (default: 4 threads)</li>
              <li>Implements the Event Loop</li>
              <li>Interfaces with the operating system</li>
              <li>Makes Node.js non-blocking despite being single-threaded</li>
            </ul>
          </div>

          <div className='mt-4'>
            <h4 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
              Libuv's Responsibilities
            </h4>
            <CodeBlock>{`// When you write asynchronous code like this...
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Libuv handles:
// 1. Takes the file read request from V8
// 2. Assigns it to a worker thread from the pool
// 3. Reads the file in the background
// 4. Places the callback in the task queue when done
// 5. The Event Loop then moves it back to V8

// You can configure the thread pool size:
process.env.UV_THREADPOOL_SIZE = 8; // Increase to 8 threads`}</CodeBlock>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Main Thread
          </h2>
          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <h3 className='font-semibold text-green-900 dark:text-green-300 mb-2'>
              The Single Thread Where JavaScript Runs
            </h3>
            <p className='text-zinc-700 dark:text-zinc-300 mb-3'>
              <strong>Key Fact:</strong> Node is "Single Threaded" only for the
              Call Stack. Background tasks run in parallel.
            </p>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>All JavaScript code executes on one thread</li>
              <li>Synchronous operations block this thread</li>
              <li>Async operations are offloaded to Libuv's thread pool</li>
              <li>
                This is why Node can handle thousands of concurrent connections
              </li>
            </ul>
          </div>

          <div className='mt-4'>
            <h4 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
              Single Thread Explained
            </h4>
            <CodeBlock>{`// ❌ This BLOCKS the main thread (bad for servers!)
const data = fs.readFileSync('huge-file.txt'); // Waits here
console.log('This runs only after file is read');

// ✅ This is NON-BLOCKING (good!)
fs.readFile('huge-file.txt', (err, data) => {
  console.log('File read complete!');
});
console.log('This runs immediately!');

// The main thread:
// 1. Executes synchronous code line by line
// 2. Offloads async work to Libuv
// 3. Continues executing other code
// 4. Picks up completed async callbacks from the queue

// Meanwhile, Libuv's worker threads handle:
// - File I/O
// - Network requests
// - Cryptography
// - Compression
// ...all happening in PARALLEL!`}</CodeBlock>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            How They Work Together
          </h2>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6'>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold'>
                  1
                </div>
                <div>
                  <h4 className='font-semibold text-zinc-900 dark:text-white'>
                    V8 Executes JavaScript
                  </h4>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    Runs your code on the main thread, manages memory and
                    variables.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold'>
                  2
                </div>
                <div>
                  <h4 className='font-semibold text-zinc-900 dark:text-white'>
                    Libuv Handles Async Work
                  </h4>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    Takes async tasks from V8 and processes them in the
                    background.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold'>
                  3
                </div>
                <div>
                  <h4 className='font-semibold text-zinc-900 dark:text-white'>
                    Event Loop Bridges Them
                  </h4>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    Moves completed async callbacks from Libuv back to V8's Call
                    Stack.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock>{`// Example of all three working together:

// 1. V8 starts executing this code
console.log('Start'); // V8: Runs immediately on Call Stack

// 2. V8 sees async operation, hands to Libuv
setTimeout(() => {
  console.log('Timer done!'); // This callback goes to Libuv
}, 1000);

fs.readFile('file.txt', (err, data) => {
  console.log('File read!'); // This callback goes to Libuv
});

// 3. V8 continues with synchronous code
console.log('End'); // V8: Runs immediately on Call Stack

// Output:
// "Start"
// "End"
// "File read!" (when Libuv finishes, via Event Loop)
// "Timer done!" (when 1 second passes, via Event Loop)

// Behind the scenes:
// - V8: Executing sync code on main thread
// - Libuv: Reading file on worker thread
// - Libuv: Tracking timer (no thread needed)
// - Event Loop: Waiting to move callbacks back to V8`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Takeaways
          </h2>
          <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4'>
            <ul className='space-y-3 text-zinc-700 dark:text-zinc-300'>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  <strong>V8</strong> is the brain that understands and executes
                  JavaScript
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  <strong>Libuv</strong> is the muscle that handles all the
                  heavy async work
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  <strong>Main Thread</strong> is single-threaded for JS, but
                  Libuv provides parallelism
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Node.js is "single-threaded" only from JavaScript's
                  perspective
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Background tasks run in parallel on Libuv's thread pool or OS
                  kernel
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
