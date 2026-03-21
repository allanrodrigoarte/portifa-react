import ProjectTemplate from "../../components/ProjectTemplate";

export default function UmaEstrela() {
    return (
        <>
            <ProjectTemplate
                logo="/imgs/aspontas/estrela-logo.png"
                logoAlt="As Pontas de Uma Estrela Logo"
                siteUrl={null}
                title="As Pontas de Uma Estrela"
                period="2023"
                summary="A poetic 2D animation short exploring growth, fear, and purpose through expressive visual narrative and a rich musical arrangement."
                details={[
                    {
                        title: "Format:",
                        points: ["Short Film"],
                    },
                    {
                        title: "Technique:",
                        points: ["2D Hand-drawn animation (frame-by-frame)"],
                    },
                    {
                        title: "Tools:",
                        points: ["Clip Studio Paint", "Adobe After Effects"],
                    },
                    {
                        title: "Soundtrack:",
                        points: ["Cover of 'Tudo Que Você Podia Ser' by Milton Nascimento"],
                    },
                    {
                        title: "Team:",
                        points: [
                            "Allan Rodrigo – Direction, Animation, Guitar",
                            "Yasmin Longatti – Animation, Violin",
                            "Kevin Mendes – Sound Design, Vocals Coordination",
                        ],
                    },
                    {
                        title: "Produced at:",
                        points: ["Centro Universitário Senac – Final Project"],
                    },
                ]}
            />

            {/* Gallery */}
            <div className="max-w-5xl mx-auto my-10 px-4">
                <img
                    src="/imgs/aspontas/storyboard.png"
                    alt="Snapshot 1"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/aspontas_thumb.png"
                    alt="Snapshot 1"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/tuca-kae-frame-by-frame.png"
                    alt="Snapshot 1"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/snap1.png"
                    alt="Snapshot 1"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/snap2.png"
                    alt="Snapshot 2"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/snap3.png"
                    alt="Snapshot 3"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/snap4.png"
                    alt="Snapshot 4"
                    className="w-full rounded-lg mb-8"
                />
                <img
                    src="/imgs/aspontas/snap5.png"
                    alt="Snapshot 5"
                    className="w-full rounded-lg mb-8"
                />
                {/* Se você tiver snap6.png e snap7.png, adicione aqui */}
            </div>
            {/* Video section */}
            <div className="max-w-5xl mx-auto px-4 my-16 text-center">
                <h2 className="text-2xl font-bold font-mono mb-4">Watch below:</h2>
                <div className="relative w-full pb-[56.25%] rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/lepv682t56A"
                        title="As Pontas de Uma Estrela"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <p className="text-base font-mono text-gray-700 max-w-3xl mx-auto mt-4">
                    A heartfelt short film created by three animation students exploring visual storytelling and music in a final academic project.
                </p>
            </div>

        </>
    );
}
