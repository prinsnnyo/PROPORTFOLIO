import { certifications } from "../data/portfolio";
import { ArrowRight } from "lucide-react";
import { useStrings } from "../hooks/useStrings";

export default function Certifications() {
  const s = useStrings("certifications");

  return (
    <div id="certifications">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
        <a href="#" className="link-muted text-xs flex items-center gap-1 transition-colors">
          {s.viewAll} <ArrowRight size={11} />
        </a>
      </div>

      <div className="space-y-1.5">
        {certifications.map((cert) => (
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
