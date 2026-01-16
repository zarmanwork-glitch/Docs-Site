'use client';
import { useEffect, useState } from 'react';

export default function ReactTopicsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/react-topics.json')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading React topics:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='text-center py-12'>Loading...</div>;
  }

  if (!data) {
    return <div className='text-center py-12'>No data found</div>;
  }

  // Get the first sheet (general topics)
  const topics = data['general topics'] || [];

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>
          React Packages Overview
        </h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Comparison of React packages and their key features
        </p>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-zinc-100 dark:bg-zinc-900'>
              <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                Feature
              </th>
              <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                react (Core)
              </th>
              <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                react-dom
              </th>
              <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                react-dom/client
              </th>
              <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left font-semibold'>
                react-dom/server
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.slice(2).map((row: any, idx: number) => (
              <tr
                key={idx}
                className={
                  idx % 2 === 0
                    ? 'bg-white dark:bg-slate-950'
                    : 'bg-zinc-50 dark:bg-zinc-950'
                }
              >
                <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-semibold text-zinc-900 dark:text-white'>
                  {row.__EMPTY_1 || 'N/A'}
                </td>
                <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300'>
                  {row.__EMPTY_2 || '—'}
                </td>
                <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300'>
                  {row.__EMPTY_3 || '—'}
                </td>
                <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300'>
                  {row.__EMPTY_4 || '—'}
                </td>
                <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300'>
                  {row.__EMPTY_5 || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Debug: Show raw data structure */}
      <details className='mt-8 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg'>
        <summary className='cursor-pointer font-semibold'>
          View Raw Data
        </summary>
        <pre className='mt-4 text-xs overflow-auto max-h-96'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>
    </div>
  );
}
