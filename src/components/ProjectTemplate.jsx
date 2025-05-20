export default function ProjectTemplate({
  logo,
  logoAlt,
  siteUrl,
  title,
  period,
  summary,
  details = [],
  images = [],
}) {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-16 px-6 font-mono min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="text-2xl text-gray-400">{period}</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} alt={logoAlt} className="h-20 mb-1 object-contain" />
          {siteUrl && (
            <a
              href={siteUrl}
              className="italic text-lg underline text-gray-600 hover:text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteUrl.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && <div className="mb-10 text-lg">{summary}</div>}

      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
        {details.map((section, idx) => (
          <div key={idx}>
            <h2 className="font-bold text-xl mb-3">{section.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {section.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Images */}
      {images.length > 0 && (
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="rounded shadow-md w-full object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}
