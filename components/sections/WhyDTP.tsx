import QAAccordion from "@/components/QAAccordion";

const QA_ITEMS = [
  {
    q: "双通道是什么？",
    a: "医保报销的两个渠道：医院 + 定点零售药店。双通道政策让医保乙类目录内的新药/特药，在院外 DTP 药房也能刷医保报销——这是 DTP 商业模式得以成立的制度基础。",
  },
  {
    q: "为什么医院要把处方外送出去？",
    a: "三重压力叠加：① 药占比考核（医院有药品收入上限）；② 医保控费要求（高值药在院内成本结构不划算）；③ 药品比价制度（同药不同价会被质询）。医院主动外送处方，反而能优化考核指标，也提升了患者用药体验。",
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
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full tracking-wider">
            01 · 宏观背景
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
          为什么会有 DTP？
        </h2>

        <p className="text-lg text-slate-600 border-l-4 border-blue-500 pl-5 mb-12 leading-relaxed">
          DTP 是医药行业在"医药分开 + 多方付款"大趋势下，
          <strong className="text-slate-800">绕开医院、直达患者</strong>
          的院外渠道。
        </p>

        {/* 3 key points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="text-blue-500 font-bold text-sm mb-3 font-mono">
              01
            </div>
            <h3 className="font-semibold text-slate-900 mb-3">政策推力</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              医保控费 + 医疗改革 + 药品比价制度，层层约束让医院对高值药品的院内分销受限，渠道自然向院外迁移。
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="text-blue-500 font-bold text-sm mb-3 font-mono">
              02
            </div>
            <h3 className="font-semibold text-slate-900 mb-3">双通道政策</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              让新药/特药这些医保乙类也能在院外定点药店报销，是 DTP
              崛起的关键制度设计——患者不用必须回医院取药了。
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="text-blue-500 font-bold text-sm mb-3 font-mono">
              03
            </div>
            <h3 className="font-semibold text-slate-900 mb-3">市场规模</h3>
            <div className="flex items-end gap-3 my-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">2019</div>
                <div className="text-2xl font-bold text-slate-500">
                  345<span className="text-sm">亿</span>
                </div>
              </div>
              <div className="flex-1 flex items-center pb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-blue-500" />
                <span className="text-blue-500 text-xs px-1">→</span>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">2024</div>
                <div className="text-2xl font-bold text-blue-600">
                  872<span className="text-sm">亿</span>
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-xs">结构性增长，非周期性</p>
          </div>
        </div>

        {/* Q&A */}
        <div>
          <p className="text-xs text-slate-400 mb-3 font-medium tracking-wider uppercase">
            追问答复
          </p>
          <QAAccordion items={QA_ITEMS} />
        </div>
      </div>
    </section>
  );
}