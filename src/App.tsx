import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopChrome from './components/TopChrome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SiteScripts from './components/SiteScripts';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <TopChrome />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <SiteScripts />
    </BrowserRouter>
  );
}

export default App;
