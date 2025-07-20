
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ImagePlaceholder from './ImagePlaceholder';

const testimonials = [
  {
    name: "伊東 かず",
    details: "34歳・2児の父",
    quote: "AIアシスタントを使い始めて、今まで1時間かかっていた出品作業が10分で終わるように！空いた時間で子どもと遊べるようになり、本当に感謝しています。",
    caption: "田中さとみ様の写真 (推奨解像度: 200x200px)"
  },
  {
    name: "鈴木 あやか",
    details: "41歳・パート",
    quote: "自分では思いつかないような素敵な紹介文をAIが作ってくれるので、以前より商品が早く売れるようになりました。売上も1.5倍にアップしました！",
    caption: "鈴木あやか様の写真 (推奨解像度: 200x200px)"
  },
  {
    name: "高橋 ゆうこ",
    details: "38歳・フリーランス",
    quote: "大量の子供服を処分したくて『まるごとお任せ出品代行』を利用しました。箱に詰めて送るだけで、あとは全部お任せ。手間が一切かからず、クローゼットがスッキリしました。",
    caption: "高橋ゆうこ様の写真 (推奨解像度: 200x200px)"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            導入実績・お客様の声
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg border border-slate-100">
                <img 
                  src={`/mercaeasy/sample${index + 6}.jpg`} 
                  alt={`${testimonial.name}・スタッフ写真`} 
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
                <blockquote className="mt-6 text-slate-600 font-light italic flex-grow">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <footer className="mt-6">
                  <div className="font-bold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.details}</div>
                </footer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
