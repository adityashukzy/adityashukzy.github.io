import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contacting Aditya Shukla</title>
      </Head>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">contact</h1>
      <p className="text-neutral-700"><strong>Inquiries</strong>: adityashukzy@gmail.com (professional), adshukla@cs.toronto.edu (academic)</p>
      <p className="text-neutral-700"><strong>LinkedIn</strong>: https://www.linkedin.com/in/adityashukzy/</p>
      <p className="text-neutral-700"><strong>GitHub</strong>: https://github.com/adityashukzy</p>
      <p className="text-neutral-700"><strong>LinkTree</strong>: https://linktr.ee/adityashukzy</p>
    </Layout>
  );
}

