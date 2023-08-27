import Link from 'next/link';

import { Icons } from '@/components/ui/icons';

export function Footer() {
  return (
    <footer className="border-t mt-4 fixed w-screen bottom-0 backdrop-blur-sm opacity-90 bg-slate-950">
      <nav className="flex h-8 items-center justify-center px-4 mx-4 md:mx-auto text-xs uppercase gap-2">
        <Link href="/privacy" className="hidden md:block">
          Privacy
        </Link>

        <Link href="/terms" className="hidden md:block">
          Terms & Condition
        </Link>

        <Link href="/about" className="hidden md:block">
          About
        </Link>

        <Link href="https://github.com/HemmeligOrg/lite.hemmelig.app">
          <div className="flex w-full items-center space-x-2">
            <Icons.gitHub aria-label="Github" width="12" height="12" />
            <p className="grid-span-2">Github</p>
          </div>
        </Link>

        <Link href="https://x.com/dothash_">
          <div className="flex w-full items-center space-x-2">
            <Icons.twitter aria-label="twitter x" width="12" height="12" />
            <p className="grid-span-2">Twitter</p>
          </div>
        </Link>

        <Link href="https://hemmelig.app">
          <div className="flex w-full items-center space-x-2">
            <Icons.heartshake aria-label="a heart" width="12" height="12" />
            <p className="grid-span-2">Hemmelig</p>
          </div>
        </Link>
      </nav>
    </footer>
  );
}
