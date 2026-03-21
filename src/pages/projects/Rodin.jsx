import { useEffect } from "react";
import ProjectTemplate from '../../components/ProjectTemplate';

export default function Rodin() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <ProjectTemplate
        logo="/imgs/csbl-logo.png"
        logoAlt="CSBL Logo"
        siteUrl={null}
        title="Rodin Thinking AI"
        period="2021"
        summary="RODIN LE PENSEUR X AI"
        details={[
          {
            title: "Goal:",
            points: [
              "Commissioned by Prof. Helder Nakaya to visualize an artificial intelligence as a “thinking” robot, using the pose of Rodin’s The Thinker.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Balancing respect for Rodin’s sculpture with a fresh, futuristic interpretation required close collaboration and iterative feedback.",
            ],
          },
          {
            title: "Results",
            points: [
              "Delivered a polished 3D-rendered robot model that was showcased alongside a virtual Rodin Thinker, effectively communicating the lab’s concept of reflective intelligence.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Expert use of concept-art and modeling tools (hand sketching, Adobe Illustrator/Photoshop, Blender/Cycles) to execute the complex design requirements.",
            ],
          },
        ]}
        images={[]}
      />

      {/* 3D model viewer */}
      <div className="max-w-5xl mx-auto px-4 my-16">
        <h2 className="text-2xl font-bold font-mono mb-4">Interactive 3D Model</h2>
        <model-viewer
          src="https://cdn.glitch.me/ea727b20-c406-4579-b2ac-530a52974af3%2FCSBL_ROBOT.glb"
          alt="Rodin Thinking Robot 3D Model"
          auto-rotate
          camera-controls
          shadow-intensity="0.5"
          style={{ width: '100%', height: '700px' }}
        />
      </div>

      {/* Full width image gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/rodinsculpture.png"
          alt="Additional views of the Rodin Thinking AI 3D model"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>

        <img
          src="/imgs/rodin2view.png"
          alt="Additional views of the Rodin Thinking AI 3D model"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>

        <img
          src="/imgs/rodinraff.png"
          alt="Sketch and roughs for the robot concept"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>

        <img
          src="/imgs/rodinfront.png"
          alt="Frontal pose of the Rodin AI robot"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>

        <img
          src="/imgs/rodinviews.png"
          alt="Final render with multiple angles"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>
    </>
  );
}
