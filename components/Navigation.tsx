"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "定位" },
  { id: "why-dtp", label: "政策驱动" },
  { id: "what-dtp", label: "商业模式" },
  { id: "framework", label: "可及框架" },
  { id: "company", label: "任为角色" },
  { id: "bi-value", label: "BI 价值" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
      {NAV_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-3 group cursor-pointer"
        >
          <span
            className={`text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              active === id
                ? "text-[#652D90] opacity-100"
                : "text-slate-400 opacity-0 group-hover:opacity-100"
            }`}
          >
            {label}
          </span>
          <div
            className={`rounded-full border-2 transition-all duration-200 ${
              active === id
                ? "w-3 h-3 bg-[#652D90] border-[#652D90]"
                : "w-2.5 h-2.5 bg-transparent border-slate-400 group-hover:border-slate-200"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}