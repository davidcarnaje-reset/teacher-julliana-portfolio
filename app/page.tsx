import Navbar from './components/Navbar';
import FloatingIcons from './components/FloatingIcons';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FFFBEB]">
      {/* Background layer para sa mga floating cats at stars */}
      <FloatingIcons /> 
      
      {/* Navigation Layer */}
      <Navbar />

      {/* Main Content Sections with IDs */}
      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}