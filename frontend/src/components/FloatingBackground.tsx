/**
 * FloatingBackground — the kore.ai signature atmospheric background
 *
 * Layers (back to front):
 *   1. Radial sky gradient (on the parent section, not here)
 *   2. Floating blur blobs  — very slow, low-opacity
 *   3. Concentric ring halo — static, centered on hero text
 *
 * Usage:
 *   <section className="sky-bg relative overflow-hidden">
 *     <FloatingBackground rings />
 *     ...content...
 *   </section>
 */

interface FloatingBackgroundProps {
  /** Show the concentric ring halo (hero only) */
  rings?: boolean;
  /** Number of rings to draw (default 6) */
  ringCount?: number;
  /** Centre the rings at this Y offset (css string, default '38%') */
  ringOriginY?: string;
}

export default function FloatingBackground({
  rings = false,
  ringCount = 7,
  ringOriginY = '38%',
}: FloatingBackgroundProps) {
  const RING_SIZES = Array.from({ length: ringCount }, (_, i) => 220 + i * 160);

  return (
    <>
      {/* ── Blur blobs ─────────────────────────────────────────── */}
      {/* Top-left blob */}
      <div
        className="anim-blob1"
        style={{
          position: 'absolute', zIndex: 0,
          width: 700, height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(170,200,240,0.30) 0%, transparent 68%)',
          filter: 'blur(72px)',
          top: '-15%', left: '-8%',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom-right blob */}
      <div
        className="anim-blob2"
        style={{
          position: 'absolute', zIndex: 0,
          width: 640, height: 640,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(195,213,236,0.25) 0%, transparent 68%)',
          filter: 'blur(80px)',
          bottom: '-12%', right: '-6%',
          pointerEvents: 'none',
        }}
      />

      {/* Mid accent blob */}
      <div
        className="anim-blob3"
        style={{
          position: 'absolute', zIndex: 0,
          width: 480, height: 480,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(148,196,230,0.18) 0%, transparent 70%)',
          filter: 'blur(90px)',
          top: '30%', right: '15%',
          pointerEvents: 'none',
        }}
      />

      {/* ── Concentric rings (hero only) ───────────────────────── */}
      {rings && (
        <div
          style={{
            position: 'absolute', zIndex: 0,
            top: ringOriginY, left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          {RING_SIZES.map((size, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: size, height: size,
                borderRadius: '50%',
                border: `1px solid rgba(100,150,210,${Math.max(0.02, 0.13 - i * 0.016)})`,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `ring-pulse ${14 + i * 4}s ease-in-out infinite`,
                animationDelay: `${i * -2.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
