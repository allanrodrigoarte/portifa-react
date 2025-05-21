// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import TailwindTest from "./pages/TailwindTest";
import Printi from "./pages/Printi";

// Projetos
import Bsouro from "./pages/projects/Bsouro";
import Cocidade from "./pages/projects/Cocidade";
import CSBL from "./pages/projects/CSBL";
import GGRebrand from "./pages/projects/GGRebrand";
import GGTokenizedCommunity from "./pages/projects/GGTokenizedCommunity";
import NFT4Artists from "./pages/projects/NFT4Artists";
import NFTLoreCards3D from "./pages/projects/NFTLoreCards3D";
import RNABook from "./pages/projects/RNABook";
import Rodin from "./pages/projects/Rodin";
import Web3GamingUX from "./pages/projects/Web3GamingUX";

// Páginas adicionais
import Projectx from "./pages/Projectx";
import TimelineGrid from "./pages/TimelineGrid"; // Certifique-se de que este componente exista

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
            <Route path="/projects/printi" element={<Printi />} />
            <Route path="/projects/bsouro" element={<Bsouro />} />
            <Route path="/projects/cocidade" element={<Cocidade />} />
            <Route path="/projects/csbl" element={<CSBL />} />
            <Route path="/projects/ggrebrand" element={<GGRebrand />} />
            <Route path="/projects/ggtokenizedcommunity" element={<GGTokenizedCommunity />} />
            <Route path="/projects/nft4artists" element={<NFT4Artists />} />
            <Route path="/projects/nftlorecards3d" element={<NFTLoreCards3D />} />
            <Route path="/projects/rnabook" element={<RNABook />} />
            <Route path="/projects/rodin" element={<Rodin />} />
            <Route path="/projects/web3gamingux" element={<Web3GamingUX />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
