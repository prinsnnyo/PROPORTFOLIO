import { experiences } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

const dotClass: Record<string, string> = {
  work:      "dot-work",
  education: "dot-education",
  milestone: "dot-milestone",
};

export default function Experience() {
  const s = useStrings("experience");

  return (
    <div id="experience">
      <h2 className="text-sm font-semibold tx-primary mb-3">{s.heading}</h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-2 border-b divider-subtle last:border-0"
          >
            <div className={`mt-1.5 w-2 h-2 rounded-sm shrink-0 ${dotClass[exp.type] ?? "dot-education"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tx-primary leading-snug">{exp.role}</p>
              <p className="text-[11px] tx-muted mt-0.5 leading-snug">{exp.company}</p>
            </div>
            <span className="text-[11px] tx-faint whitespace-nowrap shrink-0 mt-0.5">
              {exp.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
