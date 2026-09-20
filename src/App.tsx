import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { DesignGallery } from './components/DesignGallery';
import { Process } from './components/Process';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="page-shell min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-[#8B5CF6] selection:text-white">
      <div className="page-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-1" />
        <span className="ambient-orb ambient-orb-2" />
        <span className="ambient-orb ambient-orb-3" />
        <span className="ambient-grid" />
      </div>

      {/* Top Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Introduction />
        <SelectedWork />
        <DesignGallery />
        <Process />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
