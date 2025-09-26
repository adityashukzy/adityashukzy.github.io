import Head from 'next/head';
import Layout from '@/components/Layout';

export default function PostAlexNet() {
  return (
    <Layout>
      <Head>
        <title>AlexNet | Blog</title>
      </Head>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h1>AlexNet</h1>
        <p>
          A quick scratchpad on training AlexNet and some notes on CNN architectural choices.
          This is placeholder content inspired by a blog layout similar to the reference site.
        </p>
        <h2>Architecture</h2>
        <p>
          AlexNet introduced ReLU activations and overlapping pooling, showing significant speedups
          and performance improvements at the time. Data augmentation and dropout were critical for
          generalization.
        </p>
        <h2>Training notes</h2>
        <ul>
          <li>Use aggressive data augmentation.</li>
          <li>Start with a moderate learning rate and decay on plateau.</li>
          <li>Monitor overfitting and apply dropout where needed.</li>
        </ul>
        <p>More details and experiments to come.</p>
      </article>
    </Layout>
  );
}

