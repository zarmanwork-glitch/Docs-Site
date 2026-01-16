import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ModernDocsHome() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black'>
      {/* Navigation */}
      <nav className='border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <div className='font-semibold text-lg'>DevDocs</div>
            <div className='hidden md:flex items-center gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition'
              >
                Docs
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition'
              >
                Guides
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition'
              >
                API
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition'
              >
                Community
              </a>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button
              variant='ghost'
              size='sm'
            >
              Sign In
            </Button>
            <Button
              size='sm'
              className='bg-blue-600 hover:bg-blue-700'
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-6 pt-20 pb-16'>
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span className='text-gray-600 dark:text-gray-400'>
              Updated for 2026
            </span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
            <span className='text-gray-900 dark:text-white'>
              Documentation for
            </span>
            <br />
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Modern Web Development
            </span>
          </h1>

          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            Everything you need to build production-ready applications with
            React, Node.js, and modern JavaScript. Clear guides, real examples,
            best practices.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8'
            >
              Browse Documentation
              <svg
                className='ml-2 h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Button>
            <Button
              size='lg'
              variant='outline'
            >
              Quick Start Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* React Card */}
          <Card className='border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group'>
            <CardHeader className='space-y-4'>
              <div className='h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition'>
                <svg
                  className='h-7 w-7 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z' />
                </svg>
              </div>
              <div>
                <CardTitle className='text-xl mb-2'>React</CardTitle>
                <CardDescription className='text-gray-600 dark:text-gray-400'>
                  Component-based UI library for building interactive user
                  interfaces with hooks and modern patterns.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href='#'
                className='text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium inline-flex items-center gap-1 group'
              >
                View React Docs
                <svg
                  className='h-4 w-4 transition-transform group-hover:translate-x-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </CardContent>
          </Card>

          {/* JavaScript Card */}
          <Card className='border-gray-200 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 group'>
            <CardHeader className='space-y-4'>
              <div className='h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition'>
                <svg
                  className='h-7 w-7 text-yellow-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' />
                </svg>
              </div>
              <div>
                <CardTitle className='text-xl mb-2'>JavaScript</CardTitle>
                <CardDescription className='text-gray-600 dark:text-gray-400'>
                  Modern JavaScript fundamentals including ES6+, async/await,
                  modules, and advanced techniques.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href='#'
                className='text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 font-medium inline-flex items-center gap-1 group'
              >
                View JS Docs
                <svg
                  className='h-4 w-4 transition-transform group-hover:translate-x-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </CardContent>
          </Card>

          {/* Node.js Card */}
          <Card className='border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 group'>
            <CardHeader className='space-y-4'>
              <div className='h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition'>
                <svg
                  className='h-7 w-7 text-green-500'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.12-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.08-.05.18-.05.25 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.08.04-.17.04-.25 0l-1.91-1.14c-.06-.03-.14-.04-.2-.02-.55.19-.66.22-1.18.36-.13.04-.33.1.07.29l2.49 1.47c.24.13.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.06 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z' />
                </svg>
              </div>
              <div>
                <CardTitle className='text-xl mb-2'>Node.js</CardTitle>
                <CardDescription className='text-gray-600 dark:text-gray-400'>
                  Server-side JavaScript runtime for building scalable network
                  applications and REST APIs.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href='#'
                className='text-green-600 dark:text-green-400 hover:text-green-700 font-medium inline-flex items-center gap-1 group'
              >
                View Node Docs
                <svg
                  className='h-4 w-4 transition-transform group-hover:translate-x-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className='max-w-7xl mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-800'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Why developers love our docs
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Built by developers, for developers. We focus on clarity,
            completeness, and keeping you productive.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center space-y-3'>
            <div className='text-4xl mb-2'>⚡</div>
            <h3 className='font-semibold text-lg'>Fast & Modern</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Built with the latest technologies for optimal performance and
              developer experience.
            </p>
          </div>

          <div className='text-center space-y-3'>
            <div className='text-4xl mb-2'>📚</div>
            <h3 className='font-semibold text-lg'>Comprehensive Guides</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Step-by-step tutorials and detailed API references for React and
              Node.js.
            </p>
          </div>

          <div className='text-center space-y-3'>
            <div className='text-4xl mb-2'>🎨</div>
            <h3 className='font-semibold text-lg'>Beautiful UI</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Clean and responsive design with dark mode support using shadcn/ui
              components.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to start building?
          </h2>
          <p className='text-lg mb-8 text-blue-100 max-w-2xl mx-auto'>
            Join thousands of developers shipping better apps with our
            documentation.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100'
            >
              Get Started Now
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white/10'
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-gray-200 dark:border-gray-800 mt-16'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
            Built with Next.js and shadcn/ui · © 2026 DevDocs
          </div>
        </div>
      </footer>
    </div>
  );
}
