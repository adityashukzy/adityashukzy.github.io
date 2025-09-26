import Head from 'next/head';
import Layout from '@/components/Layout';

export default function PublicationsPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Publications</title>
      </Head>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">publications</h1>
      <div className="space-y-6">
        <div>
          <h2 className="font-medium">An Integrated Document Manipulation Tool Leveraging LLMs, Transformers, and Attention Mechanism</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400"><strong>Aditya Shukla</strong>, Pooja Ravi, B. Arthi</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">ICIOT 2023 | AIP Conference Proceedings 2024</p>
          <a href="https://doi.org/10.1063/5.0217040" className="text-sm">PDF</a>
        </div>
        <div>
          <h2 className="font-medium">Real-Time GPU-Accelerated Driver Assistance System</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Pooja Ravi, <strong>Aditya Shukla</strong>, and B. Muruganantham</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">RCAAI 2022, Springer - Intelligent Control, Robotics, and Industrial Automation 2023</p>
          <a href="https://link.springer.com/chapter/10.1007/978-981-99-4634-1_64" className="text-sm">PDF</a>
        </div>
      </div>
    </Layout>
  );
}

