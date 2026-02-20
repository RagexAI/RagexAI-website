import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloudInfraAnimation } from '../animations/AnimatedPreviews';

const Icons = {
  Web: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9"/><path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/><line x1="3" y1="12" x2="21" y2="12"/>
    </svg>
  ),
  Enterprise: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M8 6V4.5a1.5 1.5 0 0 1 3 0V6M13 6V4.5a1.5 1.5 0 0 1 3 0V6"/><line x1="2" y1="11" x2="22" y2="11"/>
    </svg>
  ),
  CRM: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/>
      <rect x="3" y="13" width="8" height="8" rx="1.5"/>
      <path d="M17 13v8M13 17h8"/>
    </svg>
  ),
  Marketplace: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 3h18l-2 7H5L3 3z"/><path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>
    </svg>
  ),
  Migration: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 17a5 5 0 0 1 0-10 6.5 6.5 0 0 1 12.5 2A4 4 0 0 1 18 17H6z"/>
      <path d="M10 12l2 2 2-2M12 9v5"/>
    </svg>
  ),
};

const SOLUTIONS = [
  { Icon: Icons.Web,         title: 'Web Applications',      desc: 'Blazing-fast, SEO-optimised web apps with AI-powered search and personalisation.', href: '/solutions/web-applications' },
  { Icon: Icons.Enterprise,  title: 'Enterprise Platforms',  desc: 'Scalable B2B platforms with SSO, RBAC, audit logs, and AI copilots baked in.', href: '/solutions/enterprise-applications' },
  { Icon: Icons.CRM,         title: 'CRM & ERP',             desc: 'Custom CRM and ERP with AI forecasting, lead scoring, and workflow automation.', href: '/solutions/crm-erp-solutions' },
  { Icon: Icons.Marketplace, title: 'Marketplace Platforms', desc: 'Two-sided marketplaces with AI matching, dynamic pricing, and fraud detection.', href: '/solutions/marketplace-platforms' },
  { Icon: Icons.Migration,   title: 'Cloud Migration',       desc: 'Lift-and-shift or re-architect — full cloud migration with zero-downtime.', href: '/solutions/cloud-migration' },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

export default function SolutionsOverviewSection() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — text + solution list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <span className="eyebrow mb-5 inline-flex">Solutions</span>
              <h2 className="t-h2 mt-4 mb-4">
                Built for every use-case
              </h2>
              <p className="t-body mb-10" style={{ maxWidth: 420 }}>
                Five core product types — each pre-loaded with AI capabilities and enterprise patterns.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={s.href}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardVariants}
                >
                  <Link to={s.href}
                    className="glass-card flex items-start gap-4 p-5 group"
                    style={{ borderRadius: 16 }}>
                    <div className="icon-box shrink-0" style={{ width: 40, height: 40, borderRadius: 10 }}>
                      <s.Icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 2 }}>{s.title}</div>
                      <div className="t-small" style={{ fontSize: 13 }}>{s.desc}</div>
                    </div>
                    <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 mt-0.5" style={{ color: 'var(--text-muted)' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — live preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' as const }}
          >
            <div className="glass-card overflow-hidden">
              <div style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '9px 12px',
                background: 'rgba(235,242,252,0.95)',
                borderBottom: '1px solid rgba(200,215,235,0.7)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                <span style={{ marginLeft: 8, fontSize: 9, fontWeight: 600, color: '#7a92b0', fontFamily: 'JetBrains Mono, monospace' }}>
                  cloud-infra — live
                </span>
                <span style={{
                  marginLeft: 'auto', fontSize: 8, fontWeight: 700, color: '#059669',
                  background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.18)',
                  padding: '1px 6px', borderRadius: 999,
                }}>● LIVE</span>
              </div>
              <CloudInfraAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
