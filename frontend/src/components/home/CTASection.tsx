import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Deep navy-to-sky blue gradient — no purple */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0F1E3A 0%, #1A3A6A 45%, #0E6FA8 100%)' }} />

      {/* Dot grid on top */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />

      {/* Animated floating shapes */}
      {[...Array(4)].map((_, i) => (
        <div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${60 + i * 30}px`, height: `${60 + i * 30}px`,
            background: 'rgba(255,255,255,0.04)',
            left: `${8 + i * 22}%`, top: `${15 + (i % 2) * 50}%`,
            animation: `float-badge ${5 + i}s ease-in-out ${i * 0.6}s infinite`,
          }} />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-semibold text-white/90">Ready to start?</span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-[1.05]">
          Let's build your AI<br />product together
        </h2>

        <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Book a free 30-minute strategy call. We'll audit your stack, identify the highest-ROI AI opportunities, and present a concrete roadmap — no strings attached.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link to="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:-translate-y-1 bg-white"
            style={{ color: '#1D6DB5', boxShadow: '0 8px 24px rgba(0,0,0,0.22)' }}>
            Book Free Strategy Call
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/portfolio"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl font-semibold text-base border border-white/25 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
            View Our Work
          </Link>
        </div>

        {/* Trust bullets */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { text: 'NDA signed on day 1' },
            { text: 'Response within 24h' },
            { text: 'Fixed-price engagements' },
            { text: 'No lock-in contracts' },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-white/55">
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
