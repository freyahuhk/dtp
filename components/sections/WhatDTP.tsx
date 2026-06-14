
const TABLE_ROWS = [
  {
    dim: "谁决定买什么",
    rx: "医生",
    otc: "患者自己",
  },
  {
    dim: "怎么卖",
    rx: "医药代表 → 医生 → 处方",
    otc: "品牌广告 → 消费者 → 下单",
  },
  {
    dim: "在哪卖",
    rx: "医院 + DTP 药房",
    otc: "零售药店 + 电商",
  },
  {
    dim: "谁付钱",
    rx: "医保 + 自费",
    otc: "主要自费",
  },
  {
    dim: "受什么影响最大",
    rx: "政策（集采 / 医保）",
    otc: "市场竞争（品牌 / 价格）",
  },
  {
    dim: "分析重点",
    rx: "处方量、医生覆盖、患者依从性",
    otc: "GMV、转化率、复购率",
    highlight: true,
  },
];

export default function WhatDTP() {
  return (
    <section
      id="what-dtp"
      className="min-h-screen bg-slate-50 flex flex-col justify-center px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#652D90] bg-[#F5EDF9] px-3 py-1.5 rounded-full tracking-wider">
            02 · 商业模式
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          DTP 的链条是什么？
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-10 leading-relaxed">
          DTP 本质不是"卖药"，是
          <strong className="text-slate-800">处方药的院外延伸</strong>
          ——它的运转逻辑跟电商完全不同。
        </p>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 text-slate-400 font-medium bg-slate-50 w-36 border-b border-slate-100" />
                <th className="px-5 py-4 border-b border-[#652D90]/20 bg-[#F5EDF9] text-center w-1/2">
                  <div className="text-[#652D90] font-bold text-sm">处方药（Rx）</div>
                  <div className="text-[#652D90]/60 text-xs font-normal mt-0.5">← DTP 在此</div>
                </th>
                <th className="px-5 py-4 border-b border-slate-100 bg-slate-50 text-center w-1/2">
                  <div className="text-slate-400 font-medium text-sm">非处方药（OTC）</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr
                  key={row.dim}
                  className={i < TABLE_ROWS.length - 1 ? "border-b border-slate-100" : ""}
                >
                  <td className="px-5 py-4 text-slate-400 text-xs font-medium whitespace-nowrap">
                    {row.dim}
                  </td>
                  <td
                    className={`px-5 py-4 text-center ${
                      row.highlight
                        ? "bg-[#F5EDF9] text-[#652D90] font-semibold"
                        : "bg-[#faf8fd] text-slate-700"
                    }`}
                  >
                    {row.rx}
                  </td>
                  <td className="px-5 py-4 text-center text-slate-400">
                    {row.otc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}