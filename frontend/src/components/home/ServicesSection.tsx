import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Icons = {
  AI: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="3.5"/>
      <circle cx="12" cy="3" r="1.5"/><circle cx="12" cy="21" r="1.5"/>
      <circle cx="3" cy="12" r="1.5"/><circle cx="21" cy="12" r="1.5"/>
      <line x1="12" y1="6.5" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="17.5"/>
      <line x1="6.5" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="17.5" y2="12"/>
    </svg>
  ),
  Cart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 4h2.5l2.9 10h9.2l2.1-7H7.5"/><circle cx="10" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 17a5 5 0 0 1 0-10 6.5 6.5 0 0 1 12.5 2A4 4 0 0 1 18 17H6z"/>
    </svg>
  ),
  Transform: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
      <path d="M11 7h5a2 2 0 0 1 2 2v2M13 17H8a2 2 0 0 1-2-2v-2"/>
    </svg>
  ),
  Mobile: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="7" y="2" width="10" height="20" rx="2.5"/><circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none"/>
    </svg>
  ),
  SaaS: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 19v2M16 19v2M6 21h12"/><path d="M8 11h8M8 14.5h5"/>
    </svg>
  ),
};

const SERVICES = [
  {
    Icon: Icons.AI,
    title: 'AI/ML & Automation',
    desc: 'Custom models, MLOps, intelligent automation, and production-grade AI systems built by ML engineers who ship at scale.',
    href: '/services/ai-ml-automation',
    tags: ['LLMs', 'MLOps', 'Fine-tuning'],
    stat: '10× faster',
  },
  {
    Icon: Icons.Cart,
    title: 'E-commerce Development',
    desc: 'High-performance stores with AI recommendations, dynamic pricing, and personalisation that drives revenue.',
    href: '/services/ecommerce-development',
    tags: ['Shopify', 'Next.js', 'PWA'],
    stat: '+42% conversion',
  },
  {
    Icon: Icons.Cloud,
    title: 'DevOps, Cloud & Security',
    desc: 'Kubernetes clusters, CI/CD pipelines, zero-trust security, and 99.99% availability architecture.',
    href: '/services/devops-cloud-security',
    tags: ['K8s', 'AWS', 'Terraform'],
    stat: '99.99% uptime',
  },
  {
    Icon: Icons.Transform,
    title: 'Digital Transformation',
    desc: 'Legacy modernisation, process automation, and full digital overhaul — zero downtime migration.',
    href: '/services/digital-transformation',
    tags: ['Migration', 'API', 'GraphQL'],
    stat: '60% cost cut',
  },
  {
    Icon: Icons.Mobile,
    title: 'Web & Mobile Development',
    desc: 'React, React Native, and Flutter apps with real-time AI features and sub-100ms performance.',
    href: '/services/web-mobile-development',
    tags: ['React', 'Flutter', 'TypeScript'],
    stat: '4.9★ rated',
  },
  {
    Icon: Icons.SaaS,
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms — billing, auth, dashboards, and AI copilots from day one.',
    href: '/services/saas-product-development',
    tags: ['Multi-tenant', 'Stripe', 'Auth'],
    stat: '3-week MVP',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function ServicesSection() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-5 inline-flex">What we build</span>
          <h2 className="t-h2 mt-4">
            Services that scale with you
          </h2>
          <p className="t-body mx-auto mt-4" style={{ maxWidth: 480 }}>
            Full-service digital capabilities, supercharged with AI at every layer.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
            >
              <Link to={s.href} className="block h-full">
                <article className="glass-card h-full p-6 group cursor-pointer">
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-box">
                      <s.Icon />
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 600, color: '#7a92b0',
                      background: 'rgba(170,190,212,0.18)',
                      border: '1px solid rgba(170,190,212,0.30)',
                      padding: '2px 9px', borderRadius: 999,
                    }}>{s.stat}</span>
                  </div>

                  <h3 className="t-h3 mb-2">{s.title}</h3>
                  <p className="t-small mb-5" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t, j) => (
                      <span key={j} style={{
                        fontSize: 10, fontWeight: 600,
                        padding: '2px 8px', borderRadius: 999,
                        background: 'rgba(170,190,212,0.15)',
                        border: '1px solid rgba(170,190,212,0.28)',
                        color: 'var(--text-muted)',
                      }}>{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-auto" style={{ color: 'var(--blue)', fontSize: 13, fontWeight: 600 }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link to="/services" className="btn-outline">
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
