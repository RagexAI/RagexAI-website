/**
 * Animated "Video Preview" components – pure CSS/SVG animations
 * These serve as interactive animated product demos, replacing static screenshots.
 * Each one simulates a real product / AI feature.
 */

/* ─── 1. AI BRAIN / NEURAL NETWORK ──────────────────────────── */
export function NeuralNetworkAnimation() {
  const nodes = [
    { cx: 56,  cy: 55  }, { cx: 56,  cy: 110 }, { cx: 56,  cy: 165 }, { cx: 56,  cy: 220 },
    { cx: 152, cy: 75  }, { cx: 152, cy: 145 }, { cx: 152, cy: 215 },
    { cx: 248, cy: 95  }, { cx: 248, cy: 175 },
    { cx: 330, cy: 135 },
  ];
  const edges = [
    [0,4],[0,5],[0,6],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],
    [4,7],[4,8],[5,7],[5,8],[6,7],[6,8],
    [7,9],[8,9],
  ];

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'#06091a', borderRadius:12, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      {/* Dot-grid background */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(56,160,217,0.18) 1px, transparent 1px)', backgroundSize:'22px 22px' }} />

      <svg viewBox="0 0 390 280" style={{ width:'100%', maxHeight:250, overflow:'visible' }}>
        <defs>
          <radialGradient id="nn-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#5bbcf0" />
            <stop offset="100%" stopColor="#1D6DB5" />
          </radialGradient>
        </defs>

        {/* Edges — static opacity, no filter blur */}
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="#2a7fd4" strokeOpacity="0.22" strokeWidth="1"
          >
            <animate attributeName="stroke-opacity"
              values="0.12;0.40;0.12"
              dur={`${2.4 + (i % 4) * 0.5}s`}
              begin={`${(i * 0.13) % 2}s`}
              repeatCount="indefinite" />
          </line>
        ))}

        {/* Travelling signal dots (no filter) */}
        {edges.slice(0, 9).map(([a, b], i) => (
          <circle key={`t${i}`} r="2.2" fill="#38d9f5" opacity="0.9">
            <animateMotion
              dur={`${1.8 + (i % 3) * 0.4}s`}
              begin={`${(i * 0.25) % 1.8}s`}
              repeatCount="indefinite"
              path={`M${nodes[a].cx},${nodes[a].cy} L${nodes[b].cx},${nodes[b].cy}`}
            />
            <animate attributeName="opacity" values="0;0.9;0"
              dur={`${1.8 + (i % 3) * 0.4}s`}
              begin={`${(i * 0.25) % 1.8}s`}
              repeatCount="indefinite" />
          </circle>
        ))}

        {/* Nodes — outer pulse ring + solid core, NO feGaussianBlur */}
        {nodes.map((n, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <circle cx={n.cx} cy={n.cy} r="9" fill="#1D6DB5" opacity="0.18">
              <animate attributeName="r" values="9;13;9"
                dur={`${2.2 + (i * 0.28) % 1.4}s`}
                begin={`${(i * 0.14) % 1}s`}
                repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0.06;0.18"
                dur={`${2.2 + (i * 0.28) % 1.4}s`}
                begin={`${(i * 0.14) % 1}s`}
                repeatCount="indefinite" />
            </circle>
            {/* Core node */}
            <circle cx={n.cx} cy={n.cy} r="5.5" fill="url(#nn-node)">
              <animate attributeName="opacity" values="0.78;1;0.78"
                dur={`${1.8 + (i * 0.22) % 1}s`}
                begin={`${(i * 0.10) % 0.8}s`}
                repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Layer labels */}
        <text x="34"  y="268" fill="#38A0D9" fontSize="8.5" opacity="0.55">Input Layer</text>
        <text x="128" y="268" fill="#38A0D9" fontSize="8.5" opacity="0.55">Hidden</text>
        <text x="224" y="268" fill="#38A0D9" fontSize="8.5" opacity="0.55">Hidden</text>
        <text x="312" y="268" fill="#06b6d4" fontSize="8.5" opacity="0.75">Output</text>
      </svg>
    </div>
  );
}

/* ─── 2. AI DASHBOARD ────────────────────────────────────────── */
export function DashboardAnimation() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'#070c1a', borderRadius:12, overflow:'hidden', padding:14, display:'flex', flexDirection:'column', gap:10 }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(56,160,217,0.12) 1px, transparent 1px)', backgroundSize:'20px 20px' }} />

      {/* Top bar */}
      <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <div style={{ width:7, height:7, borderRadius:'50%', background:'#34d399', boxShadow:'0 0 6px rgba(52,211,153,0.7)', animation:'pulse 2s ease-in-out infinite' }} />
          <span style={{ fontSize:11, color:'rgba(255,255,255,0.80)', fontFamily:'JetBrains Mono,monospace', fontWeight:600 }}>AI Dashboard</span>
        </div>
        <span style={{ fontSize:9, color:'rgba(255,255,255,0.40)', fontFamily:'JetBrains Mono,monospace' }}>Live</span>
      </div>

      {/* Stat cards */}
      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
        {[
          { label:'Accuracy', val:'98.4%', color:'#5bbcf0' },
          { label:'Requests', val:'12.4k', color:'#06b6d4' },
          { label:'Latency',  val:'42ms',  color:'#38d9f5' },
        ].map((s, i) => (
          <div key={i} style={{ borderRadius:8, padding:'7px 8px', border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize:9, color:'rgba(255,255,255,0.40)', marginBottom:3 }}>{s.label}</div>
            <div style={{ fontSize:15, fontWeight:700, color:s.color, lineHeight:1 }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ position:'relative', flex:1, display:'flex', alignItems:'flex-end', gap:3, padding:'0 2px' }}>
        {[40,65,50,80,55,90,70,95,75,100,85,78].map((h, i) => (
          <div key={i} style={{ flex:1, borderRadius:'3px 3px 0 0', height:`${h}%`, background:`linear-gradient(to top, #1D6DB5, #38A0D9)`, opacity:0.75,
            animation:`wave ${1.5 + i * 0.1}s ease-in-out ${i * 0.07}s infinite` }} />
        ))}
      </div>

      {/* X-axis labels */}
      <div style={{ position:'relative', display:'flex', justifyContent:'space-between', padding:'0 2px' }}>
        {['Jan','Mar','Jun','Sep','Dec'].map(m => (
          <span key={m} style={{ fontSize:8, color:'rgba(255,255,255,0.30)', fontFamily:'JetBrains Mono,monospace' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}


/* ─── 3. CODE EDITOR (streaming AI code gen) ─────────────────── */
export function CodeEditorAnimation() {
  const lines = [
    { code: 'import { RagexAI } from "@ragex/sdk"', delay: 0, color: '#5BAAEC' },
    { code: '', delay: 0.3, color: '' },
    { code: 'const agent = new RagexAI.Agent({', delay: 0.5, color: '#38A0D9' },
    { code: '  model: "ragex-pro-v2",', delay: 0.8, color: '#6ee7f7' },
    { code: '  tools: ["web", "code", "data"],', delay: 1.1, color: '#6ee7f7' },
    { code: '  temperature: 0.7,', delay: 1.4, color: '#f0abfc' },
    { code: '})', delay: 1.6, color: '#38A0D9' },
    { code: '', delay: 1.8, color: '' },
    { code: 'const result = await agent.run(', delay: 2.0, color: '#38A0D9' },
    { code: '  "Analyse Q3 revenue data"', delay: 2.3, color: '#86efac' },
    { code: ') // ✓ Streaming response…', delay: 2.6, color: '#6b7280' },
  ];

  return (
    <div className="relative w-full h-full bg-[#060b18] rounded-xl overflow-hidden">
      {/* Editor header */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[10px] text-body/60 font-mono">agent.ts</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] text-green-400 font-mono">AI generating…</span>
        </div>
      </div>
      {/* Code lines */}
      <div className="p-4 font-mono text-[11px] leading-6">
        <span className="text-body/40 mr-3 select-none">1</span>
        {lines.map((l, i) => (
          <div key={i} className="flex" style={{ opacity: 0, animation: `fade-in 0.4s ease ${l.delay + 0.2}s forwards` }}>
            <span className="text-body/40 mr-3 select-none w-4 text-right">{i + 1}</span>
            <span style={{ color: l.color || '#9ca3af' }}>{l.code}</span>
            {i === lines.length - 1 && (
              <span className="inline-block w-1.5 h-4 bg-blue-400 ml-0.5" style={{ animation: 'cursor-blink 1s step-end infinite' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 4. AI CHAT INTERFACE ───────────────────────────────────── */
export function ChatBotAnimation() {
  const messages = [
    { role: 'user', text: 'Summarise our top 3 revenue risks', delay: 0 },
    { role: 'ai', text: '1. Customer churn in mid-market ↑12%\n2. Supply chain latency +8 days\n3. Competitor pricing pressure', delay: 1.2 },
    { role: 'user', text: 'Generate a mitigation plan', delay: 3.5 },
    { role: 'ai', text: 'Drafting strategy…', delay: 4.5, typing: true },
  ];

  return (
    <div className="relative w-full h-full bg-[#070c1a] rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white">R</div>
        <div>
          <div className="text-xs font-semibold text-heading">RagexAI Assistant</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] text-green-400">Online</span>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        {messages.map((m, i) => (
          <div key={i}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ opacity: 0, animation: `slide-up-fade 0.5s ease ${m.delay}s forwards` }}>
            <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-[10px] leading-5 ${
              m.role === 'user'
                ? 'bg-blue-700 text-white rounded-br-sm'
                : 'bg-white/6 text-heading/90 border border-white/5 rounded-bl-sm'
            }`}>
              {m.typing ? (
                <span className="flex items-center gap-1">
                  {[0,0.15,0.3].map((d,j) => (
                    <span key={j} className="inline-block w-1 h-1 rounded-full bg-blue-400"
                      style={{ animation: `wave ${0.8}s ease ${d}s infinite` }} />
                  ))}
                </span>
              ) : m.text}
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <div className="flex items-center gap-2 p-3 border-t border-white/5">
        <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-[10px] text-body/50 border border-white/5">Ask anything…</div>
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <svg viewBox="0 0 16 16" className="w-3 h-3 fill-white"><path d="M2 8l12-6-6 12V9H2V8z"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ─── 5. DATA PIPELINE / FLOW ────────────────────────────────── */
export function PipelineAnimation() {
  const steps = ['Ingest', 'Clean', 'Transform', 'Enrich', 'Deploy'];
  const colors = ['#1D6DB5', '#38A0D9', '#5BAAEC', '#06b6d4', '#22d3ee'];

  return (
    <div className="relative w-full h-full bg-[#070c1a] rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 gap-4">
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="relative text-[10px] font-mono text-body/60 mb-2">AI Data Pipeline</div>
      {/* Pipeline steps */}
      <div className="relative flex items-center gap-0 w-full max-w-xs">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[8px] font-bold border"
                style={{
                  borderColor: colors[i] + '50',
                  background: colors[i] + '15',
                  color: colors[i],
                  animation: `glow-pulse 2s ease ${i * 0.4}s infinite`,
                }}>
                {i + 1}
              </div>
              <span className="text-[8px] text-body/60">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="h-0.5 w-4 relative overflow-hidden" style={{ background: colors[i] + '20' }}>
                <div className="absolute h-full w-1/2 rounded"
                  style={{
                    background: colors[i],
                    animation: `beam 1.5s ease ${i * 0.3}s infinite`,
                  }} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Flow metrics */}
      <div className="relative flex gap-3 mt-2">
        {[
          { label: 'Records/s', val: '24,891', color: '#1D6DB5' },
          { label: 'Accuracy', val: '99.8%', color: '#06b6d4' },
          { label: 'Latency', val: '18ms', color: '#5BAAEC' },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-[13px] font-bold" style={{ color: m.color }}>{m.val}</div>
            <div className="text-[8px] text-body/50">{m.label}</div>
          </div>
        ))}
      </div>
      {/* Log stream */}
      <div className="relative w-full bg-black/30 rounded-lg p-2 font-mono text-[8px] text-green-400/70 border border-white/5 h-16 overflow-hidden">
        {['✓ Batch 1,024 processed', '→ Enriching with vectors…', '✓ Model inference complete', '→ Writing to warehouse…', '✓ Pipeline healthy'].map((l, i) => (
          <div key={i} style={{ opacity: 0, animation: `slide-up-fade 0.3s ease ${i * 0.5 + 0.5}s forwards` }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

/* ─── 6. E-COMMERCE AI ───────────────────────────────────────── */
export function EcommerceAnimation() {
  const products = [
    { name: 'AI Pro Plan', price: '$299', badge: '↑ 42%', color: '#1D6DB5' },
    { name: 'Enterprise', price: '$999', badge: 'Best', color: '#06b6d4' },
    { name: 'Starter', price: '$49', badge: 'New', color: '#5BAAEC' },
  ];

  return (
    <div className="relative w-full h-full bg-[#070c1a] rounded-xl overflow-hidden p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-heading">AI Store Analytics</span>
        <div className="tag tag-accent text-[8px]">AI Optimised</div>
      </div>
      {/* Revenue bar */}
      <div className="bg-white/3 rounded-lg p-3 border border-white/5">
        <div className="text-[9px] text-body/60 mb-1">Monthly Revenue</div>
        <div className="text-lg font-bold text-gradient">$128,400</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[9px] text-green-400">↑ 34% vs last month</span>
        </div>
        <div className="mt-2 flex items-end gap-0.5 h-8">
          {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, #1D6DB5, #38A0D9)`,
                opacity: 0.7,
                animation: `wave ${1.2 + i * 0.08}s ease-in-out ${i * 0.05}s infinite`,
              }} />
          ))}
        </div>
      </div>
      {/* Products */}
      {products.map((p, i) => (
        <div key={i}
          className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/2"
          style={{ opacity: 0, animation: `slide-up-fade 0.4s ease ${i * 0.2 + 0.5}s forwards` }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md" style={{ background: p.color + '25', border: `1px solid ${p.color}40` }} />
            <span className="text-[10px] text-heading">{p.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold" style={{ color: p.color }}>{p.price}</span>
            <span className="tag text-[8px]" style={{ color: p.color, borderColor: p.color + '40', background: p.color + '10' }}>{p.badge}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── 7. ANALYTICS / BI DASHBOARD ───────────────────────────── */
export function AnalyticsAnimation() {
  return (
    <div className="relative w-full h-full bg-[#060b18] rounded-xl overflow-hidden p-4 flex flex-col gap-3">
      <div className="bg-grid absolute inset-0 opacity-10" />
      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-semibold text-heading">Business Intelligence</span>
        <span className="text-[9px] text-body/50 font-mono">Real-time</span>
      </div>
      {/* Donut chart simulation */}
      <div className="relative flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
            {[
              { pct: 42, color: '#1D6DB5', dash: 132, offset: 0 },
              { pct: 28, color: '#06b6d4', dash: 88, offset: 132 },
              { pct: 20, color: '#5BAAEC', dash: 63, offset: 220 },
              { pct: 10, color: '#f472b6', dash: 31, offset: 283 },
            ].map((s, i) => (
              <circle key={i} cx="40" cy="40" r="30" fill="none"
                stroke={s.color} strokeWidth="10"
                strokeDasharray={`${s.dash} ${314 - s.dash}`}
                strokeDashoffset={-s.offset} opacity="0.85">
                <animate attributeName="stroke-dasharray"
                  from={`0 314`} to={`${s.dash} ${314 - s.dash}`}
                  dur="1.5s" begin={`${i * 0.2}s`} fill="freeze" />
              </circle>
            ))}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-bold text-heading">100%</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          {[
            { label: 'Organic', val: '42%', color: '#1D6DB5' },
            { label: 'Paid', val: '28%', color: '#06b6d4' },
            { label: 'Referral', val: '20%', color: '#5BAAEC' },
            { label: 'Direct', val: '10%', color: '#f472b6' },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm" style={{ background: r.color }} />
              <span className="text-[9px] text-body/70 flex-1">{r.label}</span>
              <span className="text-[9px] font-bold" style={{ color: r.color }}>{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      {/* KPI row */}
      <div className="relative grid grid-cols-2 gap-2">
        {[
          { kpi: 'Conversion', val: '8.4%', trend: '+1.2%' },
          { kpi: 'Avg. Order', val: '$342', trend: '+18%' },
          { kpi: 'CAC', val: '$24', trend: '-8%' },
          { kpi: 'LTV', val: '$1,890', trend: '+22%' },
        ].map((k, i) => (
          <div key={i} className="bg-white/3 rounded-lg p-2 border border-white/5">
            <div className="text-[8px] text-body/50">{k.kpi}</div>
            <div className="text-[13px] font-bold text-heading">{k.val}</div>
            <div className={`text-[8px] ${k.trend.startsWith('-') ? 'text-green-400' : 'text-green-400'}`}>{k.trend}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 8. MOBILE APP PREVIEW ──────────────────────────────────── */
export function MobileAppAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#070c1a] rounded-xl overflow-hidden">
      <div className="bg-mesh absolute inset-0 opacity-30" />
      {/* Phone frame */}
      <div className="relative w-32 h-56 rounded-2xl border border-white/10 bg-[#0a0f25] overflow-hidden shadow-xl"
        style={{ boxShadow: '0 0 40px rgba(99,102,241,0.2)' }}>
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-black/60 rounded-full z-10" />
        {/* Screen content */}
        <div className="p-2 mt-4 flex flex-col gap-1.5">
          {/* App header */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[7px] font-bold text-gradient">RagexAI</span>
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
          </div>
          {/* Balance card */}
          <div className="rounded-xl p-2 text-center"
            style={{ background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)' }}>
            <div className="text-[7px] text-white/70">AI Credits</div>
            <div className="text-sm font-bold text-white">12,400</div>
            <div className="text-[6px] text-white/60">↑ 340 this week</div>
          </div>
          {/* Metrics */}
          {[
            { label: 'Queries', val: '8.2k', icon: '⚡' },
            { label: 'Saved', val: '$1.4k', icon: '💰' },
            { label: 'Tasks', val: '142', icon: '✓' },
          ].map((item, i) => (
            <div key={i}
              className="flex items-center gap-2 p-1.5 rounded-lg bg-white/4 border border-white/5"
              style={{ opacity: 0, animation: `slide-up-fade 0.3s ease ${i * 0.2 + 0.3}s forwards` }}>
              <span className="text-[8px]">{item.icon}</span>
              <span className="text-[7px] text-body/80 flex-1">{item.label}</span>
              <span className="text-[8px] font-bold text-blue-400">{item.val}</span>
            </div>
          ))}
          {/* CTA button */}
          <div className="mt-1 w-full h-5 rounded-lg flex items-center justify-center text-[7px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)', animation: 'glow-pulse 2s ease infinite' }}>
            New AI Task
          </div>
        </div>
      </div>
      {/* Floating badges */}
      <div className="absolute top-6 right-6 tag tag-accent text-[8px]" style={{ animation: 'float 4s ease-in-out infinite' }}>
        iOS 17+
      </div>
      <div className="absolute bottom-8 left-6 tag tag-primary text-[8px]" style={{ animation: 'float 5s ease-in-out 1s infinite' }}>
        Android
      </div>
    </div>
  );
}

/* ─── 9. CLOUD / INFRASTRUCTURE ─────────────────────────────── */
export function CloudInfraAnimation() {
  const nodes = [
    { x: 50, y: 50, label: 'CDN', color: '#1D6DB5' },
    { x: 50, y: 160, label: 'API GW', color: '#06b6d4' },
    { x: 150, y: 105, label: 'AI Core', color: '#5BAAEC' },
    { x: 250, y: 50, label: 'DB', color: '#22d3ee' },
    { x: 250, y: 160, label: 'Cache', color: '#f472b6' },
    { x: 340, y: 105, label: 'Output', color: '#4ade80' },
  ];
  const connections = [[0,2],[1,2],[2,3],[2,4],[3,5],[4,5]];

  return (
    <div className="relative w-full h-full bg-[#070c1a] rounded-xl overflow-hidden flex items-center justify-center">
      <div className="bg-grid absolute inset-0 opacity-15" />
      <svg viewBox="0 0 400 210" className="w-full" style={{ maxHeight: 200 }}>
        {connections.map(([a, b], i) => (
          <g key={i}>
            <line x1={nodes[a].x + 22} y1={nodes[a].y + 22} x2={nodes[b].x + 22} y2={nodes[b].y + 22}
              stroke="#1D6DB5" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4,4">
              <animate attributeName="stroke-dashoffset" from="0" to="-12"
                dur="1s" repeatCount="indefinite" />
            </line>
            {/* Travelling packet */}
            <circle r="3" fill={nodes[a].color}>
              <animateMotion
                dur={`${1.2 + i * 0.3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite"
                path={`M${nodes[a].x + 22},${nodes[a].y + 22} L${nodes[b].x + 22},${nodes[b].y + 22}`} />
              <animate attributeName="opacity" values="0;1;1;0"
                dur={`${1.2 + i * 0.3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y} width="44" height="44" rx="10"
              fill={n.color + '15'} stroke={n.color} strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="stroke-opacity" values="0.3;0.8;0.3"
                dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <text x={n.x + 22} y={n.y + 27} textAnchor="middle" fill={n.color} fontSize="8.5" fontWeight="600">{n.label}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[9px] text-green-400 font-mono">All systems operational</span>
      </div>
    </div>
  );
}

/* ─── 10. AUTOMATION WORKFLOW ────────────────────────────────── */
export function WorkflowAnimation() {
  const steps = [
    { icon: '📥', label: 'Trigger', status: 'done', color: '#4ade80' },
    { icon: '🤖', label: 'AI Process', status: 'active', color: '#1D6DB5' },
    { icon: '🔍', label: 'Verify', status: 'pending', color: '#5BAAEC' },
    { icon: '📤', label: 'Deliver', status: 'pending', color: '#06b6d4' },
  ];

  return (
    <div className="relative w-full h-full bg-[#070c1a] rounded-xl overflow-hidden p-4 flex flex-col gap-3">
      <div className="bg-dots absolute inset-0 opacity-15" />
      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-semibold text-heading">Automation Workflow</span>
        <span className="tag tag-primary text-[8px]">Running</span>
      </div>
      {/* Steps */}
      <div className="relative flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={i}
            className="flex items-center gap-3 p-2.5 rounded-xl border"
            style={{
              borderColor: s.status === 'active' ? s.color + '60' : 'rgba(255,255,255,0.06)',
              background: s.status === 'active' ? s.color + '10' : 'rgba(255,255,255,0.02)',
              boxShadow: s.status === 'active' ? `0 0 15px ${s.color}25` : 'none',
              opacity: 0,
              animation: `slide-up-fade 0.4s ease ${i * 0.25}s forwards`,
            }}>
            <span className="text-base">{s.icon}</span>
            <div className="flex-1">
              <div className="text-[10px] font-medium text-heading">{s.label}</div>
              {s.status === 'active' && (
                <div className="mt-1 h-1 rounded-full overflow-hidden bg-white/10">
                  <div className="h-full rounded-full" style={{
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`,
                    animation: 'shimmer 1.5s ease infinite',
                    width: '60%',
                  }} />
                </div>
              )}
            </div>
            <div className={`w-2 h-2 rounded-full ${
              s.status === 'done' ? 'bg-green-400' : s.status === 'active' ? 'animate-ping-slow' : 'bg-white/10'
            }`} style={{ background: s.status === 'active' ? s.color : undefined }} />
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="relative flex gap-3 mt-1">
        {[
          { label: 'Runs today', val: '2,841' },
          { label: 'Time saved', val: '48h' },
          { label: 'Success', val: '99.6%' },
        ].map((m, i) => (
          <div key={i} className="flex-1 bg-white/3 rounded-lg p-2 border border-white/5 text-center">
            <div className="text-[12px] font-bold text-blue-400">{m.val}</div>
            <div className="text-[7px] text-body/50">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
