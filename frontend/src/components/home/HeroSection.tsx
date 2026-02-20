import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NeuralNetworkAnimation, DashboardAnimation } from '../animations/AnimatedPreviews';

/* ─── Typewriter ─────────────────────────────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 2600) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? 36 : speed;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) { setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
        else setTimeout(() => setDeleting(true), pause);
      } else {
        if (charIdx > 0) { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
        else { setDeleting(false); setWordIdx(w => (w + 1) % words.length); }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

/* ─── ProductWindow ──────────────────────────────────────────── */
function ProductWindow({
  title, children, live = false,
}: { title: string; children: React.ReactNode; live?: boolean }) {
  return (
    <div className="pw">
      <div className="pw-chrome">
        <div className="pw-dot" style={{ background: '#ff5f57' }} />
        <div className="pw-dot" style={{ background: '#febc2e' }} />
        <div className="pw-dot" style={{ background: '#28c840' }} />
        <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 600, color: '#7a92b0', fontFamily: 'JetBrains Mono, monospace' }}>
          {title}
        </span>
        {live && (
          <span style={{
            marginLeft: 'auto', fontSize: 9, fontWeight: 700, color: '#059669',
            background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)',
            padding: '1px 7px', borderRadius: '999px',
          }}>● LIVE</span>
        )}
      </div>
      <div style={{ padding: 0, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

const WORDS = ['Enterprise AI', 'Agentic Systems', 'Smart Automation', 'AI Platforms'];

export default function HeroSection() {
  const typed = useTypewriter(WORDS);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '96px', paddingBottom: '80px' }}
    >

      {/* ── Hero content ────────────────────────────────────────── */}
      <div className="container relative" style={{ zIndex: 2 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' as const }}
          className="flex justify-center mb-8"
        >
          <span className="eyebrow">
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
            AI-First Web Agency &nbsp;·&nbsp; Building the future with AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' as const }}
          className="text-center"
        >
          <h1 className="t-h1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: '#0f172a', lineHeight: 1.15 }}>
            We Build<br />
            <span style={{ color: '#0f172a' }}>{typed}</span>
            <span className="anim-blink" style={{ color: 'rgba(15,23,42,0.35)' }}>|</span>
            <br />
            For Your Business
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' as const }}
          className="t-body text-center mx-auto mt-6"
          style={{ maxWidth: 540, color: 'var(--text-secondary)' }}
        >
          From intelligent automation to full-stack AI solutions — we engineer production-ready products that drive measurable ROI and competitive advantage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' as const }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link to="/contact" className="btn-primary">
            Start Your AI Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/portfolio" className="btn-outline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
              <polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none" />
            </svg>
            View Our Work
          </Link>
        </motion.div>

        {/* Product previews */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.52, ease: 'easeOut' as const }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 max-w-4xl mx-auto"
        >
          <ProductWindow title="neural-network — live" live>
            <div style={{ height: 220, overflow: 'hidden' }}>
              <NeuralNetworkAnimation />
            </div>
          </ProductWindow>
          <ProductWindow title="ai-dashboard — analytics" live>
            <div style={{ height: 220, overflow: 'hidden' }}>
              <DashboardAnimation />
            </div>
          </ProductWindow>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-12"
        >
          <span className="t-small" style={{ color: 'var(--text-muted)' }}>Trusted by teams at</span>
          {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((name) => (
            <span key={name} style={{
              fontSize: 12, fontWeight: 600, color: 'var(--text-muted)',
              padding: '3px 10px', borderRadius: 6,
              background: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(170,190,212,0.35)',
            }}>{name}</span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
