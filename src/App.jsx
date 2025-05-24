import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import TailwindTest from "./pages/TailwindTest";
import Printi from "./pages/projects/Printi";
import Projectx from "./pages/Projectx";
import TimelineGrid from "./pages/TimelineGrid";


// Projetos
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
import LogoGallery from "./components/LogoGallery";

export default function TailwindTestApp() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<TailwindTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timeline-grid" element={<TimelineGrid />} />
            <Route path="/projectx" element={<Projectx />} />
            <Route path="/logo-gallery" element={<LogoGallery />} />

            {/* Projetos */}
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
            {/* Adicione mais rotas de projetos conforme necessário */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
