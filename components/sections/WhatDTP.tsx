import QAAccordion from "@/components/QAAccordion";

const QA_ITEMS = [
  {
    q: "DTP 和普通药店本质区别是什么？",
    a: "普通药店卖 OTC，患者自己会买会用；DTP 专注专方药/高值药，需要医生开处方、有专业药事服务，还要管理患者长期续方和用药依从性。缺了任何一环，这个商业模式就跑不通。",
  },
  {
    q: "为什么说「三人不离」很重要？",
    a: "关键在收费链路的分离：用药的（患者）、开方的（医生）、付费的（医保/商保）三方分开。这意味着 DTP 必须对三方各自建立服务触点和信任——这是纯电商平台无法复制的核心壁垒。",
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
          DTP 是部什么链条？
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-12 leading-relaxed">
          DTP 本质不是"卖药"，是
          <strong className="text-slate-800">承接多方 + 管理患者长期用药</strong>
          。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {/* What */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-[#F5EDF9] rounded-lg flex items-center justify-center mb-4 text-xl">
              💊
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">卖什么</h3>
            <p className="text-slate-700 text-sm font-medium mb-2">
              专方药 / 高值药 / 长期慢病用药
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              不是 OTC，需医生处方；单价高、用药周期长、患者无法自行判断用量
            </p>
          </div>

          {/* Who */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-[#F5EDF9] rounded-lg flex items-center justify-center mb-4 text-xl">
              🔗
            </div>
            <h3 className="font-semibold text-slate-900 mb-3">谁在其中</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#652D90] shrink-0" />
                <span className="text-slate-600">
                  <strong>开方的</strong>：医生
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] shrink-0" />
                <span className="text-slate-600">
                  <strong>用药的</strong>：患者
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-600">
                  <strong>付费的</strong>：医保 / 自费
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-3">
              三人不离，与纯电商最大的本质区别
            </p>
          </div>

          {/* Moat */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 bg-[#F5EDF9] rounded-lg flex items-center justify-center mb-4 text-xl">
              🏗️
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">壁垒在哪</h3>
            <p className="text-slate-700 text-sm mb-3">
              不是药本身，是
              <strong>专业药事服务 + 患者全生命周期管理</strong>
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              普通药房没有这套能力——管续方、管依从性、管随访，这才是 DTP 真正难以复制的地方
            </p>
          </div>
        </div>

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