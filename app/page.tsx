import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
            Build Amazing Documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A modern documentation site built with Next.js, TypeScript, and Tailwind CSS.
            Start building your documentation today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/docs/getting-started"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Started
            </Link>
            <Link
              href="/docs/examples"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              View Examples <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Fast & Modern"
              description="Built with Next.js 14+ App Router for optimal performance and developer experience"
              href="/docs/getting-started"
              icon="⚡"
            />
            <Card
              title="Beautiful Design"
              description="Styled with Tailwind CSS for a clean, responsive design that works everywhere"
              href="/docs/guides/styling"
              icon="🎨"
            />
            <Card
              title="TypeScript First"
              description="Fully typed with TypeScript for better development experience and fewer bugs"
              href="/docs/api-reference"
              icon="📘"
            />
            <Card
              title="Easy Navigation"
              description="Sidebar navigation, table of contents, and search to help users find what they need"
              href="/docs/guides/routing"
              icon="🧭"
            />
            <Card
              title="Dark Mode"
              description="Built-in dark mode support for comfortable reading in any lighting condition"
              href="/docs/guides/styling"
              icon="🌙"
            />
            <Card
              title="Examples Included"
              description="Learn from real-world examples including blog, e-commerce, and dashboard layouts"
              href="/docs/examples"
              icon="📦"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
