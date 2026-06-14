"use client";

import { useState } from "react";

const ADVANTAGES = [
  {
    title: "提高患者用药可及性",
    desc: "消除地理和时间限制，患者在院外也能获取所需药品",
  },
  {
    title: "改善治疗依从性",
    desc: "个性化配送和患者支持计划帮助患者更好地遵从医嘱",
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

const CHALLENGES = [
  {
    title: "数据隐私与安全",
    desc: "收集大量患者数据，必须确保隐私合规和数据安全",
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

export default function AdvChallenge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="text-sm text-slate-600 font-medium">
          DTP 的优势与挑战
        </span>
        <span
          className={`text-slate-400 text-xl leading-none transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-4 py-4 bg-blue-50/50 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Advantages */}
            <div>
              <p className="text-xs font-semibold text-emerald-600 mb-3 uppercase tracking-wider">
                ✓ 优势
              </p>
              <ul className="space-y-3">
                {ADVANTAGES.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-slate-700 text-sm">
                      {item.title}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <p className="text-xs font-semibold text-amber-600 mb-3 uppercase tracking-wider">
                ! 挑战
              </p>
              <ul className="space-y-3">
                {CHALLENGES.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-slate-700 text-sm">
                      {item.title}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}