import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home | Aditya Shukla</title>
        <meta name="description" content="Personal site of Aditya Shukla" />
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="font-extrabold">Aditya</span> Shukla
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m a software engineer who enjoys building simple, thoughtful experiences across the
            stack. I focus on developer ergonomics, performance, and design systems. Previously I’ve
            worked on small products, prototypes, and open-source experiments. I like clean UIs,
            friendly APIs, and making things fast.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This site is a minimal, multi-page setup deployed via GitHub Pages. I’ll gradually add
            posts, notes, and project write-ups here. For now, it’s a tidy home with the basics.
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

