
import React from 'react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: "01",
    title: "写真を撮影＋簡単な情報を入力",
    description: "売りたい商品の写真を撮り、ブランド名などの基本情報を数タップで入力します。",
    icon: "📸"
  },
  {
    number: "02",
    title: "AIが最適な出品内容を自動生成",
    description: "AIが写真と情報から、売れやすいタイトル・説明文・価格を瞬時に提案します。",
    icon: "✨"
  },
  {
    number: "03",
    title: "ワンクリックでメルカリに出品完了",
    description: "内容を確認してボタンを押すだけ。面倒な作業なしで、すぐに出品が完了します。",
    icon: "🚀"
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
        
        <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {steps.map((step, index) => (
                    <AnimatedSection key={index}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                            <div className="text-6xl">{step.icon}</div>
                            <div className="mt-4 text-2xl font-bold text-blue-600">{step.number}</div>
                            <h3 className="mt-4 text-xl font-bold text-slate-800">{step.title}</h3>
                            <p className="mt-2 text-slate-600 font-light">{step.description}</p>
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
