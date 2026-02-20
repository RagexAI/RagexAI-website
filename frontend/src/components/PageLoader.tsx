import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps { visible: boolean; }

/* CSS for the loader — injected once, GPU-driven */
const LOADER_CSS = `
  @keyframes loader-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes loader-spin-rev {
    to { transform: rotate(-360deg); }
  }
  @keyframes loader-orbit {
    from { transform: rotate(0deg)   translateX(44px) rotate(0deg);   }
    to   { transform: rotate(360deg) translateX(44px) rotate(-360deg); }
  }
  @keyframes loader-orbit-sm {
    from { transform: rotate(180deg) translateX(30px) rotate(-180deg); }
    to   { transform: rotate(540deg) translateX(30px) rotate(-540deg); }
  }
  @keyframes loader-pulse-glow {
    0%,100% { opacity: 0.14; transform: scale(1); }
    50%      { opacity: 0.06; transform: scale(1.5); }
  }
  @keyframes loader-dot-blink {
    0%,100% { opacity: 0.22; }
    50%      { opacity: 1; }
  }
  @keyframes loader-text-pulse {
    0%,100% { opacity: 0.50; }
    50%      { opacity: 1; }
  }
`;

export default function PageLoader({ visible }: PageLoaderProps) {
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  return (
    <>
      <style>{LOADER_CSS}</style>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 28,
              background: 'radial-gradient(ellipse 80% 60% at 50% 42%, #f4f9fd 0%, #dce8f3 40%, #c3d5e6 75%, #aabdd3 100%)',
            }}
          >
            {/* ── Ring stack ─────────────────────────── */}
            <div style={{ position: 'relative', width: 90, height: 90 }}>

              {/* Outer pulse glow */}
              <div style={{
                position: 'absolute', inset: -20, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(30,58,138,0.14) 0%, transparent 68%)',
                animation: 'loader-pulse-glow 2.4s ease-in-out infinite',
              }} />

              {/* Static reference ring */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '1px solid rgba(30,58,138,0.08)',
              }} />

              {/* Main rotating arc */}
              <svg width="90" height="90" viewBox="0 0 90 90"
                style={{ position: 'absolute', inset: 0, animation: 'loader-spin 1.9s linear infinite' }}>
                <circle cx="45" cy="45" r="39"
                  fill="none" stroke="#1E3A8A" strokeWidth="1.5"
                  strokeDasharray="70 175" strokeLinecap="round" strokeOpacity="0.82" />
              </svg>

              {/* Inner counter-rotating arc */}
              <svg width="90" height="90" viewBox="0 0 90 90"
                style={{ position: 'absolute', inset: 0, animation: 'loader-spin-rev 3.8s linear infinite' }}>
                <circle cx="45" cy="45" r="28"
                  fill="none" stroke="#1E3A8A" strokeWidth="0.9"
                  strokeDasharray="36 140" strokeLinecap="round" strokeOpacity="0.32" />
              </svg>

              {/* Orbiting dot — outer track */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 4, height: 4, marginTop: -2, marginLeft: -2,
                borderRadius: '50%', background: '#1E3A8A', opacity: 0.65,
                animation: 'loader-orbit 2.8s linear infinite',
                transformOrigin: '0 0',
              }} />

              {/* Orbiting dot — inner track, opposite phase */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 3, height: 3, marginTop: -1.5, marginLeft: -1.5,
                borderRadius: '50%', background: '#1E3A8A', opacity: 0.42,
                animation: 'loader-orbit-sm 4.2s linear infinite',
                transformOrigin: '0 0',
              }} />

              {/* Centre dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#1E3A8A',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            {/* ── Brand text ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}
            >
              <div style={{
                fontSize: 16, fontWeight: 700, letterSpacing: '-0.015em',
                color: '#0a1628', fontFamily: "'Inter', sans-serif",
              }}>
                Ragex<span style={{ color: '#1a56c4' }}>AI</span>
              </div>
              <p style={{
                fontSize: 10.5, fontWeight: 500, letterSpacing: '0.09em',
                color: '#3d5070', textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                animation: 'loader-text-pulse 2.8s ease-in-out 0.6s infinite',
              }}>
                Building Intelligent Solutions
              </p>
            </motion.div>

            {/* ── Progress dots ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{ display: 'flex', gap: 6 }}
            >
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    width: 4, height: 4, borderRadius: '50%', background: '#1E3A8A',
                    animation: `loader-dot-blink 1.2s ease-in-out ${i * 0.22}s infinite`,
                  }}
                />
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
