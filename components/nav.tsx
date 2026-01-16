import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Nav() {
  return (
    <nav className='border-b sticky top-0 z-50 bg-background backdrop-blur-sm'>
      <div className='flex items-center justify-between h-16 px-4 sm:px-6 max-w-7xl mx-auto'>
        <div className='flex items-center gap-2'>
          <Link
            href='/'
            className='font-bold text-xl'
          >
            Docs
          </Link>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Link
            href='/docs'
            className='hidden sm:inline-block'
          >
            <Button variant='ghost'>Documentation</Button>
          </Link>
          <Link
            href='/docs'
            className='sm:hidden'
          >
            <Button
              variant='ghost'
              size='sm'
            >
              Docs
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
