import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Projects</title>
      </Head>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">projects</h1>
      <ul className="list-disc pl-6 space-y-2 text-neutral-700">
        <li>Project Alpha — A short description.</li>
        <li>Project Beta — Another short description.</li>
        <li>Project Gamma — Yet another short description.</li>
      </ul>
    </Layout>
  );
}

