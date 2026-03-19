import { personalInfo } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

export default function About() {
  const s = useStrings("about");

  return (
    <div id="about">
      <h2 className="text-sm font-semibold tx-primary mb-3">{s.heading}</h2>
      <div className="space-y-3">
        {personalInfo.bio.map((para, i) => (
          <p key={i} className="text-sm tx-secondary leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
