import { motion } from 'framer-motion';

const Icons = {
  Brain: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 3a3 3 0 0 0-3 3c0 1 .5 1.9 1.3 2.5A3 3 0 0 0 6 11c0 1.2.7 2.2 1.7 2.7A3 3 0 0 0 9 16v5h6v-5a3 3 0 0 0 1.3-2.3A3 3 0 0 0 18 11a3 3 0 0 0-1.3-2.5A3 3 0 0 0 15 6a3 3 0 0 0-3-3h-3z"/>
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2c4 1.5 6 5 6 8.5a6 6 0 0 1-12 0C6 7 8 3.5 12 2z"/>
      <path d="M9 16.5L6.5 20M15 16.5L17.5 20"/>
      <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 20h18M7 20V10M12 20V6M17 20V14"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2l8 3.5V12c0 5.5-3.5 9-8 9.5C7.5 21 4 17.5 4 12V5.5L12 2z"/>
      <path d="M8.5 12.5l3 3 5-5"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9"/>
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
    </svg>
  ),
  Refresh: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4v5h5"/><path d="M20 20v-5h-5"/>
      <path d="M4.07 9A9 9 0 0 1 20 13.93M20 15A9 9 0 0 1 4 10.07"/>
    </svg>
  ),
};

const REASONS = [
  { Icon: Icons.Brain,   title: 'AI-Native Architecture',         desc: 'Every system treats AI as a first-class citizen — not an integration, but the foundation.' },
  { Icon: Icons.Rocket,  title: 'Ship in Weeks, Not Months',      desc: 'Battle-tested AI stack and boilerplates cut development time by 60%. Production code, faster.' },
  { Icon: Icons.Chart,   title: 'ROI-Obsessed Delivery',          desc: 'Every sprint tied to measurable KPIs agreed before a single line of code is written.' },
  { Icon: Icons.Shield,  title: 'Enterprise Security by Default', desc: 'SOC 2, GDPR, HIPAA, PCI-DSS compliance built into architecture from day one.' },
  { Icon: Icons.Globe,   title: 'Global Scale, Local Support',    desc: 'Infrastructure for millions of users with dedicated account managers in your timezone.' },
  { Icon: Icons.Refresh, title: 'Continuous AI Improvement',      desc: "Models don't stay static. Continuous learning loops measurably improve accuracy over time." },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

const TESTIMONIAL = {
  quote: "RagexAI transformed our customer engagement platform with an AI system that's now processing over 2 million interactions daily. The ROI was measurable within 60 days.",
  name: 'Sarah Mitchell',
  role: 'CTO, DataPulse Analytics',
  avatar: 'SM',
};

export default function WhyChooseUsSection() {
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
          <span className="eyebrow mb-5 inline-flex">Why RagexAI</span>
          <h2 className="t-h2 mt-4">
            The team that actually delivers
          </h2>
          <p className="t-body mx-auto mt-4" style={{ maxWidth: 460 }}>
            Not an agency. Not a consultancy. A product-minded engineering team that ships.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {REASONS.map((r, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="glass-card p-6"
            >
              <div className="icon-box mb-4"><r.Icon /></div>
              <h3 className="t-h3 mb-2">{r.title}</h3>
              <p className="t-small" style={{ color: 'var(--text-secondary)' }}>{r.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 max-w-2xl mx-auto text-center"
        >
          <p style={{
            fontSize: 18, lineHeight: 1.7, fontWeight: 500,
            color: 'var(--navy-mid)',
            fontStyle: 'italic',
            marginBottom: 24,
          }}>
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--blue), #1e88d9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 13, fontWeight: 700,
            }}>
              {TESTIMONIAL.avatar}
            </div>
            <div className="text-left">
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>{TESTIMONIAL.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{TESTIMONIAL.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
