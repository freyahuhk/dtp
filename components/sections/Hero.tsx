export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-slate-900 flex flex-col justify-center px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-5 pointer-events-none" />

      {/* Section counter */}
      <div className="absolute top-8 right-12 lg:right-24 text-slate-600 text-xs font-mono">
        01 / 05
      </div>

      <div className="relative max-w-3xl">
        <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8">
          DTP 行业认知 · 数据分析视角
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          以数据视角
          <br />
          梳理 DTP 行业
          <br />
          <span className="text-blue-400">盈利结构与逻辑</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-14">
          从政策驱动到患者可及性，从商业模式到岗位价值——一位数据分析师的行业认知梳理。
        </p>

        {/* Quick stats */}
        <div className="flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-slate-500 text-xs mt-1">个分析维度</div>
          </div>
          <div className="w-px h-10 bg-slate-700" />
          <div>
            <div className="text-3xl font-bold text-blue-400">
              872<span className="text-lg">亿</span>
            </div>
            <div className="text-slate-500 text-xs mt-1">市场规模（2024）</div>
          </div>
          <div className="w-px h-10 bg-slate-700" />
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-slate-500 text-xs mt-1">个关键利益方</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
        <span>向下探索</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}