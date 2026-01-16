'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative group'>
      <button
        onClick={copyToClipboard}
        className='absolute right-2 top-2 p-2 rounded-md bg-zinc-700 dark:bg-zinc-800 hover:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer'
        aria-label='Copy code'
      >
        {copied ? (
          <Check className='h-4 w-4 text-green-400' />
        ) : (
          <Copy className='h-4 w-4 text-zinc-300' />
        )}
      </button>
      <pre className='p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 overflow-x-auto'>
        <code className='text-sm text-zinc-800 dark:text-zinc-200'>
          {children}
        </code>
      </pre>
    </div>
  );
}
