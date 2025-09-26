import Link from 'next/link';
import { PropsWithChildren } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-full flex flex-col">
      <header>
        <div className="mx-auto w-full max-w-4xl px-4 py-4 flex items-center justify-between">
          <nav className="flex gap-4 text-sm">
            <Link href="/">about</Link>
            <Link href="/blog">blog</Link>
            <Link href="/publications">publications</Link>
            <Link href="/projects">projects</Link>
            <Link href="/contact">contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-4 py-10 grow">{children}</main>
      <footer className="border-t">
        <div className="mx-auto w-full max-w-4xl px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Aditya Shukla. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

