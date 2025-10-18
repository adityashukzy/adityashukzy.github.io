import Head from 'next/head';
import Layout from '@/components/Layout';

export default function BlogPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Blog</title>
      </Head>
      <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-8">Blog</h1>
      <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-8 border-l-4 border-[#8B4513] dark:border-[#D2691E] text-center">
        <p className="text-lg text-neutral-700 dark:text-neutral-300">This page is a work in progress. Check back soon!</p>
      </div>
    </Layout>
  );
}
