/**
 * GlobalBackground — GPU-accelerated water ripple
 *
 * Each ring = one <div> with:
 *   • border: 1.5px solid rgba(255,255,255,0.88)   → light-reflection line
 *   • box-shadow (outer + inner blue glow)           → water-depth halo
 *   • CSS @keyframes scale 0 → 1 + opacity fade     → outward expanding ripple
 *
 * Why divs instead of SVG: CSS transform + box-shadow are GPU composited.
 * SVG feGaussianBlur runs on CPU every frame — causes jank.
 * This approach uses zero SVG filters and is perfectly smooth.
 */

import { motion } from 'framer-motion';

const RING_COUNT = 6;
const DURATION   = 10;                      // seconds per full expansion
const STAGGER    = DURATION / RING_COUNT;   // 1.67 s between each ring

/* Injected once — drives all ring divs */
const KEYFRAMES_CSS = `
  @keyframes water-ripple {
    0%    { transform: scale(0.02);  opacity: 0;    }
    5%    { opacity: 1;    }
    44%   { opacity: 0.58; }
    82%   { opacity: 0.16; }
    100%  { transform: scale(1);    opacity: 0;    }
  }
`;

/* Shared ring style — each ring is a large circle div that expands from center */
const ringBase: React.CSSProperties = {
  position:     'absolute',
  width:        1800,
  height:       1800,
  borderRadius: '50%',
  /* White edge = light reflection line on water surface */
  border:       '1.5px solid rgba(255, 255, 255, 0.86)',
  /* Blue glow = water depth / refraction halo */
  boxShadow:    '0 0 28px 12px rgba(105, 175, 235, 0.50), inset 0 0 28px 12px rgba(105, 175, 235, 0.14)',
  willChange:   'transform, opacity',
  /* Place centre at 38% from viewport top (matches background origin) */
  top:          '38%',
  left:         '50%',
  marginTop:    -900,
  marginLeft:   -900,
  pointerEvents: 'none',
};

export default function GlobalBackground() {
  return (
    <>
      <style>{KEYFRAMES_CSS}</style>

      <div
        aria-hidden="true"
        style={{
          position:   'fixed',
          inset:       0,
          zIndex:     -1,
          overflow:   'hidden',
          pointerEvents: 'none',
          /* Water-surface palette: pure white centre → muted steel-blue edge */
          background: `radial-gradient(ellipse 90% 65% at 50% 38%,
            #ffffff  0%,
            #f6faff  7%,
            #eaf3fb 20%,
            #d7e9f5 36%,
            #c3d9ee 55%,
            #b0cae7 74%,
            #a0bedd 100%
          )`,
        }}
      >

        {/* ── Expanding water rings ─────────────────────────────── */}
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <div
            key={i}
            style={{
              ...ringBase,
              animation: `water-ripple ${DURATION}s linear ${-(i * STAGGER).toFixed(2)}s infinite`,
            }}
          />
        ))}

        {/* ── Central light-source glow (where rings are born) ─── */}
        <motion.div
          animate={{ scale: [1, 1.07, 1], opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position:   'absolute',
            width:       500,
            height:      380,
            borderRadius:'50%',
            top:        '38%',
            left:       '50%',
            marginLeft: -250,
            marginTop:  -190,
            background: `radial-gradient(ellipse,
              rgba(255,255,255,1.00)  0%,
              rgba(255,255,255,0.75) 32%,
              rgba(238,248,255,0.30) 58%,
              transparent            72%
            )`,
            filter:     'blur(16px)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Slow-drift ambient blob — top-left ───────────────── */}
        <motion.div
          animate={{ x: [0, 55, -35, 28, 0], y: [0, -28, 44, -18, 0] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position:   'absolute',
            width:       860,
            height:      660,
            borderRadius:'50%',
            top:        '-10%',
            left:       '-8%',
            background: `radial-gradient(ellipse, rgba(175,215,250,0.38) 0%, transparent 64%)`,
            filter:     'blur(68px)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Slow-drift ambient blob — bottom-right ───────────── */}
        <motion.div
          animate={{ x: [0, -50, 34, -24, 0], y: [0, 38, -44, 26, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: -13 }}
          style={{
            position:   'absolute',
            width:       740,
            height:      600,
            borderRadius:'50%',
            bottom:     '-12%',
            right:      '-6%',
            background: `radial-gradient(ellipse, rgba(160,208,248,0.30) 0%, transparent 66%)`,
            filter:     'blur(78px)',
            pointerEvents: 'none',
          }}
        />

      </div>
    </>
  );
}
