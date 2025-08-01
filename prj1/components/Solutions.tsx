
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const Solutions: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            MercaEasyが解決します
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection className="w-full">
            <div className="bg-slate-50 rounded-2xl p-8 h-full flex flex-col border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">AI出品アシスタント</h3>
              <p className="mt-4 text-slate-600 font-light flex-grow">
                写真を撮るだけで、AIが売れるタイトルと説明文を自動作成。適正価格も瞬時に判定し、出品作業を10分の1に短縮します。
              </p>
              <div className="mt-8">
                <Button onClick={() => document.getElementById('cta')?.scrollIntoView()}>体験してみる</Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="w-full">
            <div className="bg-slate-50 rounded-2xl p-8 h-full flex flex-col border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">まるごとお任せ出品代行</h3>
              <p className="mt-4 text-slate-600 font-light flex-grow">
                自宅まで商品を受け取りに伺い、撮影から出品、梱包・発送まで完全代行。あなたは売上を受け取るだけです。
              </p>
              <div className="mt-8">
                 <Button variant="secondary">詳しく見る</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
