import { gallery } from "../data/portfolio";
import { useStrings } from "../hooks/useStrings";

export default function Gallery() {
  const s = useStrings("gallery");

  if (gallery.length === 0) return null;

  return (
    <div id="gallery">
      <h2 className="text-sm font-semibold tx-primary mb-3">{s.heading}</h2>
      <div className="grid grid-cols-3 gap-2">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl overflow-hidden border bd pg-bg-muted"
          >
            <img
              src={src}
              alt={`${s.altPrefix} ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
