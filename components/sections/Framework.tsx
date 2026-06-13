const FRAMEWORK_ROWS = [
  {
    dim: "可获得",
    icon: "📋",
    meaning: "处方可获得",
    desc: "多方渠道来源处方，患者才能到 DTP 药房取药",
    metrics: ["多方渠道量", "来源结构", "院源多渠道比"],
    color: "purple" as const,
  },
  {
    dim: "可负担",
    icon: "💳",
    meaning: "双通道可刷",
    desc: "医保资质覆盖到位，患者的账单才真的付得起",
    metrics: ["双通道资质覆盖", "报销比", "自费/医保结构"],
    color: "gold" as const,
  },
  {
    dim: "可触达",
    icon: "🤝",
    meaning: "服务可达",
    desc: "续方、随访、依从性管理全链路覆盖",
    metrics: ["复购率", "用药完成率", "随访触达率", "依从性"],
    color: "emerald" as const,
  },
];

const COLOR_MAP = {
  purple: {
    bg: "bg-[#F5EDF9]",
    border: "border-purple-100",
    badge: "bg-[#652D90] text-white",
    tag: "bg-white border border-purple-200 text-[#652D90]",
  },
  gold: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    badge: "bg-[#E8A020] text-white",
    tag: "bg-white border border-amber-200 text-amber-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "bg-emerald-600 text-white",
    tag: "bg-white border border-emerald-200 text-emerald-600",
  },
};

export default function Framework() {
  return (
    <section
      id="framework"
      className="min-h-screen bg-white flex flex-col justify-center px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#652D90] bg-[#F5EDF9] px-3 py-1.5 rounded-full tracking-wider">
            03 · 分析框架
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          DTP "患者可及性"框架
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-12 leading-relaxed">
          GMV 只是结果，底层驱动是
          <strong className="text-slate-800">"患者可及性"</strong>
          ——可拆成三条可量化的线，分别找对应的核心指标。
        </p>

        {/* Framework rows */}
        <div className="space-y-4 mb-12">
          {FRAMEWORK_ROWS.map((row) => {
            const c = COLOR_MAP[row.color];
            return (
              <div
                key={row.dim}
                className={`rounded-xl p-6 border ${c.bg} ${c.border}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-center gap-3 lg:w-32 shrink-0">
                    <span className="text-2xl">{row.icon}</span>
                    <span
                      className={`text-sm font-bold px-2.5 py-1 rounded-md ${c.badge}`}
                    >
                      {row.dim}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 mb-1">
                      {row.meaning}
                    </p>
                    <p className="text-slate-500 text-sm mb-3">{row.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {row.metrics.map((m) => (
                        <span
                          key={m}
                          className={`text-xs px-2 py-0.5 rounded ${c.tag}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key insight */}
        <div className="bg-[#F5EDF9] border border-purple-200 rounded-xl p-6">
          <p className="text-xs font-semibold text-[#652D90] mb-3 tracking-wider uppercase">
            关键洞察
          </p>
          <p className="text-slate-700 leading-relaxed">
            普通零售的可及性是"
            <strong className="text-slate-900">药—钱—店</strong>
            "的问题；DTP 的可及性是"
            <strong className="text-[#652D90]">处方—医保资质—患者管理</strong>
            "的问题。
          </p>
        </div>
      </div>
    </section>
  );
}