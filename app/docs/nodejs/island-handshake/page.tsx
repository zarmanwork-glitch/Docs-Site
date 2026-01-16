import { CodeBlock } from '@/components/code-block';

export default function IslandHandshakePage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-green-600 dark:text-green-400'>
          The Island & Handshake Model
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          A mental model for understanding how V8 and Libuv work together
          seamlessly.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Islands
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Think of V8 and Libuv as two separate islands, each with its own
            specialty. They never directly interact - instead, they communicate
            through a bridge (the Event Loop).
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold'>
                  V8
                </div>
                <h3 className='text-xl font-bold text-blue-900 dark:text-blue-300'>
                  Island V8: The Thinker
                </h3>
              </div>
              <div className='space-y-3'>
                <div>
                  <p className='text-sm font-semibold text-blue-800 dark:text-blue-300'>
                    Location:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    V8 Engine (C++)
                  </p>
                </div>
                <div>
                  <p className='text-sm font-semibold text-blue-800 dark:text-blue-300'>
                    Conceptual Role:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    The "Thinker" - Brain of the operation
                  </p>
                </div>
                <div>
                  <p className='text-sm font-semibold text-blue-800 dark:text-blue-300'>
                    Technical Reality:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    Executes all synchronous JavaScript logic, math, and
                    variable assignments.
                  </p>
                </div>
                <div className='mt-4 pt-4 border-t border-blue-300 dark:border-blue-700'>
                  <ul className='list-disc list-inside text-sm space-y-1 text-zinc-700 dark:text-zinc-300'>
                    <li>Fast at calculations</li>
                    <li>Manages Call Stack</li>
                    <li>Handles memory (Heap)</li>
                    <li>Single-threaded</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl font-bold'>
                  UV
                </div>
                <h3 className='text-xl font-bold text-purple-900 dark:text-purple-300'>
                  Island Libuv: The Doer
                </h3>
              </div>
              <div className='space-y-3'>
                <div>
                  <p className='text-sm font-semibold text-purple-800 dark:text-purple-300'>
                    Location:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    Libuv Library (C)
                  </p>
                </div>
                <div>
                  <p className='text-sm font-semibold text-purple-800 dark:text-purple-300'>
                    Conceptual Role:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    The "Doer" - Muscle of the operation
                  </p>
                </div>
                <div>
                  <p className='text-sm font-semibold text-purple-800 dark:text-purple-300'>
                    Technical Reality:
                  </p>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300'>
                    Manages background "waiting" (Timers) and "heavy lifting"
                    (I/O).
                  </p>
                </div>
                <div className='mt-4 pt-4 border-t border-purple-300 dark:border-purple-700'>
                  <ul className='list-disc list-inside text-sm space-y-1 text-zinc-700 dark:text-zinc-300'>
                    <li>Handles async operations</li>
                    <li>Manages thread pool</li>
                    <li>Interfaces with OS</li>
                    <li>Multi-threaded</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Handshake: 4 Steps
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            The "handshake" is how async operations move from V8 to Libuv and
            back. It's a continuous cycle that makes Node.js non-blocking.
          </p>

          <div className='space-y-4'>
            <div className='bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-500 p-5 rounded-r-lg'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg'>
                  1
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-green-900 dark:text-green-300 mb-2'>
                    The Departure: "Offloading"
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                    <strong>Component:</strong> The Bridge between V8 and Libuv
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    V8 encounters an async call (like fs.readFile), hands the
                    task to Libuv, and immediately clears its Call Stack. V8
                    doesn't wait!
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-500 p-5 rounded-r-lg'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg'>
                  2
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-blue-900 dark:text-blue-300 mb-2'>
                    The Process: "Parallel Work"
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                    <strong>Component:</strong> Background (Libuv's domain)
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    Libuv works on the task (via OS kernel or Thread Pool) while
                    V8 is completely free to execute other JavaScript code. True
                    parallelism!
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-l-4 border-purple-500 p-5 rounded-r-lg'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg'>
                  3
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-purple-900 dark:text-purple-300 mb-2'>
                    The Landing: "Queueing"
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                    <strong>Component:</strong> Task Queues (FIFO)
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    Once Libuv finishes the task, the callback sits in a FIFO
                    queue, patiently waiting for the "bridge" (Event Loop) to
                    open.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-500 p-5 rounded-r-lg'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg'>
                  4
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-orange-900 dark:text-orange-300 mb-2'>
                    The Return: "Event Loop"
                  </h3>
                  <p className='text-sm text-zinc-700 dark:text-zinc-300 mb-2'>
                    <strong>Component:</strong> The Bridge (Event Loop)
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    The Event Loop checks if V8's Call Stack is empty. If yes,
                    it moves the callback from the queue back to V8's stack for
                    execution. Complete!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Visual Flow Example
          </h2>
          <CodeBlock>{`const fs = require('fs');

console.log('1. Start'); // ← V8 executes immediately

// 2. DEPARTURE: V8 hands this to Libuv
fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log('4. File content:', data); // ← Will execute later
});

console.log('2. End'); // ← V8 continues immediately

// What happens behind the scenes:

// Step 1: DEPARTURE (V8 → Libuv)
// ─────────────────────────────────
// V8 sees fs.readFile
// V8: "Hey Libuv, read this file for me"
// V8: "I'm not waiting, moving on..."
// V8 Call Stack is now empty of this task

// Step 2: PROCESS (Libuv works in background)
// ────────────────────────────────────────────
// Libuv: "Got it! Assigning to worker thread 1"
// Worker Thread: *reading file from disk*
// V8: *meanwhile executing other code*
// V8: "console.log('2. End')" ← Notice this runs!

// Step 3: LANDING (Task complete, callback queued)
// ─────────────────────────────────────────────────
// Worker Thread: "File read complete!"
// Libuv: "Putting callback in Task Queue"
// Callback: *sitting in queue, waiting*

// Step 4: RETURN (Event Loop moves callback to V8)
// ─────────────────────────────────────────────────
// Event Loop: "Is V8's Call Stack empty? Yes!"
// Event Loop: "Moving callback from queue to V8"
// V8: "console.log('4. File content:', data)"

// Final Output:
// 1. Start
// 2. End
// 4. File content: [file contents]`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            The Waiter Analogy
          </h2>
          <div className='bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-300 dark:border-amber-700 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-amber-900 dark:text-amber-300 mb-3'>
              Efficiency: Non-Blocking Behavior
            </h3>
            <p className='text-zinc-700 dark:text-zinc-300 mb-4'>
              <strong>The Concept:</strong> Like a waiter taking an order and
              giving it to the kitchen instead of cooking it themselves.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-white dark:bg-zinc-900 rounded-lg p-4 border border-amber-200 dark:border-amber-800'>
                <h4 className='font-semibold text-red-700 dark:text-red-400 mb-2'>
                  ❌ Blocking (Bad)
                </h4>
                <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                  <li>Waiter takes order</li>
                  <li>Waiter goes to kitchen</li>
                  <li>Waiter cooks the food</li>
                  <li>Waiter waits for it to finish</li>
                  <li>Other customers wait forever!</li>
                </ul>
              </div>
              <div className='bg-white dark:bg-zinc-900 rounded-lg p-4 border border-green-200 dark:border-green-800'>
                <h4 className='font-semibold text-green-700 dark:text-green-400 mb-2'>
                  ✅ Non-Blocking (Good)
                </h4>
                <ul className='list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-400'>
                  <li>Waiter takes order (V8)</li>
                  <li>Gives order to kitchen (Libuv)</li>
                  <li>Immediately serves next customer</li>
                  <li>Kitchen cooks in parallel</li>
                  <li>Everyone gets served quickly!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Memory Structure: Districts in RAM
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Different types of data live in different "districts" of memory,
            each managed differently.
          </p>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse bg-white dark:bg-zinc-900 rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-zinc-200 dark:bg-zinc-800'>
                  <th className='p-3 text-left font-semibold'>Structure</th>
                  <th className='p-3 text-left font-semibold'>Manager</th>
                  <th className='p-3 text-left font-semibold'>
                    District in RAM
                  </th>
                  <th className='p-3 text-left font-semibold'>Behavior</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-zinc-200 dark:divide-zinc-800'>
                <tr className='hover:bg-blue-50 dark:hover:bg-blue-900/10'>
                  <td className='p-3 font-semibold text-blue-600 dark:text-blue-400'>
                    Call Stack
                  </td>
                  <td className='p-3 text-sm'>V8 Engine</td>
                  <td className='p-3 text-sm'>Synchronous Lane</td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    LIFO: Fast, small, and temporary. Active function calls
                    only.
                  </td>
                </tr>
                <tr className='hover:bg-purple-50 dark:hover:bg-purple-900/10'>
                  <td className='p-3 font-semibold text-purple-600 dark:text-purple-400'>
                    Memory Heap
                  </td>
                  <td className='p-3 text-sm'>V8 Engine</td>
                  <td className='p-3 text-sm'>Storage Warehouse</td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Unordered: Large space for long-lived objects and arrays.
                  </td>
                </tr>
                <tr className='hover:bg-green-50 dark:hover:bg-green-900/10'>
                  <td className='p-3 font-semibold text-green-600 dark:text-green-400'>
                    Task Queues
                  </td>
                  <td className='p-3 text-sm'>Libuv</td>
                  <td className='p-3 text-sm'>The Waiting Room</td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    FIFO: Holds callbacks until the Call Stack is empty.
                  </td>
                </tr>
                <tr className='hover:bg-amber-50 dark:hover:bg-amber-900/10'>
                  <td className='p-3 font-semibold text-amber-600 dark:text-amber-400'>
                    Buffers
                  </td>
                  <td className='p-3 text-sm'>Node.js</td>
                  <td className='p-3 text-sm'>The Loading Dock</td>
                  <td className='p-3 text-sm text-zinc-600 dark:text-zinc-400'>
                    Off-Heap: Outside V8's memory limit, for raw binary data.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock>{`// CALL STACK: Temporary, fast execution
function add(a, b) {
  return a + b; // ← Executed immediately, then removed
}
const sum = add(5, 3); // ← Goes on stack, executes, pops off

// MEMORY HEAP: Long-lived objects
const user = {
  name: 'John',
  age: 30,
  data: new Array(1000000) // ← Large object lives in heap
};

// TASK QUEUES: Waiting for execution
setTimeout(() => {
  console.log('Callback in queue!'); // ← Waits in queue
}, 1000);

// BUFFERS: Binary data outside V8's limit
const buffer = Buffer.alloc(1024 * 1024 * 100); // 100MB
// ← Stored off-heap, doesn't count against V8's memory limit`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Complete Flow Diagram
          </h2>
          <div className='bg-zinc-100 dark:bg-zinc-900 rounded-lg p-6 border-2 border-zinc-300 dark:border-zinc-700'>
            <pre className='text-xs md:text-sm text-zinc-800 dark:text-zinc-300 overflow-x-auto'>
              {`┌──────────────────────────────────────────────────────────────────┐
│                         ISLAND V8                                │
│                        (The Thinker)                             │
├──────────────────────────────────────────────────────────────────┤
│  Call Stack (LIFO)          │  Memory Heap                       │
│  ├─ function add()          │  ├─ Objects                        │
│  ├─ console.log()           │  ├─ Arrays                         │
│  └─ [executing...]          │  └─ Variables                      │
└─────────────────┬────────────────────────────────────────────────┘
                  │
                  │ 1. DEPARTURE (Offload async)
                  ↓
         ┌────────────────┐
         │   Event Loop   │ ← The Bridge
         │  (Libuv Core)  │
         └────────────────┘
                  │
                  │ 2. PROCESS (Parallel work)
                  ↓
┌──────────────────────────────────────────────────────────────────┐
│                       ISLAND LIBUV                               │
│                       (The Doer)                                 │
├──────────────────────────────────────────────────────────────────┤
│  Thread Pool            │  OS Kernel         │  Timers (Heap)    │
│  ├─ File I/O            │  ├─ Network I/O    │  ├─ setTimeout    │
│  ├─ Crypto              │  ├─ TCP/UDP        │  └─ setInterval   │
│  └─ Compression         │  └─ DNS Lookup     │                   │
└─────────────────┬────────────────────────────────────────────────┘
                  │
                  │ 3. LANDING (Queue callback)
                  ↓
         ┌────────────────┐
         │  Task Queues   │
         │     (FIFO)     │
         │                │
         │  ├─ Timers     │
         │  ├─ I/O        │
         │  └─ Check      │
         └────────────────┘
                  │
                  │ 4. RETURN (Move to Call Stack when empty)
                  ↓
         ┌────────────────┐
         │   Event Loop   │
         │  Checks Stack  │
         └────────────────┘
                  │
                  └─────────→ Back to V8 Call Stack`}
            </pre>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Takeaways
          </h2>
          <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4'>
            <ul className='space-y-3 text-zinc-700 dark:text-zinc-300'>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>Two Islands:</strong> V8 (Thinker) executes JS; Libuv
                  (Doer) handles async
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>Four Handshake Steps:</strong> Departure → Process →
                  Landing → Return
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>Non-Blocking:</strong> V8 never waits - it offloads
                  and continues
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>The Bridge:</strong> Event Loop connects the islands,
                  moving callbacks back
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>Parallel Work:</strong> While Libuv works, V8 keeps
                  executing other code
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-amber-600 dark:text-amber-400 font-bold'>
                  ★
                </span>
                <span>
                  <strong>Memory Districts:</strong> Stack (temp), Heap
                  (objects), Queues (callbacks), Buffers (binary)
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
