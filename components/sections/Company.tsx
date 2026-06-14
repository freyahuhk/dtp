export default function Company() {
  const steps = [
    {
      text: <>晖致的产品大部分是<strong className="text-slate-900">「过专利期原研药」</strong></>,
      variant: "default" as const,
    },
    {
      text: <>集采中，面对国产仿制药的低价竞争</>,
      variant: "default" as const,
    },
    {
      text: <>部分品种集采落标 <span className="text-[#652D90] mx-1 font-medium">→</span> 院内份额受冲击，但成熟品牌仍有稳固的患者基础和品牌心智</>,
      variant: "default" as const,
    },
    {
      text: (
        <>
          主动经营院外存量的<strong>第二增长曲线</strong>{" "}
          <span className="text-[#652D90] mx-1 font-medium">→</span>
          DTP 药房 + 电商承接长期续方
          <span className="text-slate-400 text-xs ml-2">（京东健康 / 阿里健康 / 美团买药）</span>
        </>
      ),
      variant: "highlight" as const,
    },
  ];

  return (
    <section
      id="company"
      className="min-h-screen bg-slate-50 flex flex-col justify-center px-12 lg:px-24 py-24 relative"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#652D90] bg-[#F5EDF9] px-3 py-1.5 rounded-full tracking-wider">
            04 · 晖致 DTP
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          晖致的 DTP 布局
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-10 leading-relaxed">
          DTP 不只是集采压力下的"退路"，更是晖致
          <strong className="text-slate-800">主动经营院外存量、直达慢病患者的第二增长曲线</strong>
          。
        </p>

        {/* Causal chain */}
        <div className="max-w-lg mx-auto mb-10">
          {steps.map((step, i) => (
            <div key={i}>
              <div
                className={`rounded-2xl px-6 py-5 text-sm leading-relaxed text-center ${
                  step.variant === "highlight"
                    ? "bg-[#F5EDF9] border border-[#652D90]/25 font-medium text-[#652D90]"
                    : "bg-white border border-slate-200 text-slate-700"
                }`}
              >
                {step.text}
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-6 bg-[#652D90]/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hypothesis callout */}
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5 shrink-0">🔍</span>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-2">
                基于公开资料的推测
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                晖致产品以<strong>过专利期原研药</strong>为主（如立普妥、络活喜），这类药多是需长期服用的慢病药，单价不高但疗程很长。与高值特药不同——特药的命门是<em>可负担</em>，而慢病药患者买得起、却容易中途断药。由此推测晖致
                DTP 的核心挑战，不在可负担，而在
                <strong>慢病患者的院外长期续方和依从性管理</strong>。
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-6 right-10 lg:right-24 text-xs font-medium tracking-widest text-black/10 pointer-events-none select-none">
        Freya Hu
      </span>
    </section>
  );
}