
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ImagePlaceholder from './ImagePlaceholder';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <img 
              src={`${import.meta.env.BASE_URL}sample10.png`}
              alt="MercaEasyチームメンバーの写真"
              className="w-full h-auto object-cover aspect-[4/3] rounded-t-lg"
            />
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              私たちについて
            </h2>
            <p className="text-blue-600 font-semibold text-lg mb-6">MercaEasyを始めた理由</p>
            <div className="space-y-4 text-slate-600 font-light">
              <p>
                私たちMercaEasyは、「忙しいママたちの小さな困りごとを、テクノロジーで解決したい」という想いから始まったプロジェクトです。
              </p>
              <p>
                メンバー全員が子育て経験者であり、メルカリ出品の大変さを身をもって体験してきました。「もっと簡単に、もっと楽しく不用品を活用できたら」そんな想いで、ボランティアベースでこのサービスを立ち上げました。
              </p>
              <p>
                収益よりも、一人でも多くのママが笑顔になれることを最優先に、日々サービスを改善しています。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
