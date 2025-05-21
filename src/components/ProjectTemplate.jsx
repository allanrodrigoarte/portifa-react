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
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img src={logo} alt={logoAlt} className="h-24 w-24 object-contain border border-black bg-white rounded-lg shadow" />
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold font-mono mb-1">{title}</h1>
          <div className="text-gray-400 text-lg mb-2">{period}</div>
          {siteUrl && (
            <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {siteUrl.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>
      </div>
      {/* Detalhes */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {details?.map((section, idx) => (
          <div key={idx}>
            <div className="font-bold mb-1">{section.title}</div>
            <ul className="list-disc list-inside ml-2">
              {section.points.map((pt, i) => (
                <li key={i} className="mb-1">{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Galeria de Imagens */}
      {images.length > 0 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, idx) =>
            img.wide ? (
              // Imagem paisagem ocupa 2 colunas, altura automática
              <div
                key={idx}
                className="border border-black rounded-[6px] shadow-lg bg-white p-2 flex justify-center items-center col-span-1 sm:col-span-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-[6px] object-contain w-full max-h-[380px]"
                  loading="lazy"
                />
              </div>
            ) : (
              // Imagem quadrada (aspect-square)
              <div
                key={idx}
                className="border border-black rounded-[6px] shadow-lg bg-white p-2 flex justify-center items-center aspect-square"
                style={{ minHeight: 180 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-[6px] object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
