// components/LogoGallery.jsx

export default function LogoGallery({ logos = [] }) {
  if (!logos.length) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 my-16">
      <h2 className="text-xl font-bold mb-6">Logos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-black p-2 aspect-square justify-center text-center text-xs font-mono"
          >
            <img
              src={logo.src}
              alt={logo.label}
              className="object-contain h-40 mb-4"
              loading="lazy"
            />
            <span>{logo.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
