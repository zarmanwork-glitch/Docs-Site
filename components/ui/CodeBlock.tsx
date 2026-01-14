import { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

export function CodeBlock({ children, language = 'typescript' }: CodeBlockProps) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      {language && (
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto bg-gray-50 p-4 dark:bg-gray-900">
        <code className="text-sm text-gray-900 dark:text-gray-100">{children}</code>
      </pre>
    </div>
  );
}
