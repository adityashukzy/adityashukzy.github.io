import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Aditya Shukla</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <p className="text-neutral-700">Email: your.name@example.com</p>
    </Layout>
  );
}

