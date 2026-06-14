export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#2D1255] flex flex-col justify-center px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#652D90] rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#9B59B6] rounded-full blur-3xl opacity-10 pointer-events-none" />

      {/* Section counter */}
      <div className="absolute top-8 right-12 lg:right-24 text-purple-300/40 text-xs font-mono">
        01 / 05
      </div>

      <div className="relative max-w-3xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          DTP 行业认知
          <br />
          <span className="text-[#E8A020]">数据分析师视角</span>
        </h1>

        <p className="text-purple-200/70 text-lg max-w-md leading-relaxed mb-14">
          从政策驱动到患者可及性，从商业模式到岗位价值——一位数据分析师的行业认知梳理。
        </p>

        {/* Quick stats */}
        <div className="flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-purple-300/50 text-xs mt-1">个分析维度</div>
          </div>
          <div className="w-px h-10 bg-purple-700" />
          <div>
            <div className="text-3xl font-bold text-[#E8A020]">
              872<span className="text-lg">亿</span>
            </div>
            <div className="text-purple-300/50 text-xs mt-1">市场规模（2024）</div>
          </div>
          <div className="w-px h-10 bg-purple-700" />
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-purple-300/50 text-xs mt-1">关键利益方 · 医生 / 患者 / 医保</div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-6 right-10 lg:right-24 text-xs font-medium tracking-widest text-white/15 pointer-events-none select-none">
        Freya Hu
      </span>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-400/50 text-xs">
        <span>向下探索</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-400/50 to-transparent" />
      </div>
    </section>
  );
}