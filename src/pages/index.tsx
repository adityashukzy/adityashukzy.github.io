import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Aditya Shukla</title>
        <meta name="description" content="ML Engineer & AI Researcher specializing in LLMs, Explainable AI, and Agentic Systems" />
      </Head>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-12">
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="font-extrabold">Aditya</span> Shukla
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Machine Learning Engineer
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Passionate about using ML and data to create unique products, tools, and services.
            I value the process of building anything with heart, integrity, and operational & aesthetic beauty.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="mailto:adshukla@cs.toronto.edu" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              adshukla@cs.toronto.edu
            </a>
            <a href="https://linkedin.com/in/adityashukzy" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:col-span-2 md:justify-self-end">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">education</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-lg">University of Toronto</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Master of Science in Applied Computing, Artificial Intelligence</p>
              </div>
              <span className="text-sm text-neutral-500">2025 - 2026</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Coursework: Deep Learning - Theory & Data Science, Neural Networks & Deep Learning
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-lg">SRM Institute of Science & Technology</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Bachelor of Technology, Computer Science & Engineering</p>
              </div>
              <span className="text-sm text-neutral-500">2019 - 2023</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">CGPA: 9.79/10</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">experience</h2>
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-lg">Machine Learning Engineer, Pricing & FX</h3>
              <p className="text-neutral-600 dark:text-neutral-400">PayPal • Bengaluru, India</p>
            </div>
            <span className="text-sm text-neutral-500">July 2023 - August 2025</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">LLM-based Reasoning for Contract Intelligence</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Architected a legal reasoning engine with traceable chain-of-thought and clause-level attribution to autonomously analyze PayPal's right-to-reprice merchants across 2,000+ complex pricing agreements</li>
                <li>Designed a modular agent architecture with workflow routing and prompt chaining, benchmarked against 100+ expert-annotated agreements</li>
                <li>Extended pipeline to detect pricing discrepancies, achieving 84% precision and 78% recall, helping claw back $1.5M by flagging undercharging across 50+ legacy contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Multi-Agent System for Contract Risk Assessment</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Developed a multi-agent framework using crewAI to analyze business risks across poorly-maintained legacy contracts</li>
                <li>Employed hierarchical task delegation across 5 agents (one orchestrator & four domain experts) with enterprise information retrieval and inter-agent question-answering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">FX Trade Volume Forecasting</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Developed a model to forecast PayPal's daily FX trade volumes across 19 currencies to minimize exposure and hedge treasury risk</li>
                <li>Leveraged an ensemble of stochastic (EMA) and deep learning methods (Prophet & Temporal Fusion Transformer) achieving ~30% MAPE on stable currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Patents Section */}
      <section className="mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">publications & patents</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Agentic Data Extraction using LLMs</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Filed as part of Pricing ML group at PayPal</p>
            <p className="text-sm text-neutral-500">Patent Pending from US Patent Office</p>
          </div>
          <div>
            <h3 className="font-medium">An Integrated Document Manipulation Tool Leveraging LLMs, Transformers, and Attention Mechanism</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>A. Shukla</strong>, P. Ravi, B. Arthi
            </p>
            <p className="text-sm text-neutral-500">Best Paper Award at ICIOT'23 • Published in AIP Conference Proceedings 2024</p>
            <a href="https://doi.org/10.1063/5.0217040" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              View Publication →
            </a>
          </div>
          <div>
            <h3 className="font-medium">Real-Time GPU-Accelerated Driver Assistance System</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">P. Ravi, <strong>A. Shukla</strong>, B. Muruganantham</p>
            <p className="text-sm text-neutral-500">RCAAI'22 • Published in Springer 2023</p>
            <a href="https://link.springer.com/chapter/10.1007/978-981-99-4634-1_64" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              View Publication →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">AI/ML</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Deep Learning, LLMs, Explainable Reasoning, Agentic AI
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Libraries</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              PyTorch, transformers, PyTorch Lightning, TensorFlow, Darts, OpenCV, boto3, Flask
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Analytics & Data</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              SQL, GCP BigQuery, statsmodels, R, MongoDB, AWS S3
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Cloud/MLOps</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              AWS CCP, AWS Sagemaker, MLflow, Weights & Biases, Docker, RedHat Linux
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

