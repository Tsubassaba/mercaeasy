
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const CheckmarkIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);


const Pricing: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            料金プラン
          </h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            あなたのニーズに合わせて選べる2つのプラン。まずは無料体験から。
          </p>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="border-2 border-blue-600 rounded-2xl p-8 h-full flex flex-col shadow-2xl shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-blue-600">AI出品アシスタント</h3>
              <p className="mt-2 text-slate-600">自分で出品作業をしたい方向け</p>
              <div className="my-6">
                <span className="text-4xl font-bold text-slate-900">月額980円</span>
                <span className="text-slate-500">（税込）</span>
              </div>
              <ul className="space-y-3 text-slate-600 flex-grow">
                <li className="flex items-center"><CheckmarkIcon /> AIによるタイトル・説明文の自動生成</li>
                <li className="flex items-center"><CheckmarkIcon /> AIによる適正価格の提案</li>
                <li className="flex items-center"><CheckmarkIcon /> 月間30出品まで</li>
                <li className="flex items-center"><CheckmarkIcon /> いつでも解約OK</li>
              </ul>
              <div className="mt-8">
                <Button variant="large" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                  14日間 無料で試す
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
             <div className="border border-slate-200 rounded-2xl p-8 h-full flex flex-col bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-800">まるごとお任せ出品代行</h3>
              <p className="mt-2 text-slate-600">全てお任せしたい方向け</p>
              <div className="my-6">
                <span className="text-4xl font-bold text-slate-900">売上の20%</span>
                <span className="text-slate-500">〜</span>
              </div>
              <ul className="space-y-3 text-slate-600 flex-grow">
                <li className="flex items-center"><CheckmarkIcon /> 商品の集荷・保管</li>
                <li className="flex items-center"><CheckmarkIcon /> プロによる写真撮影</li>
                <li className="flex items-center"><CheckmarkIcon /> 出品・価格調整・コメント対応</li>
                <li className="flex items-center"><CheckmarkIcon /> 梱包・発送作業の全て</li>
              </ul>
              <div className="mt-8">
                <Button variant="secondary" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                  サービスに申し込む
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
