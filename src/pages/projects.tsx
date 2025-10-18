import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Projects</title>
      </Head>
      <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#00665E] mb-2">Projects</h1>
      <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#00665E] mb-8"></div>
      <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-8 border-l-4 border-[#8B4513] dark:border-[#00665E] text-center">
        <p className="text-lg text-neutral-700 dark:text-neutral-200">This page is a work in progress. Check back soon!</p>
      </div>
    </Layout>
  );
}

