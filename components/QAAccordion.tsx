"use client";

import { useState } from "react";

interface QAItem {
  q: string;
  a: string;
}

export default function QAAccordion({ items }: { items: QAItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span className="text-sm text-slate-600 font-medium">{item.q}</span>
            <span
              className={`text-slate-400 text-xl leading-none transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-4 py-3 text-sm text-slate-600 bg-blue-50/50 border-t border-slate-100 leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}