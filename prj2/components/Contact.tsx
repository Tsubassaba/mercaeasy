import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here.
    // For example, send the data to a server.
    alert('お問い合わせありがとうございます。');
    const form = event.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            まずは無料で体験してみませんか？
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            AIアシスタントを14日間無料でお試しいただけます。クレジットカードの登録は不要です。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-12 max-w-xl mx-auto bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">お問い合わせ</h3>
            <p className="text-center text-slate-500 mb-8">ご質問やご相談はこちらからお気軽にどうぞ。</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">お名前</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">メールアドレス</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">お問い合わせ内容</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <Button type="submit" variant="large" className="w-full">
                  送信する
                </Button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;