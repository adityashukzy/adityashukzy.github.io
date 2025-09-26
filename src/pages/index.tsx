import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla</title>
        <meta name="description" content="Here's looking at you, kid." />
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="font-extrabold">Aditya</span> Shukla
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          § Passionate about using ML and Data to create unique products, tools, and services.
          § I value the process of building anything with heart, integrity, and operational & aesthetic beauty.
          § Open-minded, conscientious, and creative.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This website is a work in progress!
          </p>
        </div>
        <div className="md:col-span-2 md:justify-self-end">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              width={320}
              height={320}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-xs text-neutral-500">Place your photo at public/images/profile.jpg</p>
        </div>
      </section>
    </Layout>
  );
}

