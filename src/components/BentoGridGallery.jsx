// src/components/BentoGridGallery.jsx
export default function BentoGridGallery({ images = [] }) {
  // Estilo de grid bento: define os tamanhos dos blocos automaticamente
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[220px] mt-10">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`relative rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center
            ${idx % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
          `}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
