import Head from 'next/head';
import Layout from '@/components/Layout';

export default function PublicationsPage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Publications</title>
      </Head>
      <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#00665E] mb-2">Publications</h1>
      <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#00665E] mb-8"></div>
      <div className="space-y-6">
        <div className="bg-[#FAF8F3] dark:bg-[#012D30] p-6 border-l-4 border-[#8B4513] dark:border-[#00665E]">
          <h2 className="font-semibold text-lg text-neutral-900 dark:text-neutral-200 mb-2">An Integrated Document Manipulation Tool Leveraging LLMs, Transformers, and Attention Mechanism</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-1"><strong>Aditya Shukla</strong>, Pooja Ravi, B. Arthi</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">ICIOT 2023 | AIP Conference Proceedings 2024</p>
          <a href="https://doi.org/10.1063/5.0217040" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#00665E] hover:underline">View Publication →</a>
        </div>
        <div className="bg-[#FAF8F3] dark:bg-[#012D30] p-6 border-l-4 border-[#8B4513] dark:border-[#00665E]">
          <h2 className="font-semibold text-lg text-neutral-900 dark:text-neutral-200 mb-2">Real-Time GPU-Accelerated Driver Assistance System</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-1">Pooja Ravi, <strong>Aditya Shukla</strong>, and B. Muruganantham</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">RCAAI 2022, Springer - Intelligent Control, Robotics, and Industrial Automation 2023</p>
          <a href="https://link.springer.com/chapter/10.1007/978-981-99-4634-1_64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#00665E] hover:underline">View Publication →</a>
        </div>
      </div>
    </Layout>
  );
}

