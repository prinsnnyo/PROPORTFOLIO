import { Calendar, Mail, Trophy, BadgeCheck } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  const s = useStrings("hero");

  return (
    <section id="hero" className="hero-section border-b bd">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-start gap-5">

          {/* Profile photo */}
          <div className="shrink-0">
            <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border bd photo-placeholder">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="photo-placeholder w-full h-full flex items-center justify-center text-3xl font-bold">
                  {personalInfo.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Top row: name + award badge + theme toggle */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tx-primary tracking-tight">
                  {personalInfo.name}
                </h1>
                {personalInfo.verified && (
                  <BadgeCheck size={18} className="text-blue-500 shrink-0" />
                )}
              </div>

              <div className="flex items-center gap-2">
                {personalInfo.award && (
                  <div className="badge flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    <Trophy size={11} />
                    {personalInfo.award}
                  </div>
                )}
                <ThemeToggle />
              </div>
            </div>

            {/* Location */}
            <p className="text-xs tx-muted flex items-center gap-1 mb-1">
              📍 {personalInfo.location}
            </p>

            {/* Role title */}
            <p className="text-sm tx-secondary mb-4">{personalInfo.title}</p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-2">
              <a
                href={personalInfo.calendly ?? "#contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                <Calendar size={12} /> {s.scheduleCall}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-secondary border inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                <Mail size={12} /> {s.sendEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
