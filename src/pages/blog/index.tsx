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
      <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#00665E] mb-2">Blog</h1>
      <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#00665E] mb-8"></div>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="bg-[#FAF8F3] dark:bg-[#012D30] p-6 border-l-4 border-[#8B4513] dark:border-[#00665E]">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200 mb-2">
              <Link href={`/blog/${p.slug}`} className="hover:text-[#8B4513] dark:hover:text-[#00665E]">{p.title}</Link>
            </h2>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{p.date}</div>
            <p className="text-neutral-700 dark:text-neutral-200 mb-3">{p.summary}</p>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{p.tags.join(' • ')}</div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

