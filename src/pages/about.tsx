import Head from 'next/head';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About | Aditya Shukla</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">About</h1>
      <p className="text-neutral-700">Short bio and background. Replace with your own details.</p>
    </Layout>
  );
}

