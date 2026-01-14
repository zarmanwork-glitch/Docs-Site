'use client';

import { useState } from 'react';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden rounded border border-gray-300 px-1.5 py-0.5 text-xs dark:border-gray-700 sm:inline">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="mx-auto mt-16 max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-lg border border-gray-300 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center border-b border-gray-200 dark:border-gray-700">
                <svg className="ml-4 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-transparent px-4 py-3 text-gray-900 outline-none dark:text-gray-100"
                  autoFocus
                />
              </div>
              <div className="p-4 text-sm text-gray-600 dark:text-gray-400">
                Start typing to search documentation...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
