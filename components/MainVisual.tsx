
import React from 'react';
import Button from './Button';

const MainVisual: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-white pt-20">
      <div className="absolute inset-0 bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          <span className="block">スキマ時間が収入に変わる。</span>
          <span className="block mt-2">写真1枚で、不用品がプラスに。</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
          忙しいあなたのメルカリ出品を、AIと私たちがサポートします
        </p>
        <div className="mt-10">
          <Button variant="large" onClick={() => document.getElementById('cta')?.scrollIntoView()}>
            無料で体験してみる
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
