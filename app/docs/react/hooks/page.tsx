import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const hooks = [
  {
    name: 'useState',
    purpose: 'Manage State',
    basicInfo: 'Returns a state value and a function to update it.',
    bestFor: 'Simple values, toggles, input fields.',
    benefit: 'Simplest way to make components interactive.',
    href: '/docs/react/usestate',
  },
  {
    name: 'useEffect',
    purpose: 'Side Effects',
    basicInfo: 'Runs code after render based on a dependency array.',
    bestFor: 'Node API calls, Sockets, Timers, Subscriptions.',
    benefit: 'Keeps sync with external systems (like your backend).',
    href: '/docs/react/useeffect',
  },
  {
    name: 'useContext',
    purpose: 'Global Data',
    basicInfo: 'Shares data through the tree without "prop drilling."',
    bestFor: 'Themes, User Auth, Language settings.',
    benefit: 'Avoids passing props through 10 layers of components.',
    href: '/docs/react/usecontext',
  },
  {
    name: 'useReducer',
    purpose: 'Complex State',
    basicInfo: 'Manages state via "Actions" and a "Reducer" function.',
    bestFor: 'Shopping carts, complex forms, Redux-style logic.',
    benefit: 'Centralizes logic; makes state changes predictable.',
    href: '/docs/react/usereducer',
  },
  {
    name: 'useRef',
    purpose: 'Persistent Ref',
    basicInfo: "Holds a value that doesn't trigger a re-render when changed.",
    bestFor: 'Accessing DOM elements, storing setInterval IDs.',
    benefit: '"Secret storage" that survives re-renders.',
    href: '/docs/react/useref',
  },
  {
    name: 'useMemo',
    purpose: 'Memoize Value',
    basicInfo: 'Caches the result of an expensive calculation.',
    bestFor: 'Filtering large arrays, heavy math transformations.',
    benefit: 'Prevents lagging by skipping unnecessary calculations.',
    href: '/docs/react/usememo',
  },
  {
    name: 'useCallback',
    purpose: 'Memoize Func',
    basicInfo: 'Caches a function definition between renders.',
    bestFor: 'Passing functions to optimized child components.',
    benefit: 'Prevents child components from re-rendering for no reason.',
    href: '/docs/react/usecallback',
  },
];

export default function HooksPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>React Hooks</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Master React Hooks - the powerful building blocks for modern React
          applications.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What are React Hooks?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            React Hooks are functions that let you "hook into" React state and
            lifecycle features from function components. They were introduced in
            React 16.8 and have revolutionized how we write React components.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Available Hooks
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            Click on any hook below to explore detailed documentation, examples,
            and best practices.
          </p>

          <div className='space-y-3'>
            {hooks.map((hook) => (
              <Collapsible
                key={hook.name}
                className='border border-zinc-200 dark:border-zinc-800 rounded-lg'
              >
                <CollapsibleTrigger className='w-full cursor-pointer'>
                  <div className='flex items-center justify-between p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors'>
                    <div className='flex items-center gap-4 text-left flex-1'>
                      <code className='text-lg font-mono font-semibold text-blue-600 dark:text-blue-400'>
                        {hook.name}
                      </code>
                      <span className='text-sm text-zinc-600 dark:text-zinc-400'>
                        {hook.purpose}
                      </span>
                    </div>
                    <ChevronDown className='h-5 w-5 text-zinc-400 transition-transform duration-200 [[data-state=open]>&]:rotate-180' />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className='px-4 pb-4 space-y-3 border-t border-zinc-200 dark:border-zinc-800 pt-4'>
                    <div>
                      <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
                        Basic Info:{' '}
                      </span>
                      <span className='text-sm text-zinc-600 dark:text-zinc-400'>
                        {hook.basicInfo}
                      </span>
                    </div>
                    <div>
                      <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
                        Best For:{' '}
                      </span>
                      <span className='text-sm text-zinc-600 dark:text-zinc-400'>
                        {hook.bestFor}
                      </span>
                    </div>
                    <div>
                      <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
                        Benefit:{' '}
                      </span>
                      <span className='text-sm text-zinc-600 dark:text-zinc-400'>
                        {hook.benefit}
                      </span>
                    </div>
                    <Link
                      href={hook.href}
                      className='inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-2'
                    >
                      View detailed documentation →
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </section>

        <section className='space-y-4 mt-8'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Rules of Hooks
          </h2>
          <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-2'>
            <p className='font-semibold text-amber-900 dark:text-amber-300'>
              Important Guidelines:
            </p>
            <ul className='list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300'>
              <li>
                Only call Hooks at the top level (not inside loops, conditions,
                or nested functions)
              </li>
              <li>
                Only call Hooks from React function components or custom Hooks
              </li>
              <li>
                Hook names must start with "use" (e.g., useState, useEffect)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
