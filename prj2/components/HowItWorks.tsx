
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ImagePlaceholder from './ImagePlaceholder';

const steps = [
  {
    number: "01",
    title: "写真を撮影＋簡単な情報を入力",
    description: "売りたい商品の写真を撮り、ブランド名などの基本情報を数タップで入力します。",
    caption: "ステップ1のイラスト (推奨解像度: 400x300px)"
  },
  {
    number: "02",
    title: "AIが最適な出品内容を自動生成",
    description: "AIが写真と情報から、売れやすいタイトル・説明文・価格を瞬時に提案します。",
    caption: "ステップ2のイラスト (推奨解像度: 400x300px)"
  },
  {
    number: "03",
    title: "ワンクリックでメルカリに出品完了",
    description: "内容を確認してボタンを押すだけ。面倒な作業なしで、すぐに出品が完了します。",
    caption: "ステップ3のイラスト (推奨解像度: 400x300px)"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            AIアシスタントの利用の流れ
          </h2>
        </AnimatedSection>
        
        <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center relative">
               {/* Dashed lines for connecting steps on larger screens */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-16">
                  <svg className="w-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                    <path d="M 0,0.5 L 100,0.5" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
                  </svg>
                </div>

                {steps.map((step, index) => (
                    <AnimatedSection key={index} delay={index * 200} className="relative">
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col">
                            <img 
                              src={`${step.number === '01' ? '/sample5.jpg' : step.number === '03' ? '/sample9.png' : '/sample3.png'}`}
                              alt={step.title}
                              className="w-full h-auto object-cover aspect-[4/3] rounded-t-lg"
                            />
                            <div className="mt-6 text-2xl font-bold text-blue-600">{step.number}</div>
                            <h3 className="mt-4 text-xl font-bold text-slate-800">{step.title}</h3>
                            <p className="mt-2 text-slate-600 font-light flex-grow">{step.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
