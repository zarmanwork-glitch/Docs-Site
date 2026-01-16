export default function JavaScriptAdvancedPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>
          Advanced JavaScript Concepts
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master iteration, functional programming, OOP, and asynchronous
          patterns.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Iteration Methods Section */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Iteration Methods Comparison
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Method
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Category
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Iterates Over
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Return Value
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    break?
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Best Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .map()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Higher-Order Function
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Array Values
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    New Array
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    React UI: Transform data for JSX
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .forEach()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Higher-Order Function
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Array Values
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-purple-600'>
                    undefined
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Side Effects: Logging, DB saves
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    for...of
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Statement
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Iterables
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    None
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Cleanest array loop
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    for...in
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Statement
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Object Keys
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    None
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Object inspection
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    for (Classic)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Statement
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Logic-based
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    None
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    High performance loops
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    while
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Statement
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Condition-based
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    None
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Waiting for status change
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Array Methods Section */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Array.prototype Methods
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Method
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Role
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Return Type
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Mutates?
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .map()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Transform
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    U[]
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'users.map(u => ({...u, active: true}))'}
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .filter()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Select
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    T[]
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'items.filter(i => i.price < 100)'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .reduce()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Accumulate
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    U (Any)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'arr.reduce((a, b) => a + b.total, 0)'}
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .find()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Locate
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    T | undefined
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {"users.find(u => u.id === 'u123')"}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .findIndex()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Locate Index
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    number
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'arr.findIndex(p => p.id === id)'}
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .some()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Exists?
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    boolean
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'users.some(u => u.isAdmin)'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .every()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    All match?
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    boolean
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {"inputs.every(i => i.value !== '')"}
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .sort()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Reorder
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    T[]
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    YES
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'[...arr].sort((a,b)=>a-b)'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .flatMap()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Deep Map
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    U[]
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'users.flatMap(u => u.roles)'}
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .at()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Access
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    T | undefined
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      logs.at(-1)
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .forEach()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Effect
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    undefined
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      {'users.forEach(u => console.log(u))'}
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* OOP in JavaScript */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Object-Oriented Programming in JavaScript
          </h2>
          <div className='grid gap-4'>
            <div className='border-l-4 border-blue-500 pl-4 py-2'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Encapsulation
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-2'>
                Bundling data and methods into a single unit and restricting
                direct access.
              </p>
              <p className='text-sm text-green-600 dark:text-green-400 mb-2'>
                Benefit: Security & Predictability
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                class User {'{'}
                <br />
                &nbsp;&nbsp;#password;
                <br />
                &nbsp;&nbsp;constructor(p) {'{'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.#password = p;
                <br />
                &nbsp;&nbsp;{'}'}
                <br />
                {'}'}
              </code>
            </div>

            <div className='border-l-4 border-green-500 pl-4 py-2'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Inheritance
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-2'>
                A child class acquires properties and methods of a parent class.
              </p>
              <p className='text-sm text-green-600 dark:text-green-400 mb-2'>
                Benefit: Code Reusability
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                class Admin extends User {'{'}
                <br />
                &nbsp;&nbsp;deletePost() {'{'}...{'}'}
                <br />
                {'}'}
              </code>
            </div>

            <div className='border-l-4 border-purple-500 pl-4 py-2'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Abstraction
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-2'>
                Hiding complex implementation details and showing only essential
                features.
              </p>
              <p className='text-sm text-green-600 dark:text-green-400 mb-2'>
                Benefit: Simplicity & Focus
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                class DB {'{'}
                <br />
                &nbsp;&nbsp;connect() {'{'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;throw new Error("Implement this")
                <br />
                &nbsp;&nbsp;{'}'}
                <br />
                {'}'}
              </code>
            </div>

            <div className='border-l-4 border-orange-500 pl-4 py-2'>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
                Polymorphism
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-2'>
                Different objects respond to the same method name in their own
                way.
              </p>
              <p className='text-sm text-green-600 dark:text-green-400 mb-2'>
                Benefit: Flexibility & Seamless handling
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                {'[circle, square].forEach(s => s.draw());'}
              </code>
            </div>
          </div>
        </section>

        {/* Prototype Inheritance */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Prototype Inheritance
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Prototypal inheritance is JavaScript's native mechanism for sharing
            functionality between objects through a delegation system. Instead
            of copying properties, every object holds a hidden link to a
            prototype object, forming a "prototype chain" that the engine
            traverses to find methods or data. This allows multiple instances to
            share the same memory for methods, making it more efficient than
            traditional class-based copying.
          </p>
        </section>

        {/* Function Types */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Function Declaration vs Expression
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-blue-500 mb-3'>
                Function Declaration
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Defines a named function. These are hoisted to the top of their
                scope, meaning you can call the function before it appears in
                the code.
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                function greet() {'{'}
                <br />
                &nbsp;&nbsp;return "Hello";
                <br />
                {'}'}
              </code>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-green-500 mb-3'>
                Function Expression
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Defines a function as part of a variable assignment. These are
                not hoisted; the variable is hoisted (as undefined), but the
                function assignment stays in place.
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                const greet = function() {'{'}
                <br />
                &nbsp;&nbsp;return "Hello";
                <br />
                {'}'}
              </code>
            </div>
          </div>
        </section>

        {/* IIFE */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Immediately-Invoked Function Expression (IIFE)
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            An IIFE is a function that runs as soon as it is defined. It is
            wrapped in parentheses to turn the declaration into an expression,
            followed by () to execute it.
          </p>
          <div className='bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 mb-4'>
            <p className='text-sm font-semibold text-zinc-900 dark:text-white mb-2'>
              Primary Purpose:
            </p>
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              To create a private scope and avoid polluting the global
              namespace.
            </p>
          </div>
          <div className='bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100 overflow-auto'>
            {'(function() {'}
            <br />
            &nbsp;&nbsp;const privateVar = "secret";
            <br />
            &nbsp;&nbsp;console.log(privateVar);
            <br />
            {'})();'}
          </div>
        </section>

        {/* Arrow vs Regular Functions */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Regular Function vs Arrow Function
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Feature
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Function Declaration
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Function Expression
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Arrow Function
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    Hoisted
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    No
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    No
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    this context
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Dynamic
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Dynamic
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-blue-600 dark:text-blue-400'>
                    Lexical
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    Use with new
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Yes
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    No
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    Common Use
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    General logic
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Callbacks / Closures
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    React / Array methods
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call, Apply, Bind */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            call, apply, and bind
          </h2>
          <div className='grid gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-blue-500 mb-3'>
                .call()
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Invokes a function immediately. You pass the this context first,
                followed by arguments individually (comma-separated).
              </p>
              <p className='text-sm font-semibold text-green-600 dark:text-green-400 mb-3'>
                Why it's important:
              </p>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-3'>
                Allows Method Borrowing. One object can use a method belonging
                to another object without copying the code.
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                func.call(thisObj, arg1, arg2);
              </code>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-green-500 mb-3'>
                .apply()
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Invokes a function immediately. You pass the this context first,
                but all other arguments are passed as one single array.
              </p>
              <p className='text-sm font-semibold text-green-600 dark:text-green-400 mb-3'>
                Why it's important:
              </p>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-3'>
                Essential for Variable Arguments. It lets you pass an array into
                a function that usually expects separate parameters.
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                Math.max.apply(null, [1, 2, 3]);
              </code>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-500 mb-3'>
                .bind()
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 mb-3'>
                Does not run the function. It returns a new copy of the function
                with this locked to the object you provided.
              </p>
              <p className='text-sm font-semibold text-green-600 dark:text-green-400 mb-3'>
                Why it's important:
              </p>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-3'>
                Context Persistence. It ensures this doesn't change even when
                the function is passed as a callback or delayed.
              </p>
              <code className='block bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100'>
                const logName = user.getName.bind(user);
              </code>
            </div>
          </div>
        </section>

        {/* Function Properties and Methods */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Function Properties & Methods
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Name
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Type
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Purpose
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .name
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Property
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Returns the function name (for debugging)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      check.name
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .length
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Property
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Number of expected arguments
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      add.length // 2
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .toString()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Method
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Returns source code of the function
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      func.toString()
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .call()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Method
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Calls with given this and arguments
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      func.call(obj, arg)
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .apply()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Method
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Calls with this and array of arguments
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      Math.max.apply(null, arr)
                    </code>
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold'>
                    .bind()
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Method
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Creates new function with locked this
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-xs'>
                    <code className='bg-zinc-800 px-2 py-1 rounded'>
                      func.bind(obj)
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Generator Functions */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Generator Functions
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            A Generator Function is a special type of function in JavaScript
            that can be paused and resumed during its execution. Unlike a normal
            function that runs from start to finish (the "run-to-completion"
            model), a generator allows you to stop the code in the middle, exit
            the function, and then jump back in exactly where you left off.
          </p>
          <div className='bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4'>
            <p className='text-sm font-semibold text-zinc-900 dark:text-white mb-2'>
              Key Features:
            </p>
            <ul className='text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside'>
              <li>
                Uses{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  function*
                </code>{' '}
                syntax
              </li>
              <li>
                Use{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>yield</code>{' '}
                to pause execution
              </li>
              <li>
                Returns iterator object with{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>next()</code>{' '}
                method
              </li>
              <li>Useful for lazy evaluation and infinite sequences</li>
            </ul>
          </div>
        </section>

        {/* Promises */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Promises
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            A Promise is a placeholder for a value that is currently unknown but
            will be available in the future (like a restaurant pager). It
            represents the eventual completion or failure of an asynchronous
            operation, allowing you to write non-blocking code that stays
            readable. By using Promises, you avoid "Callback Hell" and gain a
            powerful way to manage errors that naturally "bubble up" to a
            central handler.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-blue-500 mb-2'>Pending</h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                Initial state. The operation hasn't completed yet.
              </p>
            </div>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-green-500 mb-2'>Fulfilled</h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                The operation completed successfully with a value.
              </p>
            </div>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-4'>
              <h4 className='font-semibold text-red-500 mb-2'>Rejected</h4>
              <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                The operation failed with a reason (error).
              </p>
            </div>
          </div>
          <div className='mt-4 bg-zinc-800 px-3 py-2 rounded text-xs text-zinc-100 overflow-auto'>
            {'const promise = new Promise((resolve, reject) => {'} {'{'}
            <br />
            &nbsp;&nbsp;if (success) resolve(data);
            <br />
            &nbsp;&nbsp;else reject(error);
            <br />
            {'}'});
            <br />
            <br />
            promise
            <br />
            &nbsp;&nbsp;{'.then(data => console.log(data))'}
            <br />
            &nbsp;&nbsp;{'.catch(error => console.error(error));'}
            <br />
          </div>
        </section>
      </div>
    </div>
  );
}
