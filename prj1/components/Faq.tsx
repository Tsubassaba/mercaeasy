
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqData = [
  {
    question: "本当に写真だけで出品できるの？",
    answer: "写真に加えて、ブランド名・商品名・使用歴の簡単な情報があれば、AIが魅力的な商品説明を自動生成します。情報が多いほど、より精度の高い文章が作成可能です。"
  },
  {
    question: "料金はいくらですか？",
    answer: "AI出品アシスタントは月額980円からのプランをご用意しています。出品代行サービスは、売上確定後に手数料として売上の20%をいただきます。まずは無料体験からお気軽にお試しください。"
  },
  {
    question: "AIが作った文章は本当に売れるの？",
    answer: "はい。MercaEasyのAIは、実際のメルカリで売れている数百万件の商品データを学習しています。購入者の心に響くキーワードや構成を分析し、最適な文章を生成するため、ご自身で作成するよりも高い確率での売却が期待できます。"
  }
];

const FaqItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <span className="text-lg font-bold text-slate-800">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-6 pr-8 text-slate-600 font-light">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            よくあるご質問
          </h2>
        </AnimatedSection>
        
        <div className="mt-16 max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <AnimatedSection key={index}>
                    <FaqItem question={item.question} answer={item.answer} />
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
