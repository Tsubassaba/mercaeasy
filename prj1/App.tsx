
import React from 'react';
import MainVisual from './components/MainVisual';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">MercaEasy</div>
              <nav className="hidden md:flex items-center space-x-8">
                  <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">サービス</a>
                  <a href="#howitworks" className="text-slate-600 hover:text-blue-600 transition-colors">利用の流れ</a>
                  <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
                  <a href="#cta" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                    無料で体験する
                  </a>
              </nav>
          </div>
      </header>
      <main>
        <MainVisual />
        <div id="solutions">
          <PainPoints />
        </div>
        <Solutions />
        <div id="howitworks">
          <HowItWorks />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="cta">
          <FinalCta />
        </div>
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
