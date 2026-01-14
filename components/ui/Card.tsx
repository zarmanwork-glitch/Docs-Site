import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export function Card({ title, description, href, icon }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-800 dark:hover:border-blue-500"
    >
      {icon && <div className="mb-3 text-3xl">{icon}</div>}
      <h3 className="mb-2 font-semibold text-lg text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}
