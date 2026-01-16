import { CodeBlock } from '@/components/code-block';

export default function AsyncProgrammingPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-yellow-500'>
          Async Programming
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master asynchronous JavaScript with Promises and async/await.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Promises
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Promises represent the eventual completion or failure of an
            asynchronous operation.
          </p>
          <CodeBlock>{`// Creating a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
};

// Using a Promise
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Async/Await
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Async/await makes asynchronous code look and behave more like
            synchronous code.
          </p>
          <CodeBlock>{`// Async function
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Multiple async operations
async function loadAll() {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  return { users, posts };
}`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
