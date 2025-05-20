import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TailwindTest from './pages/TailwindTest';
import About from './pages/About';
import Printi from './pages/Printi';
import Timeline from './pages/Timeline';
import GGRebrand from './pages/projects/GGRebrand';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TailwindTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/printi" element={<Printi />} />
            <Route path="/projects/ggrebrand" element={<GGRebrand />} /> {/* Nova rota */}
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
