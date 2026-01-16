import { CodeBlock } from '@/components/code-block';

export default function EventLoopPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-green-600 dark:text-green-400'>
          Event Loop & Execution
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Deep dive into how Node.js executes code and manages asynchronous
          operations.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Execution Structures
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Node.js uses several data structures to manage code execution.
            Understanding these structures is key to predicting how your code
            will run.
          </p>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2'>
                Call Stack
              </h3>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Order:</strong> LIFO (Last In, First Out)
              </p>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Function:</strong> Only runs synchronous tasks (Math,
                Logic, console.log)
              </p>
              <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Executes code line by line</li>
                <li>Fast and immediate</li>
                <li>Must be empty before async callbacks run</li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2'>
                Microtask Queue
              </h3>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Order:</strong> FIFO (First In, First Out)
              </p>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Function:</strong> VIP Queue for Promises and
                process.nextTick
              </p>
              <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Highest priority after Call Stack</li>
                <li>Emptied after every operation</li>
                <li>Can starve other queues if overused</li>
              </ul>
            </div>

            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <h3 className='text-lg font-semibold text-green-900 dark:text-green-300 mb-2'>
                Task Queues (Macrotasks)
              </h3>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Order:</strong> FIFO (First In, First Out)
              </p>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Function:</strong> Holds Timers, I/O, and setImmediate
              </p>
              <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Processed in phases by Event Loop</li>
                <li>Lower priority than Microtasks</li>
                <li>Different types have different phases</li>
              </ul>
            </div>

            <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4'>
              <h3 className='text-lg font-semibold text-amber-900 dark:text-amber-300 mb-2'>
                Event Loop
              </h3>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Order:</strong> Cyclic
              </p>
              <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                <strong>Function:</strong> The "Bridge" that moves tasks from
                Queues to Call Stack
              </p>
              <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                <li>Only works when Call Stack is empty</li>
                <li>Runs in continuous phases</li>
                <li>Checks Microtasks after every phase</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Event Loop Phases (The Bus Stops)
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            The Event Loop runs in a continuous cycle through these 5 phases.
            Think of it as a bus making stops at different stations.
          </p>

          <div className='space-y-3'>
            <div className='bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-red-500 p-4 rounded-r-lg'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm'>
                  1
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-red-900 dark:text-red-300'>
                    Timers Phase
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mt-1'>
                    <strong>Task Type:</strong> setTimeout / setInterval
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Executes callbacks whose threshold time has elapsed.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-500 p-4 rounded-r-lg'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm'>
                  2
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-orange-900 dark:text-orange-300'>
                    Pending Callbacks Phase
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mt-1'>
                    <strong>Task Type:</strong> System I/O
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Executes I/O callbacks deferred from the previous cycle
                    (rare errors).
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-500 p-4 rounded-r-lg'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm'>
                  3
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-blue-900 dark:text-blue-300'>
                    Poll Phase (The Engine Room)
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mt-1'>
                    <strong>Task Type:</strong> New I/O Events
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Retrieves new I/O (Database, Network). Node may "hang out"
                    here waiting for events. Most important phase!
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-500 p-4 rounded-r-lg'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm'>
                  4
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-green-900 dark:text-green-300'>
                    Check Phase
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mt-1'>
                    <strong>Task Type:</strong> setImmediate
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Executes callbacks specifically scheduled to run after Poll
                    phase.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-l-4 border-purple-500 p-4 rounded-r-lg'>
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm'>
                  5
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-purple-900 dark:text-purple-300'>
                    Close Callbacks Phase
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mt-1'>
                    <strong>Task Type:</strong> on('close')
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Handles cleanup like socket.destroy() and connection
                    closures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mt-4'>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              <strong>Important:</strong> After each phase, the Event Loop
              checks the Microtask Queue (Promises & process.nextTick) and
              empties it completely before moving to the next phase!
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Priority & Timing (The Race)
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            When multiple async operations complete at the same time, they
            execute in this priority order:
          </p>

          <div className='space-y-3'>
            <div className='bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-4'>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold'>
                  1
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-red-900 dark:text-red-300'>
                    process.nextTick() - Highest Priority
                  </h3>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Runs immediately after current operation, before Promises.
                    Can starve I/O if overused!
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-400 rounded-lg p-4'>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold'>
                  2
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-orange-900 dark:text-orange-300'>
                    Promise.then() / Promise.catch()
                  </h3>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Runs after nextTick but before the Event Loop moves to the
                    next phase.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4'>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold'>
                  3
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-blue-900 dark:text-blue-300'>
                    setTimeout(fn, 0)
                  </h3>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Runs in the next "Timers" phase of the Event Loop.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-green-50 dark:bg-green-900/20 border-2 border-green-300 rounded-lg p-4'>
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold'>
                  4
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-green-900 dark:text-green-300'>
                    setImmediate()
                  </h3>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                    Runs in the "Check" phase (usually after Poll/I/O).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock>{`// Priority demonstration:
console.log('1: Sync');

setTimeout(() => console.log('4: setTimeout'), 0);

setImmediate(() => console.log('5: setImmediate'));

Promise.resolve().then(() => console.log('3: Promise'));

process.nextTick(() => console.log('2: nextTick'));

console.log('1: Sync End');

// Output:
// 1: Sync
// 1: Sync End
// 2: nextTick          (Highest priority microtask)
// 3: Promise           (Promise microtask)
// 4: setTimeout        (Timers phase)
// 5: setImmediate      (Check phase)`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Libuv Offloading (Where Parallelism Happens)
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Different types of async operations are handled differently by
            Libuv:
          </p>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse bg-white dark:bg-zinc-900 rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-zinc-200 dark:bg-zinc-800'>
                  <th className='p-3 text-left font-semibold'>Task Category</th>
                  <th className='p-3 text-left font-semibold'>Managed By</th>
                  <th className='p-3 text-left font-semibold'>Thread Usage</th>
                  <th className='p-3 text-left font-semibold'>Details</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-zinc-200 dark:divide-zinc-800'>
                <tr>
                  <td className='p-3 font-mono text-sm text-blue-600 dark:text-blue-400'>
                    Network I/O
                  </td>
                  <td className='p-3 text-sm'>OS Kernel</td>
                  <td className='p-3'>
                    <span className='inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-semibold'>
                      Parallel
                    </span>
                  </td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Handled by OS (epoll/kqueue). No Thread Pool used. Highly
                    efficient!
                  </td>
                </tr>
                <tr>
                  <td className='p-3 font-mono text-sm text-blue-600 dark:text-blue-400'>
                    File I/O (fs)
                  </td>
                  <td className='p-3 text-sm'>Libuv Thread Pool</td>
                  <td className='p-3'>
                    <span className='inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-semibold'>
                      Parallel
                    </span>
                  </td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Uses 1 of the 4 default worker threads. Can be increased.
                  </td>
                </tr>
                <tr>
                  <td className='p-3 font-mono text-sm text-blue-600 dark:text-blue-400'>
                    Crypto / Zlib
                  </td>
                  <td className='p-3 text-sm'>Libuv Thread Pool</td>
                  <td className='p-3'>
                    <span className='inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-semibold'>
                      Parallel
                    </span>
                  </td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Heavy CPU tasks offloaded to worker threads.
                  </td>
                </tr>
                <tr>
                  <td className='p-3 font-mono text-sm text-blue-600 dark:text-blue-400'>
                    Timers
                  </td>
                  <td className='p-3 text-sm'>Libuv Internal</td>
                  <td className='p-3'>
                    <span className='inline-block px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded text-xs font-semibold'>
                      Single
                    </span>
                  </td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Tracked using a Min-Heap (not a worker thread). Very
                    lightweight.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock>{`// Network I/O: Handled by OS (no thread pool)
const http = require('http');
http.get('http://api.example.com', (res) => {
  console.log('Network request done!');
  // Fast! OS kernel handles this
});

// File I/O: Uses thread pool
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  console.log('File read done!');
  // Uses 1 worker thread from the pool
});

// Crypto: Uses thread pool
const crypto = require('crypto');
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, key) => {
  console.log('Encryption done!');
  // CPU-intensive, uses 1 worker thread
});

// Timer: No thread needed
setTimeout(() => {
  console.log('Timer done!');
  // Just tracked in memory with a heap
}, 1000);`}</CodeBlock>
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
                  Call Stack executes sync code; must be empty for async
                  callbacks to run
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Microtasks (nextTick, Promises) have priority over Macrotasks
                  (Timers, I/O)
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Event Loop runs in 5 phases: Timers → Pending → Poll → Check →
                  Close
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Poll phase is where Node spends most time, waiting for I/O
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  Network I/O is handled by OS; File I/O and Crypto use thread
                  pool
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400'>✓</span>
                <span>
                  process.nextTick can starve I/O if overused - use Promises
                  instead!
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
