import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { techStack } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

// Categories shown in preview and how many items each shows
const PREVIEW_CATEGORIES = ["Frontend", "Backend", "AI & Machine Learning"];
const PREVIEW_ITEMS_PER_CATEGORY = 5;

export default function TechStack() {
  const s = useStrings("techStack");
  const [open, setOpen] = useState(false);

  const previewGroups = techStack.filter((g) =>
    PREVIEW_CATEGORIES.includes(g.category)
  );

  return (
    <>
      <div id="stack">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
          <button
            onClick={() => setOpen(true)}
            className="link-muted text-xs flex items-center gap-1 transition-colors hover:underline"
          >
            {s.viewAll} <ArrowRight size={11} />
          </button>
        </div>

        <div className="space-y-2.5">
          {previewGroups.map((group) => {
            const visible = group.items.slice(0, PREVIEW_ITEMS_PER_CATEGORY);
            const remaining = group.items.length - PREVIEW_ITEMS_PER_CATEGORY;
            return (
              <div key={group.category}>
                <p className="text-xs font-medium tx-muted mb-1.5">{group.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {visible.map((item) => (
                    <span
                      key={item}
                      className="tag border px-2.5 py-1 rounded-md text-xs transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                  {remaining > 0 && (
                    <button
                      onClick={() => setOpen(true)}
                      className="tag border px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer tx-muted"
                    >
                      +{remaining} more
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── View All Modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="surface rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bd sticky top-0 surface z-10">
              <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
              <button
                onClick={() => setOpen(false)}
                className="theme-toggle w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* All categories */}
            <div className="px-6 py-5 space-y-5">
              {techStack.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold tx-primary mb-2">{group.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="tag border px-2.5 py-1 rounded-md text-xs transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
