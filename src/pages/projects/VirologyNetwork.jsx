import ProjectTemplate from "../../components/ProjectTemplate";
// If using Create React App or Vite, you can import '@google/model-viewer';
// Otherwise, be sure the <script> is in your public/index.html (see comments below)

export default function VirologyNetwork() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/virology-logo.png"
        logoAlt="Virology Network"
        siteUrl={null}
        title="Virology Network in Past 40 Years"
        period="Science Figure Design & 3D Animation – 2022"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Create a comprehensive visual summary of 40 years of virology research, showing how each human virus has been studied and how knowledge has developed over time."
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Condense a vast and complex dataset into a visually compelling and intuitive graphic for an academic article, collaborating closely with PhD Vivian Schuch.",
              "Translate scientific data into both 2D and 3D visualizations to enhance understanding and engagement."
            ],
          },
          {
            title: "Results:",
            points: [
              "Designed an impactful radial graphic used as the main figure in the article, making the research accessible to both scientists and the general public.",
              "Developed a 3D network animation in Blender to support storytelling and presentations, visually highlighting research patterns and breakthroughs."
            ],
          },
          {
            title: "Skills:",
            points: [
              "Data Visualization, Science Communication, 3D Animation (Blender), Graphic Design, Collaboration with Scientific Researchers"
            ],
          },
        ]}
        images={[
          { src: "/imgs/virology-network.png", alt: "Radial virology network chart, all human viruses studied 1980–2020" },
          { src: "/imgs/virology-3d.png", alt: "3D Blender network visualization for virus research" },
        ]}
      />

      {/* Full-width Google Model Viewer 3D */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        {/* If not already included in your index.html, add this to index.html once: 
          <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        */}
        <model-viewer
          src="https://cdn.glitch.me/ea727b20-c406-4579-b2ac-530a52974af3%2FCSBL_ROBOT.glb?v=1639259526939"
          ios-src="https://cdn.glitch.me/ea727b20-c406-4579-b2ac-530a52974af3%2FCSBL_ROBOT.usdc?v=1639259535943"
          poster="https://cdn.glitch.me/ea727b20-c406-4579-b2ac-530a52974af3%2FRODIN_AI_POSTER_OK.png?v=1639260237254"
          alt="A 3D Model of a Robotic Rodin"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
          style={{ width: '100%', height: '500px', background: '#fff', borderRadius: '1rem', outline: 'none' }}
        ></model-viewer>
      </div>
    </>
  );
}
