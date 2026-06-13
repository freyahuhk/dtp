export default function Company() {
  return (
    <section
      id="company"
      className="min-h-screen bg-slate-50 flex flex-col justify-center px-12 lg:px-24 py-24"
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

        <p className="text-lg text-slate-600 border-l-4 border-[#E8A020] pl-5 mb-12 leading-relaxed">
          晖致以精品仿制药为主，DTP 是其院外直达慢病患者、
          <strong className="text-slate-800">沉淀长期用药资产</strong>
          的第二增长曲线。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Company profile */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
              关于晖致
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <p>2020 年由辉瑞普强与迈蓝合并成立</p>
              <p>总部美国，产品行销 165 个市场</p>
              <p>中国 5000+ 员工，总部上海，覆盖 300+ 城市</p>
            </div>
          </div>

          {/* Core products */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
              DTP 核心产品
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#652D90] mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">心脑血管</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    立普妥 · 络活喜
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E8A020] mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">中枢神经</p>
                  <p className="text-slate-500 text-xs mt-0.5">左洛复 · 怡诺思</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-400 leading-relaxed">
                  多为长期慢病用药，续方管理需求天然强烈
                </p>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
              近期表现
            </p>
            <div className="text-center py-4">
              <div className="text-5xl font-bold text-[#652D90] mb-1">+22%</div>
              <div className="text-xs text-slate-500 mb-4">
                2026 Q1 大中华区特药增长
              </div>
              <div className="text-xs text-slate-400 bg-slate-50 rounded-lg p-2.5 leading-relaxed text-left">
                注：此为大中华区特药整体表现，为 DTP 新业务的启动提供了有利的增长背景。
              </div>
            </div>
          </div>
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
                晖致产品以仿制的长期慢病用药为主，所以推测晖致 DTP
                这条线的核心挑战，可能不是高值特药的<em>可负担</em>
                问题，而是
                <strong>慢病患者的院外长期续方和依从性管理</strong>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}