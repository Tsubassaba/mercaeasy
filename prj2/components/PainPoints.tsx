
import React from 'react';
import AnimatedSection from './AnimatedSection';
import CheckIcon from './icons/CheckIcon';
import ImagePlaceholder from './ImagePlaceholder';

const painPoints = [
  {
    title: "商品の写真を撮るのが、意外と面倒…",
    description: "子どもが昼寝している隙に撮影しようと思っても、なかなか綺麗に撮れなくて何度も撮り直し。光の加減とか角度とか、どうすれば売れやすい写真になるのかよくわからない。"
  },
  {
    title: "商品説明って何を書けばいいの？",
    description: "傷や汚れの程度をどう表現すればいいのか迷うし、あまり正直に書きすぎると売れなさそうだし…。他の人の出品を見ても、みんな上手に書いていて自分には難しそう。"
  },
  {
    title: "値段設定が全然わからない…",
    description: "高すぎると売れないし、安すぎると損した気分になるし。相場を調べてみても、同じような商品でも値段がバラバラで、結局いくらにすればいいのかわからない。"
  },
  {
    title: "コメントのやり取りが面倒で疲れる",
    description: "値下げ交渉されたり、細かい質問をされたり…。変な人に絡まれたらどうしようって不安になるし、返事を考えるのに時間がかかって家事が進まない。"
  },
  {
    title: "梱包や発送の手続きが複雑すぎる…",
    description: "らくらくメルカリ便？ゆうゆうメルカリ便？コンビニでの操作方法もよくわからないし、梱包材も何を使えばいいのか。発送ミスして相手に迷惑をかけたらと思うと不安。"
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            こんなお悩みありませんか？
          </h2>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection className="w-full" delay={200}>
            <img 
              src="/sample2.png" 
              alt="悩んでいる主婦" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </AnimatedSection>
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{point.title}</h3>
                    <p className="mt-1 text-slate-600 font-light">{point.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
