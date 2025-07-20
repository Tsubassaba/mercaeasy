
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const MainVisual: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black">
        <img 
          src={`${import.meta.env.BASE_URL}sample1.jpg`} 
          alt="A person happily organizing items for sale at home" 
          className="w-full h-full object-cover opacity-40" 
        />
      </div>
       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20"></div>

      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            <span className="block">スキマ時間が収入に変わる。</span>
            <span className="block mt-2">写真1枚で、不用品がプラスに。</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light [text-shadow:_0_1px_4px_rgb(0_0_0_/_50%)]">
            忙しいあなたのメルカリ出品を、AIと私たちがサポートします
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="mt-10">
            <Button variant="large" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              無料で体験してみる
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MainVisual;
