import Link from 'next/link';

import { Icons } from '@/components/ui/icons';

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 max-w-4xl mx-4 justify-center md:justify-start md:mx-auto">
        <Link href="/" type="button">
          <Icons.logo
            className="mx-auto"
            width={42}
            height={42}
            alt="The Hemmelig Logo"
          />
        </Link>
      </div>
    </div>
  );
}
