import { memberships, personalInfo } from "../data/portfolio";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useStrings } from "../hooks/useStrings";

export default function Memberships() {
  const s = useStrings("memberships");

  const socials = [
    { label: s.socials.linkedin,  icon: Linkedin,  href: personalInfo.linkedin },
    { label: s.socials.github,    icon: Github,    href: personalInfo.github },
    { label: s.socials.instagram, icon: Instagram, href: personalInfo.instagram },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Memberships */}
      <div>
        <h2 className="text-xs font-semibold tx-muted uppercase tracking-wider mb-3">
          {s.heading}
        </h2>
        <div className="space-y-2">
          {memberships.map((org) => (
            <div key={org} className="flex items-start gap-2">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-text-faint)] shrink-0" />
              <p className="text-xs tx-secondary leading-snug">{org}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-xs font-semibold tx-muted uppercase tracking-wider mb-3">
          {s.socialHeading}
        </h2>
        <div className="space-y-2">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-muted flex items-center gap-2.5 text-xs transition-colors"
            >
              <Icon size={13} className="shrink-0" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
