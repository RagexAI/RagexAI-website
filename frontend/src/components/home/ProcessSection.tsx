import { motion } from 'framer-motion';

const Icons = {
  Discovery: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="10" cy="10" r="6.5"/><line x1="15" y1="15" x2="20" y2="20"/>
    </svg>
  ),
  Architecture: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/>
      <rect x="2" y="13" width="9" height="9" rx="1.5"/>
      <path d="M17.5 13v9M13 17.5h9"/>
    </svg>
  ),
  Design: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>
      <line x1="12" y1="3" x2="12" y2="8.5"/><line x1="12" y1="15.5" x2="12" y2="21"/>
      <line x1="3" y1="12" x2="8.5" y2="12"/><line x1="15.5" y1="12" x2="21" y2="12"/>
    </svg>
  ),
  Dev: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="6 9 3 12 6 15"/><polyline points="18 9 21 12 18 15"/>
      <line x1="13" y1="6" x2="11" y2="18"/>
    </svg>
  ),
  QA: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2l8 3.5V12c0 5.5-3.5 9-8 9.5C7.5 21 4 17.5 4 12V5.5L12 2z"/>
      <path d="M8.5 12.5l3 3 5-5"/>
    </svg>
  ),
  Launch: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2c4 1.5 6 5 6 8.5a6 6 0 0 1-12 0C6 7 8 3.5 12 2z"/>
      <path d="M9 16.5L6.5 20M15 16.5L17.5 20"/>
      <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

const STEPS = [
  { num: '01', title: 'Discovery & Strategy',  desc: 'Deep-dive sessions to map your business goals, data landscape, integration points, and success metrics.', Icon: Icons.Discovery,    duration: '1–2 wks' },
  { num: '02', title: 'Architecture Design',   desc: 'Blueprint your AI stack — model selection, data pipelines, APIs, security architecture, and infra.', Icon: Icons.Architecture, duration: '1 wk'    },
  { num: '03', title: 'UI/UX & Prototyping',   desc: 'High-fidelity prototypes with AI-powered interactions — validated with real users before a line of code.', Icon: Icons.Design,       duration: '1–2 wks' },
  { num: '04', title: 'AI-First Development',  desc: 'Agile sprints with daily standups, weekly demos, and iterative model training integrated into the build.', Icon: Icons.Dev,          duration: '4–8 wks' },
  { num: '05', title: 'QA & Model Validation', desc: 'Automated testing pipelines, AI accuracy benchmarks, load testing, and security penetration tests.', Icon: Icons.QA,           duration: '1–2 wks' },
  { num: '06', title: 'Launch & Continuous AI',desc: 'Zero-downtime deployment, monitoring dashboards, A/B testing, and ongoing model improvement loops.', Icon: Icons.Launch,       duration: 'Ongoing'  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

export default function ProcessSection() {
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
          <span className="eyebrow mb-5 inline-flex">How we work</span>
          <h2 className="t-h2 mt-4">
            Our 6-step process
          </h2>
          <p className="t-body mx-auto mt-4" style={{ maxWidth: 480 }}>
            A proven process refined across 150+ AI projects — predictable, transparent, and outcome-focused.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between mb-5">
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                }}>{step.num}</span>
                <div className="flex items-center gap-2">
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: '#7a92b0',
                    background: 'rgba(170,190,212,0.18)',
                    border: '1px solid rgba(170,190,212,0.30)',
                    padding: '2px 8px', borderRadius: 999,
                  }}>{step.duration}</span>
                  <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 10 }}>
                    <step.Icon />
                  </div>
                </div>
              </div>

              <h3 className="t-h3 mb-2">{step.title}</h3>
              <p className="t-small" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
