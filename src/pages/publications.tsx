import Head from 'next/head';
import Layout from '@/components/Layout';

export default function PublicationsPage() {
  return (
    <Layout>
      <Head>
        <title>Publications | Aditya Shukla</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-6">publications</h1>
      <div className="space-y-6">
        <div>
          <h2 className="font-medium">RecHap: An Interactive Recommender System For Navigating a Large Number of Mid-Air Haptic Designs</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Karthikan Theivendran, Andy Wu, William Frier, Oliver Schneider</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">IEEE Transactions on Haptics, Jun 2023</p>
          <a href="#" className="text-sm">HTML</a>
        </div>
        <div>
          <h2 className="font-medium">Sample Paper Title Two</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Author One, Author Two</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Conference XYZ, 2024</p>
          <a href="#" className="text-sm">PDF</a>
        </div>
      </div>
    </Layout>
  );
}

