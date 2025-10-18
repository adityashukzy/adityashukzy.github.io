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
          <div className="flex gap-4 items-center">
            <a href="mailto:adshukla@cs.toronto.edu" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100" title="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/adityashukzy" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100" title="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=3r1KtJoAAAAJ" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100" title="Google Scholar">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
              </svg>
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

      {/* Research Interests Section */}
      <section className="mb-12 pb-12 border-b border-neutral-300 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-2">Research Interests</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#D2691E] mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="text-xl font-semibold text-[#8B4513] dark:text-[#D2691E] mb-3">Large Language Models</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Reliability and explainability for high-stakes applications
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="text-xl font-semibold text-[#8B4513] dark:text-[#D2691E] mb-3">Legal AI</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Machine learning applications to legal information retrieval and analysis
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="text-xl font-semibold text-[#8B4513] dark:text-[#D2691E] mb-3">AI Ethics & Governance</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Fairness, transparency, and accountability in AI systems
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="text-xl font-semibold text-[#8B4513] dark:text-[#D2691E] mb-3">Reasoning Systems</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Methods for improving logical consistency in LLMs
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12 pb-12 border-b border-neutral-300 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-2">Education</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#D2691E] mb-8"></div>
        <div className="space-y-6">
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">University of Toronto</h3>
                <p className="text-neutral-700 dark:text-neutral-300">Master of Science in Applied Computing, Artificial Intelligence</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">2025 - 2026</span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Coursework: Deep Learning - Theory & Data Science, Neural Networks & Deep Learning
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">SRM Institute of Science & Technology</h3>
                <p className="text-neutral-700 dark:text-neutral-300">Bachelor of Technology, Computer Science & Engineering</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">2019 - 2023</span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">CGPA: 9.79/10</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-12 pb-12 border-b border-neutral-300 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-2">Professional Experience</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#D2691E] mb-8"></div>
        <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">Machine Learning Engineer, Pricing & FX</h3>
              <p className="text-[#8B4513] dark:text-[#D2691E] italic">PayPal • Bengaluru, India</p>
            </div>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">July 2023 - August 2025</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">LLM-based Reasoning for Contract Intelligence</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Architected a legal reasoning engine with traceable chain-of-thought and clause-level attribution to autonomously analyze PayPal's right-to-reprice merchants across 2,000+ complex pricing agreements</li>
                <li>Designed a modular agent architecture with workflow routing and prompt chaining, benchmarked against 100+ expert-annotated agreements</li>
                <li>Extended pipeline to detect pricing discrepancies, achieving 84% precision and 78% recall, helping claw back $1.5M by flagging undercharging across 50+ legacy contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Multi-Agent System for Contract Risk Assessment</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Developed a multi-agent framework using crewAI to analyze business risks across poorly-maintained legacy contracts</li>
                <li>Employed hierarchical task delegation across 5 agents (one orchestrator & four domain experts) with enterprise information retrieval and inter-agent question-answering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">FX Trade Volume Forecasting</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Developed a model to forecast PayPal's daily FX trade volumes across 19 currencies to minimize exposure and hedge treasury risk</li>
                <li>Leveraged an ensemble of stochastic (EMA) and deep learning methods (Prophet & Temporal Fusion Transformer) achieving ~30% MAPE on stable currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Patents Section */}
      <section className="mb-12 pb-12 border-b border-neutral-300 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-2">Publications & Patents</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#D2691E] mb-8"></div>
        <div className="space-y-4">
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Agentic Data Extraction using LLMs</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Filed as part of Pricing ML group at PayPal</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">Patent Pending from US Patent Office</p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">An Integrated Document Manipulation Tool Leveraging LLMs, Transformers, and Attention Mechanism</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              <strong>A. Shukla</strong>, P. Ravi, B. Arthi
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Best Paper Award at ICIOT'23 • Published in AIP Conference Proceedings 2024</p>
            <a href="https://doi.org/10.1063/5.0217040" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#D2691E] hover:underline">
              View Publication →
            </a>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Real-Time GPU-Accelerated Driver Assistance System</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">P. Ravi, <strong>A. Shukla</strong>, B. Muruganantham</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">RCAAI'22 • Published in Springer 2023</p>
            <a href="https://link.springer.com/chapter/10.1007/978-981-99-4634-1_64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#D2691E] hover:underline">
              View Publication →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#D2691E] mb-2">Skills</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#D2691E] mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">AI/ML</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Deep Learning, LLMs, Explainable Reasoning, Agentic AI
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Libraries</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              PyTorch, transformers, PyTorch Lightning, TensorFlow, Darts, OpenCV, boto3, Flask
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Analytics & Data</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              SQL, GCP BigQuery, statsmodels, R, MongoDB, AWS S3
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#2a2a2a] p-6 border-l-4 border-[#8B4513] dark:border-[#D2691E]">
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Cloud/MLOps</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              AWS CCP, AWS Sagemaker, MLflow, Weights & Biases, Docker, RedHat Linux
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

