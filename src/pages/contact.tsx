import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contacting Aditya Shukla</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <p className="text-neutral-700">Inquiries: adityashukzy@gmail.com</p>
      <p className="text-neutral-700">Academic Inquiries: adshukla@cs.toronto.edu</p>
      <p className="text-neutral-700">LinkedIn: https://www.linkedin.com/in/adityashukzy/</p>
      <p className="text-neutral-700">GitHub: https://github.com/adityashukzy</p>
      <p className="text-neutral-700">LinkTree: https://linktr.ee/adityashukzy</p>
    </Layout>
  );
}

