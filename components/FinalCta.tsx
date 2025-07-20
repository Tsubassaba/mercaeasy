
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

const FinalCta: React.FC = () => {
  return (
    <section className="bg-slate-50">
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
            </div>
        </div>
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    まずは無料で体験してみませんか？
                </h2>
                <div className="mt-10">
                    <Button variant="large">
                        今すぐ無料体験
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    </section>
  );
};

export default FinalCta;
