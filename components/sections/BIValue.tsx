"use client";

import { useState } from "react";

const RESULT_METRICS = ["GMV", "收入", "利润率"];
const RESULT_DIMS = ["自费 / 医保", "处方来源（医院 / 科室）"];

const PROCESS_GROUPS = [
  {
    dim: "人",
    items: [
      {
        label: "患者",
        metrics: ["规模", "转化", "客单价", "疗程完成率", "按时复购率", "断药召回率"],
        dims: ["新 / 老 / 断药", "年龄层"],
      },
      {
        label: "医生 / 医院",
        metrics: ["规模", "覆盖率", "订单数", "处方外流量", "院外承接率", "处方来源结构（医院 / 科室）"],
        dims: [],
      },
    ],
  },
  {
    dim: "货",
    items: [
      {
        label: "慢病长处方药",
        metrics: ["规模", "转化", "价值"],
        dims: ["功效", "具体品类", "疗程长短", "价格带", "原研 vs 仿制"],
      },
      {
        label: "供应链",
        metrics: ["库存规模", "平均库存天数", "缺货率 / 断货天数", "动销", "单均价"],
        dims: ["线上", "线下"],
      },
    ],
  },
  {
    dim: "场",
    items: [
      {
        label: "渠道",
        metrics: ["贡献占比", "转化差异"],
        dims: ["线下药房", "线上平台（电商 / O2O）", "城市分级", "区域"],
      },
    ],
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
  const [methodOpen, setMethodOpen] = useState(false);

  return (
    <section
      id="bi-value"
      className="min-h-screen bg-[#2D1255] flex flex-col justify-center px-12 lg:px-24 py-24 relative"
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

        <p className="text-lg text-purple-200/70 border-l-4 border-[#E8A020] pl-5 mb-10 leading-relaxed">
          DTP 作为晖致的新业务，数据分析的价值是驱动它
          <strong className="text-white">从 0 到 1 跑通</strong>
          ——建设数据标准，搭建数据指标体系，支持品牌在不同渠道的策略决策。
        </p>

        {/* Result metrics */}
        <div className="bg-[#3D1A6A] rounded-xl p-5 border border-purple-800/50 mb-4">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[#E8A020] text-xs font-mono font-semibold shrink-0">
              结果指标
            </span>
            <div className="flex gap-2 flex-wrap">
              {RESULT_METRICS.map((m) => (
                <span
                  key={m}
                  className="text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-purple-300/40 text-xs">拆分维度</span>
            {RESULT_DIMS.map((d) => (
              <span key={d} className="text-purple-200/50 text-xs">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Process metrics */}
        <div className="mb-10">
          <span className="text-[#E8A020] text-xs font-mono font-semibold mb-4 block">
            过程指标 · 人货场
          </span>
          <div className="flex flex-col gap-3">
            {PROCESS_GROUPS.map((group) => (
              <div key={group.dim} className="flex items-stretch gap-3">
                {/* Group label */}
                <div className="flex items-center justify-center w-8 shrink-0">
                  <span className="text-[#E8A020] font-bold text-base">
                    {group.dim}
                  </span>
                </div>
                {/* Cards */}
                <div className="flex flex-1 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex-1 bg-[#3D1A6A] rounded-xl p-4 border border-purple-800/50"
                    >
                      <p className="text-white text-sm font-medium mb-3">
                        {item.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.metrics.map((m) => (
                          <span
                            key={m}
                            className="text-xs text-white/70 bg-white/10 px-1.5 py-0.5 rounded"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                      {item.dims.length > 0 && (
                        <div className="pt-2 border-t border-purple-800/40 flex flex-wrap gap-1.5">
                          {item.dims.map((d) => (
                            <span key={d} className="text-purple-300/40 text-xs">
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setMethodOpen(!methodOpen)}
            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="text-xs font-semibold text-purple-400/50 tracking-wider uppercase">
              面对"数据缺失"怎么办
            </span>
            <span
              className={`text-purple-400/50 text-xl leading-none transition-transform duration-200 ${
                methodOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {methodOpen && (
            <div className="px-6 pb-6 bg-white/5 border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-5">
                {METHODOLOGY.map((m) => (
                  <div key={m.step} className="flex items-start gap-3">
                    <span className="text-[#E8A020] font-mono text-sm shrink-0 mt-0.5">
                      {m.step}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium mb-1">{m.title}</p>
                      <p className="text-purple-300/50 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <span className="absolute bottom-6 right-10 lg:right-24 text-xs font-medium tracking-widest text-white/15 pointer-events-none select-none">
          Freya Hu
        </span>

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