export default function Cont() {
  return (
    <div className="w-full h-screen bg-white font-mono">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-6 flex flex-col justify-start h-full">

        {/* Foto + dados de contato */}
        <div className="flex flex-col items-center justify-start gap-4">
          {/* Foto */}
          <img
            src="/imgs/pfp-allan.jpeg"
            alt="Allan Rodrigo"
            className="w-44 h-44 object-cover rounded-full border-2 border-gray-300 shadow-md"
          />

          {/* Informações de contato */}
          <div className="flex flex-col text-2xl items-center gap-2 text-center">
            <h2 className="text-4xl font-bold">Allan Rodrigo</h2>
            <p><strong>Whatsapp:</strong><a
                href="wa.me/+5511966250826"
                className="underline hover:text-blue-700 transition"
              > +5511966250826</a></p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:allanrodrigo.arte@gmail.com"
                className="underline hover:text-blue-700 transition"
              >
                allanrodrigo.arte@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/allanrodrigoarte/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700 transition"
              >
                linkedin.com/in/allanrodrigoarte
              </a>
            </p>
          </div>
        </div>

        {/* Slogan ao final */}
        <div className="text-center mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Innovation in Design since 2012
          </h1>
        </div>
      </div>
    </div>
  );
}
