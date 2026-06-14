type Item = { title: string; desc: string; data?: string };

const ADVANTAGES: Item[] = [
  {
    title: "提高患者用药可及性",
    desc: "消除地理和时间限制，患者在院外也能获取所需药品",
  },
  {
    title: "改善治疗依从性",
    desc: "个性化配送和患者支持计划帮助患者更好地遵从医嘱",
    data: "可衡量：疗程完成率、断药召回率",
  },
  {
    title: "降低医疗成本",
    desc: "通过提高依从性、减少不必要住院，降低整体医疗支出",
  },
  {
    title: "增强患者参与度",
    desc: "鼓励患者积极参与治疗过程，提升自我管理能力",
  },
];

const CHALLENGES: Item[] = [
  {
    title: "数据隐私与安全",
    desc: "收集大量患者数据，必须确保隐私合规和数据安全",
    data: "对 BI 意味着：数据合规约束下的分析方法",
  },
  {
    title: "监管合规性",
    desc: "需遵守药品配送许可证、处方药管理等各地政策法规",
  },
  {
    title: "技术基础设施",
    desc: "依赖远程医疗平台、药品追踪系统等技术体系的稳定性",
  },
  {
    title: "患者接受度",
    desc: "部分患者仍偏好传统药房服务，需要主动引导和教育",
  },
];

export default function AdvSection() {
  return (
    <section
      id="adv-challenge"
      className="min-h-screen bg-white flex flex-col justify-center px-12 lg:px-24 py-24 relative"
    >
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-[#652D90] bg-[#F5EDF9] px-3 py-1.5 rounded-full tracking-wider">
            03 · DTP 特性
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
          DTP 的优势与挑战
        </h2>
        <div className="w-12 h-0.5 bg-[#E8A020] mb-8" />

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-12 leading-relaxed">
          DTP 模式在提升患者服务能力的同时，也面临来自合规、技术与患者教育的多重压力。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Advantages */}
          <div>
            <p className="text-xs font-semibold text-emerald-600 mb-5 uppercase tracking-wider">
              ✓ 优势
            </p>
            <ul className="space-y-5">
              {ADVANTAGES.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100"
                >
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                    {item.data && (
                      <p className="mt-2 text-xs font-medium text-emerald-700 bg-emerald-100/60 rounded px-2 py-1 inline-block">
                        {item.data}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <p className="text-xs font-semibold text-amber-600 mb-5 uppercase tracking-wider">
              ! 挑战
            </p>
            <ul className="space-y-5">
              {CHALLENGES.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100"
                >
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                    {item.data && (
                      <p className="mt-2 text-xs font-medium text-amber-700 bg-amber-100/60 rounded px-2 py-1 inline-block">
                        {item.data}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span className="absolute bottom-6 right-10 lg:right-24 text-xs font-medium tracking-widest text-black/10 pointer-events-none select-none">
        Freya Hu
      </span>
    </section>
  );
}