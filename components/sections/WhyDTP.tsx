import QAAccordion from "@/components/QAAccordion";

const QA_ITEMS = [
  {
    q: "双通道是什么？",
    a: "医保报销的两个渠道：医院 + 定点零售药店。双通道政策让医保谈判目录内的药品，在院外 DTP 药房也能刷医保报销——这是 DTP 商业模式得以成立的制度基础。",
  },
  {
    q: "为什么医院要把处方外送出去？",
    a: "两重压力叠加：① 集采后仿制药进院，原研药院内空间被压缩，医院有动力主动外推；② 药占比考核要求药品收入占比不超 30%，高价药在院内成本结构不划算，外送反而优化考核指标。",
  },
];

export default function WhyDTP() {
  return (
    <section
      id="why-dtp"
      className="min-h-screen bg-white flex flex-col justify-center px-12 lg:px-24 py-24 relative"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#652D90] bg-[#F5EDF9] px-3 py-1.5 rounded-full tracking-wider">
            01 · 宏观背景
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          为什么会有 DTP？
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-10 leading-relaxed">
          一系列政策叠加，共同把高价药从医院"推"到了院外——DTP 渠道由此崛起。
        </p>

        {/* Flow diagram */}
        <div className="mb-10">
          <svg viewBox="0 0 760 470" className="w-full max-w-3xl mx-auto" style={{ fontFamily: "inherit" }}>
            <defs>
              <marker id="ap" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="#652D90" fillOpacity="0.6" />
              </marker>
            </defs>

            {/* Top → fork */}
            <line x1="380" y1="60" x2="380" y2="80" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="155" y1="80" x2="605" y2="80" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="155" y1="80" x2="155" y2="95" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />
            <line x1="605" y1="80" x2="605" y2="95" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* Left header → sub fork */}
            <line x1="155" y1="131" x2="155" y2="140" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="85" y1="140" x2="220" y2="140" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="85" y1="140" x2="85" y2="148" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />
            <line x1="220" y1="140" x2="220" y2="148" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* Left sub → merge join */}
            <line x1="85" y1="218" x2="85" y2="238" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="220" y1="218" x2="220" y2="238" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="85" y1="238" x2="220" y2="238" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="155" cy="238" r="3" fill="#652D90" fillOpacity="0.4" />
            <line x1="155" y1="238" x2="155" y2="282" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* Right header → sub → merge */}
            <line x1="605" y1="131" x2="605" y2="148" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />
            <line x1="605" y1="218" x2="605" y2="282" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* Horizontal connector between merge boxes */}
            <line x1="285" y1="304" x2="470" y2="304" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.5" />

            {/* Converge → DTP */}
            <line x1="155" y1="326" x2="155" y2="368" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="605" y1="326" x2="605" y2="368" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="155" y1="368" x2="605" y2="368" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="380" cy="368" r="3" fill="#652D90" fillOpacity="0.4" />
            <line x1="380" y1="368" x2="380" y2="405" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* ── BOXES ── */}
            {/* Top: 一致性评价 → 集采 */}
            <rect x="210" y="10" width="340" height="50" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="380" y="41" textAnchor="middle" fontSize="13" fontWeight="600" fill="#652D90">一致性评价  →  集采</text>

            {/* Left group header */}
            <rect x="25" y="95" width="260" height="36" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="155" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e293b">【供给侧推力】</text>

            {/* Sub-left: 药占比考核 */}
            <rect x="25" y="148" width="120" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="85" y="176" textAnchor="middle" fontSize="11" fontWeight="500" fill="#475569">药占比考核</text>
            <text x="85" y="194" textAnchor="middle" fontSize="10" fill="#94a3b8">（医院要外推药）</text>

            {/* Sub-right: 原研药院内被替代 */}
            <rect x="155" y="148" width="130" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="220" y="174" textAnchor="middle" fontSize="11" fontWeight="500" fill="#475569">原研药院内被替代</text>
            <text x="220" y="191" textAnchor="middle" fontSize="10" fill="#94a3b8">（高价药院内</text>
            <text x="220" y="207" textAnchor="middle" fontSize="10" fill="#94a3b8">待不住）</text>

            {/* Left merge: 医院主动外推高价药 */}
            <rect x="25" y="282" width="260" height="44" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="155" y="309" textAnchor="middle" fontSize="12" fontWeight="600" fill="#652D90">医院主动外推高价药</text>

            {/* Right group header */}
            <rect x="470" y="95" width="270" height="36" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="605" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e293b">【支付侧条件】</text>

            {/* Right sub: 双通道政策 */}
            <rect x="470" y="148" width="270" height="70" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="605" y="176" textAnchor="middle" fontSize="12" fontWeight="600" fill="#652D90">双通道政策</text>
            <text x="605" y="197" textAnchor="middle" fontSize="10" fill="#652D90" fillOpacity="0.7">（院外能报销了）</text>

            {/* Right merge: 院外也能医保报销 */}
            <rect x="470" y="282" width="270" height="44" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="605" y="309" textAnchor="middle" fontSize="12" fontWeight="600" fill="#652D90">院外也能医保报销</text>

            {/* DTP 渠道崛起 */}
            <rect x="215" y="405" width="330" height="56" rx="8" fill="#652D90" />
            <text x="380" y="430" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">【DTP 渠道崛起】</text>
            <text x="380" y="450" textAnchor="middle" fontSize="11" fill="#e9d5ff">院外承接处方 + 患者刷医保取药</text>
          </svg>
        </div>

        <QAAccordion items={QA_ITEMS} />
      </div>
      <span className="absolute bottom-6 right-10 lg:right-24 text-xs font-medium tracking-widest text-black/10 pointer-events-none select-none">
        Freya Hu
      </span>
    </section>
  );
}