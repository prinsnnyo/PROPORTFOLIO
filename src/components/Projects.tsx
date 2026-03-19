import { useState } from "react";
import { ExternalLink, ArrowRight, X } from "lucide-react";
import { projects } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

const PREVIEW_COUNT = 4;

export default function Projects() {
  const s = useStrings("projects");
  const [open, setOpen] = useState(false);

  const preview = projects.slice(0, PREVIEW_COUNT);

  const ProjectCard = ({ project }: { project: typeof projects[number] }) => (
    <a
      key={project.name}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card group border rounded-xl p-4 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-xl">{project.emoji}</span>
        <ExternalLink size={12} className="tx-faint group-hover:tx-accent transition-colors mt-0.5" />
      </div>
      <p className="text-xs font-semibold tx-primary mb-0.5">{project.name}</p>
      <p className="text-xs tx-muted leading-snug mb-2">{project.tagline}</p>
      <p className="text-[10px] tx-faint">{project.url}</p>
    </a>
  );

  return (
    <>
      <div id="projects">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tx-primary">{s.heading}</h2>
          {projects.length > PREVIEW_COUNT && (
            <button
              onClick={() => setOpen(true)}
              className="link-muted text-xs flex items-center gap-1 transition-colors hover:underline"
            >
              {s.viewAll} <ArrowRight size={11} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {preview.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
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

            {/* All projects */}
            <div className="px-6 py-5 grid grid-cols-2 gap-2.5">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
