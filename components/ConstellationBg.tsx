"use client";
import { useEffect, useRef } from "react";

interface StarDef {
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
}

export default function ConstellationBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stars: StarDef[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      dur: Math.random() * 6 + 3,
      delay: Math.random() * 5,
    }));

    el.innerHTML = "";

    // Stars
    stars.forEach((s) => {
      const div = document.createElement("div");
      div.className = "star";
      div.style.cssText = `
        left:${s.x}%;top:${s.y}%;
        width:${s.size}px;height:${s.size}px;
        --dur:${s.dur}s;
        animation-delay:${s.delay}s;
      `;
      el.appendChild(div);
    });

    // SVG constellation lines
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.cssText = "position:absolute;inset:0;opacity:0.04;";

    const sample = stars.filter((_, i) => i % 5 === 0);
    for (let i = 0; i < sample.length - 1; i++) {
      const a = sample[i];
      const b = sample[i + 1];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 25) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${a.x}%`);
        line.setAttribute("y1", `${a.y}%`);
        line.setAttribute("x2", `${b.x}%`);
        line.setAttribute("y2", `${b.y}%`);
        line.setAttribute("stroke", "currentColor");
        line.setAttribute("stroke-width", "0.5");
        svg.appendChild(line);
      }
    }
    el.appendChild(svg);
  }, []);

  return <div ref={ref} className="constellation-bg" aria-hidden="true" />;
}
