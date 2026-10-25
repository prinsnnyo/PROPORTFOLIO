import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { certifications } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

const PREVIEW_COUNT = 3;

export default function Certifications() {
  const s = useStrings("certifications");
  const [open, setOpen] = useState(false);

  const preview = certifications.slice(0, PREVIEW_COUNT);

  const CertRow = ({ cert }: { cert: (typeof certifications)[number] }) => (
    <div className="list-row border rounded-lg px-3 py-2.5 flex items-center justify-between transition-colors">
      <p className="text-xs font-medium tx-primary">{cert.name}</p>
      <p className="text-xs tx-faint shrink-0 ml-3">{cert.issuer}</p>
    </div>
  );

  return (
    <>
      <div id="certifications">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
          {certifications.length > PREVIEW_COUNT && (
            <button
              onClick={() => setOpen(true)}
              className="link-muted text-xs flex items-center gap-1 transition-colors hover:underline"
            >
              {s.viewAll} <ArrowRight size={11} />
            </button>
          )}
        </div>

        <div className="space-y-1.5">
          {preview.map((cert) => (
            <CertRow key={cert.name} cert={cert} />
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="surface rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="px-6 py-5 space-y-1.5">
              {certifications.map((cert) => (
                <CertRow key={cert.name} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
