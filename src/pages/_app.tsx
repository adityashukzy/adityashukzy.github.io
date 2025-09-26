import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { EB_Garamond } from 'next/font/google';

const garamond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${garamond.className} text-[17px] md:text-[18px] leading-relaxed`}>
      <Component {...pageProps} />
    </div>
  );
}

