const DIRECTIONS = [
  {
    num: "01",
    title: "打通跨渠道数据",
    desc: "通过数据治理提升数据质量，整合院内、院外、DTP、线上处方等各渠道数据，建立统一的数据底座。",
  },
  {
    num: "02",
    title: "搭建指标体系",
    desc: "搭建 DTP 渠道和患者全生命周期的数据指标体系，从进方、取药、续方到依从性，覆盖患者完整路径。",
  },
  {
    num: "03",
    title: "支持品牌策略决策",
    desc: "监控各品牌在各渠道的生意表现，用数据分析回答：该在哪个渠道加投入？哪些药房需要重点运营？",
  },
];

const METHODOLOGY = [
  {
    step: "①",
    title: "深挖现有数据",
    desc: "各方渠道都有自采数据，先挖透，再判断缺什么、缺在哪一层",
  },
  {
    step: "②",
    title: "估算补粒度",
    desc: "市场份额、竞品、患者流向——结构性假设 + 外部校验，还原全貌",
  },
  {
    step: "③",
    title: "多方交叉验证",
    desc: "社媒/搜索数据对比 + 一线 BD 反馈，让估算结论有可信度",
  },
];

export default function BIValue() {
  return (
    <section
      id="bi-value"
      className="min-h-screen bg-[#2D1255] flex flex-col justify-center px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#E8A020] bg-[#E8A020]/20 px-3 py-1.5 rounded-full tracking-wider">
            05 · 岗位认知
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          BI 在 DTP 业务中的价值
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-purple-200/70 border-l-4 border-[#E8A020] pl-5 mb-12 leading-relaxed">
          DTP 作为晖致的新业务，数据分析的价值是驱动它
          <strong className="text-white">从 0 到 1 跑通</strong>
          ——不只是出报表，而是建体系、跑逻辑、定方向。
        </p>

        {/* 3 directions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {DIRECTIONS.map((d) => (
            <div
              key={d.num}
              className="bg-[#3D1A6A] rounded-xl p-6 border border-purple-800/50"
            >
              <div className="text-[#E8A020] font-bold text-sm mb-4 font-mono">
                方向 {d.num}
              </div>
              <h3 className="font-semibold text-white mb-3">{d.title}</h3>
              <p className="text-purple-200/60 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-[#3D1A6A] rounded-xl p-6 border border-purple-800/50">
          <p className="text-xs font-semibold text-purple-400/50 mb-5 tracking-wider uppercase">
            面对"数据缺失"怎么办
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.step} className="flex items-start gap-3">
                <span className="text-[#E8A020] font-mono text-sm shrink-0 mt-0.5">
                  {m.step}
                </span>
                <div>
                  <p className="text-white text-sm font-medium mb-1">
                    {m.title}
                  </p>
                  <p className="text-purple-300/50 text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-purple-800/30 flex items-center justify-between">
          <p className="text-purple-400/40 text-sm">
            数据分析视角的行业认知梳理 · 2026
          </p>
          <p className="text-purple-400/40 text-sm">Freya Hu</p>
        </div>
      </div>
    </section>
  );
}