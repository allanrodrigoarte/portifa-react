import ProjectTemplate from '../../components/ProjectTemplate';

export default function Rodin() {
  return (
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
      images={[
        { src: "/imgs/rodin-thinking-ai.png", alt: "Rodin Thinking AI" }, // Adapte o nome/caminho da imagem conforme seu projeto
      ]}
    />
  );
}
