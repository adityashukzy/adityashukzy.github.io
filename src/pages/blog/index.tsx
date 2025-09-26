import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const posts = [
  {
    slug: 'alexnet-from-scratch',
    title: 'AlexNet',
    date: 'Aug 27, 2024',
    summary: 'Training AlexNet from scratch and notes on CNN architecture choices.',
    tags: ['AI/ML', 'CNN'],
  },
  {
    slug: 'ready-set-go',
    title: 'Ready Set Go',
    date: 'Aug 1, 2024',
    summary: 'Thoughts on momentum, pacing, and how to start projects well.',
    tags: ['Reflection'],
  },
];

export default function BlogIndex() {
  return (
    <Layout>
      <Head>
        <title>Blog | Aditya Shukla</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-6">blog</h1>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="space-y-1">
            <h2 className="text-lg font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div className="text-xs text-neutral-500">{p.date}</div>
            <p className="text-neutral-700 dark:text-neutral-300">{p.summary}</p>
            <div className="text-xs text-neutral-500">{p.tags.join(' • ')}</div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

