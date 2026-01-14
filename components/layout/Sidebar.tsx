'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
    ],
  },
  {
    title: 'Guides',
    href: '/docs/guides',
    items: [
      { title: 'Routing', href: '/docs/guides/routing' },
      { title: 'Data Fetching', href: '/docs/guides/data-fetching' },
      { title: 'Styling', href: '/docs/guides/styling' },
    ],
  },
  {
    title: 'API Reference',
    href: '/docs/api-reference',
    items: [
      { title: 'Components', href: '/docs/api-reference/components' },
      { title: 'Functions', href: '/docs/api-reference/functions' },
      { title: 'Hooks', href: '/docs/api-reference/hooks' },
    ],
  },
  {
    title: 'Examples',
    href: '/docs/examples',
    items: [
      { title: 'Blog', href: '/docs/examples/blog' },
      { title: 'E-commerce', href: '/docs/examples/ecommerce' },
      { title: 'Dashboard', href: '/docs/examples/dashboard' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:block">
      <nav className="px-4 py-6">
        {navigation.map((section) => (
          <div key={section.href} className="mb-6">
            <h3 className="mb-2 font-semibold text-sm text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
            {section.items && (
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
