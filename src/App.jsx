// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./comp/Navbar";

// Páginas principais
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Cont from "./pages/Cont";
import Timeline from "./pages/Timeline";
import TimelineGrid from "./pages/TimelineGrid";
import Projectx from "./pages/Projectx";
import LogoGallery from "./components/LogoGallery";
import Branding from "./pages/Branding";
import Viz from "./pages/Viz";
import Web3 from "./pages/Web3";
import UXUI from "./pages/UxUi";
import Animation from "./pages/Animation";

// Projetos individuais
import Printi from "./pages/projects/Printi";
import Bsouro from "./pages/projects/Bsouro";
import Cocidade from "./pages/projects/Cocidade";
import Cooperapiz from "./pages/projects/Cooperapiz-package";
import CoopMak from "./pages/projects/CoopMak-package";
import CSBL from "./pages/projects/CSBL";
import GGRebrand from "./pages/projects/GGRebrand";
import GGTokenizedCommunity from "./pages/projects/GGTokenizedCommunity";
import NFT4Artists from "./pages/projects/NFT4Artists";
import NFTLoreCards3D from "./pages/projects/NFTLoreCards3D";
import Pyy from "./pages/projects/Pyy";
import RNABook from "./pages/projects/RNABook";
import Rodin from "./pages/projects/Rodin";
import VaccGame from "./pages/projects/Vacc-game";
import Web3GamingUX from "./pages/projects/Web3GamingUX";
import VirologyNetwork from "./pages/projects/VirologyNetwork";
import TheGoldenCompany from "./pages/projects/TheGoldenCompany";
import Raposinha from "./pages/projects/Raposinha";
import Cassuvium from "./pages/projects/Cassuvium";
import UmaEstrela from "./pages/projects/UmaEstrela";
import Footer from "./components/Footer";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import { Analytics } from '@vercel/analytics/react';

export default function HomepageApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline-grid" element={<TimelineGrid />} />
          <Route path="/projectx" element={<Projectx />} />
          <Route path="/logo-gallery" element={<LogoGallery />} />
          <Route path="/cont" element={<Cont />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/viz" element={<Viz />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/uxui" element={<UXUI />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/professionalexperience" element={<ProfessionalExperience />} />

          {/* Rotas de projetos */}
          <Route path="/projects/printi" element={<Printi />} />
          <Route path="/projects/bsouro" element={<Bsouro />} />
          <Route path="/projects/cocidade" element={<Cocidade />} />
          <Route path="/projects/cooperapiz-package" element={<Cooperapiz />} />
          <Route path="/projects/coopmak-package" element={<CoopMak />} />
          <Route path="/projects/csbl" element={<CSBL />} />
          <Route path="/projects/ggrebrand" element={<GGRebrand />} />
          <Route path="/projects/ggtokenizedcommunity" element={<GGTokenizedCommunity />} />
          <Route path="/projects/nft4artists" element={<NFT4Artists />} />
          <Route path="/projects/nftlorecards3d" element={<NFTLoreCards3D />} />
          <Route path="/projects/pyy" element={<Pyy />} />
          <Route path="/projects/rnabook" element={<RNABook />} />
          <Route path="/projects/rodin" element={<Rodin />} />
          <Route path="/projects/vacc-game" element={<VaccGame />} />
          <Route path="/projects/virologynetwork" element={<VirologyNetwork />} />
          <Route path="/projects/web3gamingux" element={<Web3GamingUX />} />
          <Route path="/projects/thegoldencompany" element={<TheGoldenCompany />} />
          <Route path="/projects/raposinha" element={<Raposinha />} />
          <Route path="/projects/cassuvium" element={<Cassuvium />} />
          <Route path="/projects/umaestrela" element={<UmaEstrela />} />

          {/* Adicione mais rotas de projetos conforme necessário */}
        </Routes>
      </main>
      <Footer year={2026} owner="Allan Rodrigo - Product Designer" />
      <Analytics />
    </div>
  );
}


