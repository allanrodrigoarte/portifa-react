// src/components/ProjectTemplate.jsx
export default function ProjectTemplate({
  logo,
  logoAlt,
  siteUrl,
  title,
  period,
  summary,
  details,
  images = [],
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* ...cabeçalho e detalhes omitidos, igual ao anterior... */}

      {/* Galeria de Imagens */}
      {images.length > 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`
                border border-black rounded-[6px] shadow-lg bg-white p-2
                flex justify-center items-center
                ${img.wide ? 'md:col-span-2' : ''}
              `}
              style={{ minHeight: 120 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`
                  rounded-[6px] object-contain w-full h-auto
                  ${img.wide ? 'max-h-[380px]' : 'max-h-[500px]'}
                `}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
