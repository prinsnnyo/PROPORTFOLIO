import { personalInfo } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

export default function Footer() {
  const s = useStrings("footer");

  return (
    <footer className="surface border-t bd py-5">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tx-faint text-center">
          © {new Date().getFullYear()} {personalInfo.name}. {s.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
