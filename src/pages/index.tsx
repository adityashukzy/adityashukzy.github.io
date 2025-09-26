import Head from 'next/head';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home | Aditya Shukla</title>
        <meta name="description" content="Personal site of Aditya Shukla" />
      </Head>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Hi, I’m Aditya</h1>
        <p className="text-neutral-600">
          This is a minimal multi-page site inspired by aandyw.github.io. Replace this text with your
          own bio, interests, and current work.
        </p>
      </section>
    </Layout>
  );
}

