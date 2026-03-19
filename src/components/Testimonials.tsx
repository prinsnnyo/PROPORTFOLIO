import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

export default function Testimonials() {
  const s = useStrings("testimonials");
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <div id="testimonials">
      <h2 className="text-sm font-semibold tx-primary mb-3">{s.heading}</h2>

      <div className="card border rounded-xl p-4">
        <p className="text-xs tx-secondary leading-relaxed mb-4">
          "{t.text}"
        </p>
        <div className="flex items-center gap-2.5 pb-3 border-b divider-subtle">
          <div className="avatar w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
            {t.initials}
          </div>
          <div>
            <p className="text-xs font-semibold tx-primary">{t.name}</p>
            <p className="text-[11px] tx-muted">{t.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <div className="flex gap-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === active ? "dot-work" : "dot-milestone"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="card border w-6 h-6 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="card border w-6 h-6 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
