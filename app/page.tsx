import { Nav } from '@/components/nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-950'>
      <Nav />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative overflow-hidden border-b border-zinc-200 dark:border-slate-800'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent opacity-40' />
          </div>
          <div className='max-w-7xl mx-auto px-6 py-24 md:py-32'>
            <div className='flex flex-col items-center text-center space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800'>
                  <span className='h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400' />
                  <span className='text-sm font-medium text-blue-900 dark:text-blue-100'>
                    Comprehensive Web Development Docs
                  </span>
                </div>
                <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white'>
                  Master Web Development
                </h1>
                <p className='text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed'>
                  All the best practices, patterns, and in-depth guides you need
                  without searching the internet. Master React, JavaScript, and
                  Node.js in one place.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/docs'>
                  <Button
                    size='lg'
                    className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8'
                  >
                    Start Learning
                  </Button>
                </Link>
                <Link href='/docs/react/getting-started'>
                  <Button
                    variant='outline'
                    size='lg'
                    className='rounded-lg px-8 border-slate-300 dark:border-slate-700'
                  >
                    Explore React
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Cards */}
        <section className='max-w-7xl mx-auto px-6 py-24'>
          <div className='space-y-12'>
            <div className='text-center space-y-4'>
              <h2 className='text-4xl font-bold text-slate-900 dark:text-white'>
                Learning Paths
              </h2>
              <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
                Choose your learning path based on your interests and skill
                level
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* React Card */}
              <Link
                href='/docs/react/getting-started'
                className='group'
              >
                <div className='h-full p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300'>
                  <div className='space-y-4'>
                    <div className='h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <span className='text-2xl'>⚛️</span>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                        React
                      </h3>
                      <p className='text-slate-600 dark:text-slate-400'>
                        Learn to build modern user interfaces with components,
                        hooks, and state management patterns.
                      </p>
                    </div>
                    <div className='pt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium'>
                      Get Started
                      <svg
                        className='h-4 w-4 group-hover:translate-x-1 transition-transform'
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
                    </div>
                  </div>
                </div>
              </Link>

              {/* JavaScript Card */}
              <Link
                href='/docs/javascript/getting-started'
                className='group'
              >
                <div className='h-full p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-yellow-400 dark:hover:border-yellow-600 hover:shadow-lg transition-all duration-300'>
                  <div className='space-y-4'>
                    <div className='h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-950/50 flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <span className='text-2xl'>✨</span>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                        JavaScript
                      </h3>
                      <p className='text-slate-600 dark:text-slate-400'>
                        Master modern JavaScript fundamentals, ES6+ features,
                        and async programming patterns.
                      </p>
                    </div>
                    <div className='pt-4 flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium'>
                      Get Started
                      <svg
                        className='h-4 w-4 group-hover:translate-x-1 transition-transform'
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
                    </div>
                  </div>
                </div>
              </Link>

              {/* Node.js Card */}
              <Link
                href='/docs/nodejs/getting-started'
                className='group'
              >
                <div className='h-full p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300'>
                  <div className='space-y-4'>
                    <div className='h-12 w-12 rounded-lg bg-green-100 dark:bg-green-950/50 flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <span className='text-2xl'>🟢</span>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                        Node.js
                      </h3>
                      <p className='text-slate-600 dark:text-slate-400'>
                        Build scalable server-side applications with event
                        loops, core engines, and best practices.
                      </p>
                    </div>
                    <div className='pt-4 flex items-center gap-2 text-green-600 dark:text-green-400 font-medium'>
                      Get Started
                      <svg
                        className='h-4 w-4 group-hover:translate-x-1 transition-transform'
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
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='border-t border-zinc-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50'>
          <div className='max-w-7xl mx-auto px-6 py-24'>
            <div className='space-y-12'>
              <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold text-slate-900 dark:text-white'>
                  Why Choose Our Docs?
                </h2>
                <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
                  Everything you need to level up your web development skills
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <FeatureCard
                  icon='📚'
                  title='Comprehensive Guides'
                  description='From beginner fundamentals to advanced patterns, our detailed guides cover everything.'
                />
                <FeatureCard
                  icon='✅'
                  title='Industry Best Practices'
                  description='All the best practices, patterns, and solutions in one place. Stop searching the internet.'
                />
                <FeatureCard
                  icon='⚡'
                  title='Up-to-Date'
                  description='Stay current with the latest frameworks, features, and best practices.'
                />
                <FeatureCard
                  icon='🎯'
                  title='Structured Learning'
                  description='Follow curated learning paths designed for progressive skill development.'
                />
                <FeatureCard
                  icon='💡'
                  title='Practical Examples'
                  description='Learn through real-world code examples and interactive demonstrations.'
                />
                <FeatureCard
                  icon='📱'
                  title='Mobile Friendly'
                  description='Access documentation on any device with fully responsive design.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className='max-w-7xl mx-auto px-6 py-24'>
          <div className='space-y-12'>
            <div className='text-center space-y-4'>
              <h2 className='text-4xl font-bold text-slate-900 dark:text-white'>
                Quick Links
              </h2>
              <p className='text-lg text-slate-600 dark:text-slate-400'>
                Jump directly to popular topics
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <QuickLink
                href='/docs/react/hooks'
                title='React Hooks'
                icon='🪝'
              />
              <QuickLink
                href='/docs/javascript/es6-features'
                title='ES6+ Features'
                icon='✨'
              />
              <QuickLink
                href='/docs/nodejs/event-loop'
                title='Event Loop'
                icon='🔄'
              />
              <QuickLink
                href='/docs/react/usestate'
                title='useState Hook'
                icon='📦'
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='border-t border-zinc-200 dark:border-slate-800 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800'>
          <div className='max-w-4xl mx-auto px-6 py-24 text-center space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-4xl font-bold text-white'>
                Ready to Start Learning?
              </h2>
              <p className='text-xl text-blue-100'>
                Dive into our comprehensive documentation and master web
                development.
              </p>
            </div>
            <Link href='/docs'>
              <Button
                size='lg'
                className='bg-white hover:bg-slate-100 text-blue-600 rounded-lg px-8 font-medium'
              >
                Browse All Docs
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer Info */}
        <footer className='border-t border-zinc-200 dark:border-slate-800 py-12'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Built with <span className='text-red-500'>❤️</span> using Next.js
              and shadcn/ui
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors'>
      <div className='text-4xl'>{icon}</div>
      <div>
        <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
          {title}
        </h3>
        <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
}

function QuickLink({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: string;
}) {
  return (
    <Link href={href}>
      <div className='p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all group'>
        <div className='flex items-center gap-3'>
          <span className='text-2xl group-hover:scale-110 transition-transform'>
            {icon}
          </span>
          <div className='flex-1'>
            <h4 className='font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              {title}
            </h4>
          </div>
          <svg
            className='h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all'
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
        </div>
      </div>
    </Link>
  );
}
