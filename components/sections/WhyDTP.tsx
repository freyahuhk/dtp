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
          <svg viewBox="0 0 700 450" className="w-full max-w-3xl mx-auto" style={{ fontFamily: "inherit" }}>
            <defs>
              <marker id="ap" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Title */}
            <text x="350" y="18" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e293b">DTP 渠道崛起的两股推力</text>

            {/* Top: 政策源头 */}
            <rect x="200" y="28" width="300" height="72" rx="10" fill="#f5f3f0" stroke="#c8c4bc" strokeWidth="1.5" />
            <text x="350" y="60" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4a4540">政策源头</text>
            <text x="350" y="80" textAnchor="middle" fontSize="11" fill="#94a3b8">一致性评价 + 集采</text>

            {/* Fork */}
            <line x1="350" y1="100" x2="350" y2="115" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="170" y1="115" x2="530" y2="115" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="170" y1="115" x2="170" y2="145" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />
            <line x1="530" y1="115" x2="530" y2="145" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />
            <text x="170" y="131" textAnchor="middle" fontSize="10" fill="#94a3b8">供给侧推力</text>
            <text x="530" y="131" textAnchor="middle" fontSize="10" fill="#94a3b8">支付侧条件</text>

            {/* Left box 1 */}
            <rect x="30" y="145" width="280" height="82" rx="10" fill="#fde8e8" stroke="#d48080" strokeWidth="1.5" />
            <text x="170" y="179" textAnchor="middle" fontSize="13" fontWeight="700" fill="#8b2020">高价原研药被挤出院内</text>
            <text x="170" y="200" textAnchor="middle" fontSize="10" fill="#b05050">集采替代 + 药占比考核</text>

            {/* Left arrow down */}
            <line x1="170" y1="227" x2="170" y2="262" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />

            {/* Left box 2 */}
            <rect x="30" y="262" width="280" height="60" rx="10" fill="#fde8e8" stroke="#d48080" strokeWidth="1.5" />
            <text x="170" y="297" textAnchor="middle" fontSize="13" fontWeight="700" fill="#8b2020">处方流向院外</text>

            {/* Right box 1 */}
            <rect x="390" y="145" width="280" height="82" rx="10" fill="#e5f0f8" stroke="#80a8c8" strokeWidth="1.5" />
            <text x="530" y="179" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a3a6b">双通道政策</text>
            <text x="530" y="200" textAnchor="middle" fontSize="10" fill="#4070a0">医保谈判药院外可报销</text>

            {/* Right arrow down */}
            <line x1="530" y1="227" x2="530" y2="262" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />

            {/* Right box 2 */}
            <rect x="390" y="262" width="280" height="60" rx="10" fill="#e5f0f8" stroke="#80a8c8" strokeWidth="1.5" />
            <text x="530" y="297" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a3a6b">患者院外接得住</text>

            {/* Convergence arrows → ← */}
            <line x1="310" y1="292" x2="350" y2="292" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />
            <line x1="390" y1="292" x2="350" y2="292" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />
            <circle cx="350" cy="292" r="3" fill="#94a3b8" fillOpacity="0.8" />
            <line x1="350" y1="292" x2="350" y2="362" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ap)" />

            {/* DTP 渠道崛起 */}
            <rect x="200" y="362" width="300" height="70" rx="10" fill="#652D90" />
            <text x="350" y="393" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">DTP 渠道崛起</text>
            <text x="350" y="414" textAnchor="middle" fontSize="11" fill="#e9d5ff">院外承接处方，患者刷医保取药</text>
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