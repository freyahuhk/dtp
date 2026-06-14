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
      className="min-h-screen bg-white flex flex-col justify-center px-12 lg:px-24 py-24"
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
          <svg
            viewBox="0 0 600 580"
            className="w-full max-w-2xl mx-auto"
            style={{ fontFamily: "inherit" }}
          >
            <defs>
              <marker
                id="ap"
                markerWidth="7"
                markerHeight="7"
                refX="5.5"
                refY="3.5"
                orient="auto"
              >
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="#652D90" fillOpacity="0.6" />
              </marker>
              <marker
                id="ag"
                markerWidth="7"
                markerHeight="7"
                refX="5.5"
                refY="3.5"
                orient="auto"
              >
                <path d="M0,0.5 L0,6.5 L7,3.5 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* ── LINES ── */}
            {/* 一致性评价 → 集采 */}
            <line x1="300" y1="72" x2="300" y2="118" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* 集采 → 药占比 (left fork) */}
            <polyline points="300,192 300,210 130,210 130,228" fill="none" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* 集采 → 原研药 (right fork) */}
            <polyline points="300,192 300,210 470,210 470,228" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ag)" />

            {/* Fork junction dot */}
            <circle cx="300" cy="210" r="3" fill="#652D90" fillOpacity="0.4" />

            {/* 药占比 → 医院主动外推 (横向连线) */}
            <polyline points="240,263 300,263 300,333 360,333" fill="none" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* 药占比 → 双通道 */}
            <line x1="130" y1="298" x2="130" y2="328" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* 原研药 → 医院外推 */}
            <line x1="470" y1="278" x2="470" y2="308" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ag)" />

            {/* 双通道 → 院外报销 */}
            <line x1="130" y1="398" x2="130" y2="428" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* Converge: 院外报销 bottom → right along bar */}
            <polyline points="130,468 130,493 470,493" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Converge: 医院外推 bottom → down to bar */}
            <line x1="470" y1="358" x2="470" y2="493" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Junction dot at converge */}
            <circle cx="300" cy="493" r="3" fill="#652D90" fillOpacity="0.4" />

            {/* Bar center → DTP */}
            <line x1="300" y1="493" x2="300" y2="510" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#ap)" />

            {/* ── BOXES ── */}
            {/* 一致性评价 */}
            <rect x="175" y="10" width="250" height="62" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="300" y="36" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">一致性评价</text>
            <text x="300" y="56" textAnchor="middle" fontSize="11" fill="#94a3b8">仿制药必须证明和原研药疗效一致</text>

            {/* 集采 */}
            <rect x="175" y="120" width="250" height="72" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="300" y="148" textAnchor="middle" fontSize="13" fontWeight="600" fill="#652D90">集采</text>
            <text x="300" y="167" textAnchor="middle" fontSize="11" fill="#652D90" fillOpacity="0.75">通过一致性评价的仿制药</text>
            <text x="300" y="183" textAnchor="middle" fontSize="11" fill="#652D90" fillOpacity="0.75">参与国家团购竞标</text>

            {/* 药占比考核 */}
            <rect x="20" y="228" width="220" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="130" y="254" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">药占比考核</text>
            <text x="130" y="274" textAnchor="middle" fontSize="11" fill="#94a3b8">医院药品收入占比</text>
            <text x="130" y="290" textAnchor="middle" fontSize="11" fill="#94a3b8">不能超 30%</text>

            {/* 原研药院内被替代 */}
            <rect x="360" y="228" width="220" height="50" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="470" y="250" textAnchor="middle" fontSize="12" fontWeight="500" fill="#64748b">原研药院内被替代</text>
            <text x="470" y="268" textAnchor="middle" fontSize="11" fill="#94a3b8">集采后院内仿制药替换原研药</text>

            {/* 双通道政策 */}
            <rect x="20" y="328" width="220" height="70" rx="8" fill="#F5EDF9" stroke="#652D90" strokeWidth="1.5" strokeOpacity="0.45" />
            <text x="130" y="354" textAnchor="middle" fontSize="13" fontWeight="600" fill="#652D90">双通道政策</text>
            <text x="130" y="374" textAnchor="middle" fontSize="11" fill="#652D90" fillOpacity="0.75">医保谈判药品可以在</text>
            <text x="130" y="390" textAnchor="middle" fontSize="11" fill="#652D90" fillOpacity="0.75">院外 DTP 药房报销</text>

            {/* 医院主动外推高价药 */}
            <rect x="360" y="308" width="220" height="50" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="470" y="330" textAnchor="middle" fontSize="12" fontWeight="500" fill="#64748b">医院主动外推高价药</text>
            <text x="470" y="348" textAnchor="middle" fontSize="11" fill="#94a3b8">高价原研药流出院外渠道</text>

            {/* 院外也能医保报销 */}
            <rect x="20" y="428" width="220" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="130" y="453" textAnchor="middle" fontSize="12" fontWeight="500" fill="#64748b">院外也能医保报销</text>

            {/* DTP渠道崛起 */}
            <rect x="175" y="510" width="250" height="58" rx="8" fill="#652D90" />
            <text x="300" y="537" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">DTP 渠道崛起</text>
            <text x="300" y="557" textAnchor="middle" fontSize="11" fill="#e9d5ff">院外承接处方，患者院外刷医保取药</text>
          </svg>
        </div>

        <QAAccordion items={QA_ITEMS} />
      </div>
    </section>
  );
}