'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';

function DocsNav() {
  return (
    <nav className='border-b sticky top-0 z-50 bg-background backdrop-blur-sm'>
      <div className='flex items-center justify-between h-16 px-4 sm:px-6'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger className='md:hidden cursor-pointer' />
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DocsNav />
        <main className='flex-1'>
          <div className='max-w-4xl mx-auto px-6 py-8'>{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
