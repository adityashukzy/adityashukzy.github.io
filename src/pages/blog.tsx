import Head from 'next/head';
import Layout from '@/components/Layout';

export default function BlogPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Blog</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <p className="text-neutral-700">No posts yet. Add your writing here.</p>
    </Layout>
  );
}

