import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EcommerceAnimation, AnalyticsAnimation, WorkflowAnimation, MobileAppAnimation } from '../animations/AnimatedPreviews';

const PROJECTS = [
  {
    title: 'NeuraShop AI',
    category: 'E-commerce · AI Personalisation',
    desc: 'Full-stack Shopify alternative with real-time AI recommendations and dynamic pricing engine.',
    tags: ['Next.js', 'GPT-4', 'Redis', 'Stripe'],
    metrics: ['+42% conversions', '3× revenue'],
    Preview: EcommerceAnimation,
    windowTitle: 'neurashop — dashboard',
  },
  {
    title: 'InsightIQ Platform',
    category: 'BI · Predictive Analytics',
    desc: 'Enterprise BI with natural language queries, anomaly detection, and predictive forecasting.',
    tags: ['React', 'Python', 'LangChain'],
    metrics: ['10× faster reports', '$2M saved/yr'],
    Preview: AnalyticsAnimation,
    windowTitle: 'insightiq — analytics',
  },
  {
    title: 'FlowAgent',
    category: 'Automation · Agentic AI',
    desc: 'Multi-agent platform processing 2,800 daily workflows with 99.6% accuracy.',
    tags: ['LangGraph', 'FastAPI', 'AWS'],
    metrics: ['48h saved/week', '99.6% accuracy'],
    Preview: WorkflowAnimation,
    windowTitle: 'flowagent — workflows',
  },
  {
    title: 'MedAssist AI',
    category: 'HealthTech · Mobile',
    desc: 'HIPAA-compliant AI health assistant with symptom analysis and appointment booking.',
    tags: ['Flutter', 'Claude 3', 'HIPAA'],
    metrics: ['200k users', '4.9★ App Store'],
    Preview: MobileAppAnimation,
    windowTitle: 'medassist — mobile preview',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: 'easeOut' as const },
  }),
};

export default function PortfolioPreviewSection() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="eyebrow mb-5 inline-flex">Featured work</span>
            <h2 className="t-h2 mt-4">
              Projects that ship & scale
            </h2>
          </div>
          <Link to="/portfolio" className="btn-outline self-start md:self-auto whitespace-nowrap">
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="glass-card overflow-hidden"
            >
              {/* Preview */}
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '8px 12px',
                  background: 'rgba(235,242,252,0.95)',
                  borderBottom: '1px solid rgba(200,215,235,0.7)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                  <span style={{ marginLeft: 8, fontSize: 9, fontWeight: 600, color: '#7a92b0', fontFamily: 'JetBrains Mono, monospace' }}>
                    {p.windowTitle}
                  </span>
                  <span style={{
                    marginLeft: 'auto', fontSize: 8, fontWeight: 700, color: '#059669',
                    background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.18)',
                    padding: '1px 6px', borderRadius: 999,
                  }}>● LIVE</span>
                </div>
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <p.Preview />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, letterSpacing: '0.03em' }}>
                  {p.category}
                </div>
                <h3 className="t-h3 mb-2">{p.title}</h3>
                <p className="t-small mb-4" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t, j) => (
                    <span key={j} style={{
                      fontSize: 10, fontWeight: 600,
                      padding: '2px 8px', borderRadius: 999,
                      background: 'rgba(170,190,212,0.15)',
                      border: '1px solid rgba(170,190,212,0.28)',
                      color: 'var(--text-muted)',
                    }}>{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.metrics.map((m, j) => (
                    <span key={j} style={{
                      fontSize: 11, fontWeight: 700,
                      padding: '3px 10px', borderRadius: 999,
                      background: 'rgba(26,86,196,0.07)',
                      border: '1px solid rgba(26,86,196,0.14)',
                      color: 'var(--blue)',
                    }}>{m}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
