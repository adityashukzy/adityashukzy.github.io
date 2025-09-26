import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname === href || router.pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-full flex flex-col">
      <header>
        <div className="mx-auto w-full max-w-4xl px-4 py-5 flex items-center justify-between">
          <nav className="flex gap-6 text-base md:text-lg font-semibold">
            <Link href="/" className={isActive('/') ? 'underline decoration-2 underline-offset-4' : ''}>about</Link>
            <Link href="/blog" className={isActive('/blog') ? 'underline decoration-2 underline-offset-4' : ''}>blog</Link>
            <Link href="/publications" className={isActive('/publications') ? 'underline decoration-2 underline-offset-4' : ''}>publications</Link>
            <Link href="/projects" className={isActive('/projects') ? 'underline decoration-2 underline-offset-4' : ''}>projects</Link>
            <Link href="/contact" className={isActive('/contact') ? 'underline decoration-2 underline-offset-4' : ''}>contact</Link>
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

