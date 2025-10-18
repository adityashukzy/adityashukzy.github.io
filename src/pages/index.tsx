import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

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
          <p className="text-xl font-bold text-[#8B4513] dark:text-[#DAA520]">
            Machine Learning Scientist
          </p>
          <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">
            Exploring the frontiers of AI. Designing systems that think clearly, explain themselves, and augment the human spirit... so that they can do our laundry and dishes, and we can do the art and writing.
          </p>
        </div>
        <div className="md:col-span-2 md:justify-self-end">
          <div className="space-y-3">
            <div className="flex gap-4 items-center justify-center">
              <a href="mailto:adshukla@cs.toronto.edu" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-white hover:text-[#8B4513] dark:hover:text-[#DAA520]" title="Email">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/adityashukzy" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-white hover:text-[#8B4513] dark:hover:text-[#DAA520]" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=3r1KtJoAAAAJ" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-white hover:text-[#8B4513] dark:hover:text-[#DAA520]" title="Google Scholar">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
                </svg>
              </a>
              <a href="https://github.com/adityashukzy" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-white hover:text-[#8B4513] dark:hover:text-[#DAA520]" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <Image
                src="/images/fuji_san.jpg"
                alt="Mount Fuji"
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">¡Mount Fuji!</p>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="mb-10 pb-10">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-2">Research Interests</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#DAA520] mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="text-xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-3">LLM Reasoning</h3>
            <p className="text-neutral-700 dark:text-neutral-200">
              Inducing robust logical thinking at inference-time
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="text-xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-3">Human-Centered AI</h3>
            <p className="text-neutral-700 dark:text-neutral-200">
              Building solutions that can augment human creativity
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="text-xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-3">Mechanistic Interpretability</h3>
            <p className="text-neutral-700 dark:text-neutral-200">
              Putting models under the mathematical microscope
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="text-xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-3">Explainable AI</h3>
            <p className="text-neutral-700 dark:text-neutral-200">
              Teaching models to answer for themselves
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10 pb-10">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-2">Education</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#DAA520] mb-8"></div>
        <div className="space-y-6">
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-200">University of Toronto</h3>
                <p className="text-neutral-700 dark:text-neutral-200">Master of Science in Applied Computing, Artificial Intelligence</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">2025 - 2026</span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              Coursework: Deep Learning - Theory & Data Science, Neural Networks & Deep Learning
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-200">SRM Institute of Science & Technology</h3>
                <p className="text-neutral-700 dark:text-neutral-200">Bachelor of Technology, Computer Science & Engineering</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">2019 - 2023</span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">CGPA: 9.79/10</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-10 pb-10">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-2">Professional Experience</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#DAA520] mb-8"></div>
        <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-200">Machine Learning Engineer, Pricing & FX</h3>
              <p className="text-[#8B4513] dark:text-[#DAA520] italic">PayPal • Bengaluru, India</p>
            </div>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">July 2023 - August 2025</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">LLM-based Reasoning for Contract Intelligence</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                <li>Architected a legal reasoning engine with traceable chain-of-thought and clause-level attribution to autonomously analyze PayPal's right-to-reprice merchants across 2,000+ complex pricing agreements</li>
                <li>Designed a modular agent architecture with workflow routing and prompt chaining, benchmarked against 100+ expert-annotated agreements</li>
                <li>Extended pipeline to detect pricing discrepancies, achieving 84% precision and 78% recall, helping claw back $1.5M by flagging undercharging across 50+ legacy contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">Multi-Agent System for Contract Risk Assessment</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                <li>Developed a multi-agent framework using crewAI to analyze business risks across poorly-maintained legacy contracts</li>
                <li>Employed hierarchical task delegation across 5 agents (one orchestrator & four domain experts) with enterprise information retrieval and inter-agent question-answering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">FX Trade Volume Forecasting</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                <li>Developed a model to forecast PayPal's daily FX trade volumes across 19 currencies to minimize exposure and hedge treasury risk</li>
                <li>Leveraged an ensemble of stochastic (EMA) and deep learning methods (Prophet & Temporal Fusion Transformer) achieving ~30% MAPE on stable currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Patents Section */}
      <section className="mb-10 pb-10">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-2">Publications & Patents</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#DAA520] mb-8"></div>
        <div className="space-y-4">
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold text-neutral-900 dark:text-neutral-200">Agentic Data Extraction using LLMs</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">Filed as part of Pricing ML group at PayPal</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">Patent Pending from US Patent Office</p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold text-neutral-900 dark:text-neutral-200">An Integrated Document Manipulation Tool Leveraging LLMs, Transformers, and Attention Mechanism</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              <strong>A. Shukla</strong>, P. Ravi, B. Arthi
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Best Paper Award at ICIOT'23 • Published in AIP Conference Proceedings 2024</p>
            <a href="https://doi.org/10.1063/5.0217040" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#DAA520] hover:underline">
              View Publication →
            </a>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold text-neutral-900 dark:text-neutral-200">Real-Time GPU-Accelerated Driver Assistance System</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">P. Ravi, <strong>A. Shukla</strong>, B. Muruganantham</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">RCAAI'22 • Published in Springer 2023</p>
            <a href="https://link.springer.com/chapter/10.1007/978-981-99-4634-1_64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B4513] dark:text-[#DAA520] hover:underline">
              View Publication →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-[#8B4513] dark:text-[#DAA520] mb-2">Skills</h2>
        <div className="w-full h-0.5 bg-[#8B4513] dark:bg-[#DAA520] mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">AI/ML</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              Deep Learning, LLMs, Explainable Reasoning, Agentic AI
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">Libraries</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              PyTorch, transformers, PyTorch Lightning, TensorFlow, Darts, OpenCV, boto3, Flask
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">Analytics & Data</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              SQL, GCP BigQuery, statsmodels, R, MongoDB, AWS S3
            </p>
          </div>
          <div className="bg-[#FAF8F3] dark:bg-[#0C513E] p-6 border-l-4 border-[#8B4513] dark:border-[#DAA520]">
            <h3 className="font-bold mb-2 text-neutral-900 dark:text-neutral-200">Cloud/MLOps</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              AWS CCP, AWS Sagemaker, MLflow, Weights & Biases, Docker, RedHat Linux
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

