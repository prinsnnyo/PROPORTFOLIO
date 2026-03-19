import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Memberships from "./components/Memberships";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen pg-bg-subtle">

      {/* ── Hero ── */}
      <Hero />

      {/* ── Two-column body ── */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">

            <About />

            <div className="border-t divider pt-6"><TechStack /></div>
            <div className="border-t divider pt-6"><Projects /></div>
            <div className="border-t divider pt-6"><Certifications /></div>
            <div className="border-t divider pt-6"><Memberships /></div>
            <div className="border-t divider pt-6"><Gallery /></div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-6 md:border-l bd md:pl-8">
            <Experience />
            <div className="border-t divider pt-6"><Testimonials /></div>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
