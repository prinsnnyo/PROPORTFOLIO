import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-top fixed bottom-6 right-6 z-50 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp size={15} />
    </button>
  );
}
