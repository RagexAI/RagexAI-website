import { Link } from 'react-router-dom';

const LINKS = {
  'AI First': [
    { label: 'Core AI Models', href: '/ai/core-ai' },
    { label: 'Agentic AI', href: '/ai/agentic-ai' },
    { label: 'AI Solutions', href: '/ai/solutions' },
    { label: 'NLP & Computer Vision', href: '/ai/core-ai/nlp-solutions' },
    { label: 'Predictive Analytics', href: '/ai/core-ai/predictive-analytics' },
  ],
  'Services': [
    { label: 'E-commerce Development', href: '/services/ecommerce-development' },
    { label: 'DevOps & Cloud', href: '/services/devops-cloud-security' },
    { label: 'Digital Transformation', href: '/services/digital-transformation' },
    { label: 'AI/ML & Automation', href: '/services/ai-ml-automation' },
    { label: 'Web & Mobile Dev', href: '/services/web-mobile-development' },
    { label: 'SaaS Development', href: '/services/saas-product-development' },
  ],
  'Solutions': [
    { label: 'Web Applications', href: '/solutions/web-applications' },
    { label: 'Enterprise Platforms', href: '/solutions/enterprise-applications' },
    { label: 'CRM & ERP', href: '/solutions/crm-erp-solutions' },
    { label: 'Marketplace Platforms', href: '/solutions/marketplace-platforms' },
    { label: 'Cloud Migration', href: '/solutions/cloud-migration' },
  ],
  'Industries': [
    { label: 'E-commerce & Retail', href: '/industries/ecommerce' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'FinTech & Banking', href: '/industries/fintech' },
    { label: 'EdTech', href: '/industries/edtech' },
    { label: 'SaaS', href: '/industries/saas' },
    { label: 'Real Estate', href: '/industries/real-estate' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.40)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(170,190,212,0.25)' }}>
      {/* Subtle sky mesh */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 10% 100%, rgba(29,109,181,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 0%, rgba(14,143,191,0.04) 0%, transparent 60%)',
      }} />
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(29,109,181,0.4), rgba(14,143,191,0.35), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top: brand + newsletter */}
        <div className="grid lg:grid-cols-3 gap-12 mb-14 pb-14 border-b"
          style={{ borderColor: 'hsl(var(--color-border))' }}>
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white"
                style={{ background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)' }}>
                R
              </div>
              <span className="font-extrabold text-xl tracking-tight" style={{ color: 'hsl(var(--color-heading))' }}>RagexAI</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'hsl(var(--color-body) / 0.7)' }}>
              AI-First web agency building enterprise-grade intelligence systems, automation platforms, and digital products that scale.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {[
                { label: 'Twitter / X', short: '𝕏' },
                { label: 'LinkedIn',   short: 'in' },
                { label: 'GitHub',     short: 'GH' },
              ].map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold border transition-all duration-200"
                  style={{ borderColor: 'hsl(var(--color-border2))', color: 'hsl(var(--color-body))', background: 'white' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--color-primary) / 0.4)';
                    (e.currentTarget as HTMLElement).style.color = '#1D6DB5';
                    (e.currentTarget as HTMLElement).style.background = 'hsl(var(--color-primary) / 0.05)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '';
                    (e.currentTarget as HTMLElement).style.color = '';
                    (e.currentTarget as HTMLElement).style.background = '';
                  }}
                  aria-label={s.label}>
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter — spans 2 cols */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255,255,255,0.95)',
                boxShadow: '0 4px 20px rgba(30,50,90,0.07)',
              }}>
              <div className="inline-flex items-center tag tag-primary mb-3 text-xs">Newsletter</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'hsl(var(--color-heading))' }}>Stay ahead in AI</h3>
              <p className="text-sm mb-5" style={{ color: 'hsl(var(--color-body) / 0.65)' }}>
                Weekly insights on AI trends, case studies, and engineering deep-dives. Join 4,000+ tech leaders.
              </p>
              <div className="flex gap-2">
                <input
                  type="email" placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors"
                  style={{ borderColor: 'hsl(var(--color-border2))', background: 'hsl(var(--color-surface))', color: 'hsl(var(--color-heading))', backdropFilter: 'blur(8px)' }}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#1D6DB5'; }}
                  onBlur={e => { (e.target as HTMLInputElement).style.borderColor = ''; }}
                />
                <button
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)', boxShadow: '0 4px 12px hsl(var(--color-primary)/.25)' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4"
                style={{ color: '#1D6DB5' }}>
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href}
                      className="text-xs transition-colors duration-150"
                      style={{ color: 'hsl(var(--color-body) / 0.65)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(var(--color-heading))'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ''; }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'hsl(var(--color-border))' }}>
          <p className="text-xs" style={{ color: 'hsl(var(--color-body) / 0.45)' }}>
            © {new Date().getFullYear()} RagexAI. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5 text-xs" style={{ color: 'hsl(var(--color-body) / 0.45)' }}>
            <span>Built with</span>
            {['React', 'TypeScript', 'AI'].map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded-md border text-[10px] font-medium"
                style={{ borderColor: 'hsl(var(--color-border))', background: 'white', color: 'hsl(var(--color-body) / 0.5)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
