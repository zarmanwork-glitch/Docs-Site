import { Sidebar } from '@/components/layout/Sidebar';
import { TableOfContents } from '@/components/layout/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-8xl">
      <Sidebar />
      <main className="lg:pl-64 xl:pr-64">
        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </article>
      </main>
      <TableOfContents />
    </div>
  );
}
