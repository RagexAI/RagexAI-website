import { motion } from 'framer-motion';
import { CodeEditorAnimation, ChatBotAnimation, PipelineAnimation } from '../animations/AnimatedPreviews';

const PILLARS = [
  {
    title: 'Core AI Models',
    subtitle: 'Trained to perfection',
    desc: 'Custom language models, computer vision systems, and predictive engines — fine-tuned for your domain and deployed at scale.',
    tag: 'Model Engineering',
    Preview: CodeEditorAnimation,
    windowTitle: 'model-training.py',
  },
  {
    title: 'Agentic AI',
    subtitle: 'Think. Plan. Execute.',
    desc: 'Autonomous agents that reason across multi-step workflows, integrate with your tools, and operate 24/7 with minimal human oversight.',
    tag: 'Autonomous Systems',
    Preview: ChatBotAnimation,
    windowTitle: 'agent-runtime — live',
  },
  {
    title: 'AI Data Pipelines',
    subtitle: 'Data → Insight → Action',
    desc: 'Real-time ingestion, vector databases, feature stores, and automated ML workflows — enterprise-scale data infrastructure.',
    tag: 'Data Engineering',
    Preview: PipelineAnimation,
    windowTitle: 'pipeline-monitor',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function AIFirstSection() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-5 inline-flex">AI-First Philosophy</span>
          <h2 className="t-h2 mt-4">
            Not just AI features —<br />
            AI as the foundation
          </h2>
          <p className="t-body mx-auto mt-4" style={{ maxWidth: 500 }}>
            Every solution we build has intelligence woven into its core architecture — not bolted on as an afterthought.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="glass-card overflow-hidden"
            >
              {/* Animation preview */}
              <div style={{ padding: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
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

              {/* Text */}
              <div className="p-6">
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '2px 9px', borderRadius: 999,
                  background: 'rgba(26,86,196,0.07)',
                  border: '1px solid rgba(26,86,196,0.14)',
                  color: 'var(--blue)',
                  display: 'inline-block',
                  marginBottom: 12,
                  letterSpacing: '0.04em',
                }}>{p.tag}</span>
                <h3 className="t-h3 mb-1">{p.title}</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', marginBottom: 10 }}>{p.subtitle}</p>
                <p className="t-small" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
