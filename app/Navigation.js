'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ items }) {
  const pathname = usePathname();

  return (
    <ul className="p-4 shadow-md flex gap-4">
      {items.map((item) => (
        <li>
          <Link
            href={item.href}
            className={`${
              (item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href)) && 'font-bold text-blue-800'
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
