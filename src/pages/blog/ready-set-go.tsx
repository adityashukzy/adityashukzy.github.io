import Head from 'next/head';
import Layout from '@/components/Layout';

export default function PostReadySetGo() {
  return (
    <Layout>
      <Head>
        <title>Ready Set Go | Blog</title>
      </Head>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h1>Ready Set Go</h1>
        <p>
          Thoughts on momentum, pacing, and what it means to start projects effectively.
          This is placeholder content designed to mirror the cadence of short essays.
        </p>
        <h2>Momentum</h2>
        <p>
          Small consistent steps beat sporadic bursts. Define a tiny daily goal and ship it.
        </p>
        <h2>Scope</h2>
        <p>
          Make the problem smaller. Ship a slice that works end-to-end before expanding.
        </p>
        <h2>Reflection</h2>
        <p>
          Recalibrate often: what matters, what can be cut, and what is fun to build.
        </p>
      </article>
    </Layout>
  );
}

