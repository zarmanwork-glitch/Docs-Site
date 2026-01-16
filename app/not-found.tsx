import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-slate-950'>
      <div className='max-w-md w-full px-6 py-12 text-center space-y-8'>
        {/* 404 Illustration */}
        <div className='space-y-4'>
          <div className='text-7xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 text-transparent bg-clip-text'>
            404
          </div>
          <h1 className='text-4xl font-bold text-slate-900 dark:text-white'>
            Page Not Found
          </h1>
          <p className='text-lg text-slate-600 dark:text-slate-400'>
            Oops! The page you're looking for doesn't exist. Let's get you back
            on track.
          </p>
        </div>

        {/* Suggestions */}
        <div className='bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 space-y-3 border border-slate-200 dark:border-slate-800'>
          <p className='text-sm font-semibold text-slate-900 dark:text-white'>
            Here are some helpful links:
          </p>
          <ul className='space-y-2 text-sm text-slate-600 dark:text-slate-400'>
            <li>✓ Check the URL for typos</li>
            <li>✓ Browse the documentation</li>
            <li>✓ Return to the homepage</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-3'>
          <Link href='/'>
            <Button
              size='lg'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg'
            >
              Back to Home
            </Button>
          </Link>
          <Link href='/docs'>
            <Button
              variant='outline'
              size='lg'
              className='w-full rounded-lg border-slate-300 dark:border-slate-700'
            >
              Browse Docs
            </Button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className='pt-8 space-y-2 text-slate-400 dark:text-slate-600'>
          <div className='text-4xl'>🔍</div>
          <p className='text-xs'>Page lost in cyberspace</p>
        </div>
      </div>
    </div>
  );
}
