
import React from 'react';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Security from './components/Security';
import Contact from './components/Contact';
import Section from './components/Section';


const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-white text-slate-800">
      <Header />
      <main>
        <MainVisual />
        <PainPoints />
        <Section id="solutions">
          <Solutions />
        </Section>
        <Section id="howitworks">
          <HowItWorks />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="pricing">
          <Pricing />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="security">
          <Security />
        </Section>
        <Section id="faq">
          <Faq />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; 2024 MercaEasy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
