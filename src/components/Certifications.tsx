import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { certifications } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

const PAGE_SIZE = 3;

export default function Certifications() {
  const s = useStrings("certifications");
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(certifications.length / PAGE_SIZE);
  const visible = certifications.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div id="certifications">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] tx-faint">
              {page + 1} / {totalPages}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="card border w-6 h-6 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
                aria-label="Previous page"
              >
                <ChevronLeft size={12} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="card border w-6 h-6 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
                aria-label="Next page"
              >
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-1.5">
        {visible.map((cert) => (
          <div
            key={cert.name}
            className="list-row border rounded-lg px-3 py-2.5 flex items-center justify-between transition-colors"
          >
            <p className="text-xs font-medium tx-primary">{cert.name}</p>
            <p className="text-xs tx-faint shrink-0 ml-3">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
