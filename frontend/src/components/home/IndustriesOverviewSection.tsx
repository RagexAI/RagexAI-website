import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Icons = {
  Retail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 4h2.5l2.9 10h9.2l2.1-7H7.5"/><circle cx="10" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>
    </svg>
  ),
  Health: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M19 9h-4V5H9v4H5v6h4v4h6v-4h4V9z"/>
    </svg>
  ),
  Finance: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2v6M12 18v4M4 12H2M22 12h-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>
  ),
  EdTech: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 7l10-5 10 5-10 5L2 7z"/><path d="M7 9.5v5c2 1.5 8 1.5 10 0V9.5"/>
    </svg>
  ),
  SaaS: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 11h8M8 14.5h5"/>
    </svg>
  ),
  RealEstate: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 21h18M3 10l9-7 9 7v11"/><path d="M9 21V14h6v7"/>
    </svg>
  ),
};

const INDUSTRIES = [
  { Icon: Icons.Retail,     title: 'E-commerce & Retail', desc: 'AI personalisation, dynamic pricing, inventory forecasting, and next-gen shopping experiences.', href: '/industries/ecommerce',   stats: ['+40% uplift', '$2.8T market'] },
  { Icon: Icons.Health,     title: 'Healthcare',          desc: 'HIPAA-compliant AI diagnostics, patient engagement platforms, and clinical workflow automation.', href: '/industries/healthcare',  stats: ['HIPAA ready', '3× efficiency'] },
  { Icon: Icons.Finance,    title: 'FinTech & Banking',   desc: 'Fraud detection, credit scoring, robo-advisors, and PCI-compliant payment intelligence.', href: '/industries/fintech',      stats: ['PCI DSS', '98.5% accuracy'] },
  { Icon: Icons.EdTech,     title: 'EdTech',              desc: 'Adaptive learning systems, AI tutors, assessment automation, and LMS integration.', href: '/industries/edtech',       stats: ['Adaptive AI', '2× retention'] },
  { Icon: Icons.SaaS,       title: 'SaaS Companies',      desc: 'AI-powered onboarding, churn prediction, usage analytics, and in-app AI copilots.', href: '/industries/saas',          stats: ['Reduce churn', '5× growth'] },
  { Icon: Icons.RealEstate, title: 'Real Estate',         desc: 'Automated property valuation, AI lead scoring, virtual tours, and document intelligence.', href: '/industries/real-estate', stats: ['AI valuation', '3× leads'] },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

export default function IndustriesOverviewSection() {
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
          <span className="eyebrow mb-5 inline-flex">Industries</span>
          <h2 className="t-h2 mt-4">
            Built for every sector
          </h2>
          <p className="t-body mx-auto mt-4" style={{ maxWidth: 460 }}>
            Deep domain expertise across six high-growth industries — not generic solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
            >
              <Link to={ind.href} className="block h-full group">
                <article className="glass-card h-full p-6">
                  <div className="icon-box mb-4"><ind.Icon /></div>
                  <h3 className="t-h3 mb-2">{ind.title}</h3>
                  <p className="t-small mb-4" style={{ color: 'var(--text-secondary)' }}>{ind.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {ind.stats.map((s, j) => (
                      <span key={j} style={{
                        fontSize: 10, fontWeight: 700,
                        padding: '2px 9px', borderRadius: 999,
                        background: 'rgba(26,86,196,0.07)',
                        border: '1px solid rgba(26,86,196,0.14)',
                        color: 'var(--blue)',
                      }}>{s}</span>
                    ))}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
