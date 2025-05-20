// src/pages/About.jsx

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 mt-20"> {/* Adicionado mt-20 para compensar a navbar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
        {/* Foto */}
        <img
          src="/imgs/pfp-allan.jpeg"
          alt="Allan Rodrigo"
          className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 shadow-sm"
        />
        {/* Título e infos */}
        <div>
          <h1 className="font-mono font-bold text-4xl mb-2">Allan Rodrigo</h1>
          <p className="font-mono text-2xl mb-1">32 years old.</p>
          <p className="font-mono text-2xl">São Paulo - Brasil</p>
        </div>
      </div>

      {/* Parágrafos */}
      <div className="font-mono text-2xl max-w-4xl">
        <p className="mb-10">
          My career began crafting print layouts at Printi.com.br, then designing brand identities and production assets at AHH! Agency. I went on to serve as Senior Academic Designer at CSBL-USP, creating scientific visuals, article graphics, and presentation materials in English for research publications.
        </p>
        <p>
          Most recently, I was Lead UX/UI Designer at gg.xyz (formerly ggQuest), where I shaped design strategy and led UX/UI initiatives end-to-end. I am now seeking new challenges to bring this expertise to your team.
        </p>
                <div className="max-w-4xl mx-auto mt-16">
                    <h2 className="text-4xl font-mono font-bold mb-8">Academic Background</h2>
                    <div className="font-mono text-2xl leading-snug text-left">
                        <p>
                            I earned a Technical Degree in Graphic Design at ETEC Centro Paula Souza (2011), studied Graphic Design for two years at Universidade Presbiteriana Mackenzie, completed an Animation Design Technology degree at Centro Universitário Senac (2024).
                        </p>
                        <p className="mt-8">
                            I’ve enhanced my UX/UI skills with dedicated courses at EBAC and on DesignCourse.com. This blend of technical rigor, creative training, and specialized UX/UI education underpins my digital design expertise.
                        </p>
                        <div className="max-w-3xl mx-auto mt-16 space-y-12">
  {/* Senac */}
  <div className="flex items-start gap-8">
    <img src="/imgs/senac-logo.png" alt="Senac" className="w-28 h-20 object-contain" />
    <div className="font-mono text-xl">
      <div className="font-bold text-2xl">Centro Universitário Senac</div>
      <div>Conclusion in 2024</div>
      <div>Animation Design Technology</div>
    </div>
  </div>
  {/* DesignCourse */}
  <div className="flex items-start gap-8">
    <img src="/imgs/designcourse-logo.png" alt="Design.course.com" className="w-28 h-20 object-contain bg-white" />
    <div className="font-mono text-xl">
      <div className="font-bold text-2xl">Design.course.com</div>
      <div>2023</div>
      <div>FIGMA UX/UI Course</div>
    </div>
  </div>
  {/* EBAC */}
                            <div className="flex items-start gap-8">
                                <img src="/imgs/ebac-logo.png" alt="EBAC" className="w-28 h-20 object-contain" />
                                <div className="font-mono text-xl">
                                    <div className="font-bold text-2xl">
                                        EBAC <span className="font-normal text-base">Escola Britânica de Artes Criativas e Tecnologia</span>
                                    </div>
                                    <div>2022</div>
                                    <div>FIGMA UX/UI Course</div>
                                </div>
                            </div>
                            {/* Mackenzie */}
                            <div className="flex items-start gap-8">
                                <img src="/imgs/mackenzie-logo.png" alt="Mackenzie" className="w-28 h-20 object-contain" />
                                <div className="font-mono text-xl">
                                    <div className="font-bold text-2xl">Universidade Prebisteriana Mackenzie</div>
                                    <div>(On Hold)</div>
                                    <div>Graphic Design</div>
                                </div>
                            </div>
                            {/* ETEC */}
                            <div className="flex items-start gap-8">
                                <img src="/imgs/etec-logo.png" alt="ETEC" className="w-28 h-20 object-contain" />
                                <div className="font-mono text-xl">
                                    <div className="font-bold text-2xl">ETEC CENTRO PAULA SOUZA</div>
                                    <div>2011</div>
                                    <div>Graphic Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}