import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const posts = [
  {
    slug: 'reflections',
    title: 'Reflections',
    date: 'September 27, 2025',
    summary: 'Some thoughts on my new life in Toronto so far.',
    tags: ['Canada', 'life', "Master's Degree"],
  },
];

export default function BlogIndex() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla's Blog</title>
      </Head>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">blog</h1>
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

