
import React from 'react';
import AnimatedSection from './AnimatedSection';

const securityPoints = [
  {
    icon: '🔒',
    title: '強固なデータ暗号化',
    description: 'お客様からお預かりした全てのデータは、業界標準の暗号化技術を用いて安全に保護・管理されています。'
  },
  {
    icon: '🛡️',
    title: 'プライバシーの保護',
    description: '個人情報の取り扱いには細心の注意を払います。法律や規制を遵守し、お客様のプライバシーを尊重します。'
  },
  {
    icon: '☁️',
    title: '安全なインフラ',
    description: '信頼性の高いクラウドインフラストラクチャを利用し、24時間365日体制でサービスの安定稼働とセキュリティを監視しています。'
  }
]

const Security: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            セキュリティ・安全性
          </h2>
          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            お客様に安心してご利用いただくために、私たちはセキュリティを最優先に考えています。
          </p>
        </AnimatedSection>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {securityPoints.map((point, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="text-center p-8">
                <div className="text-5xl">{point.icon}</div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">{point.title}</h3>
                <p className="mt-2 text-slate-600 font-light">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
