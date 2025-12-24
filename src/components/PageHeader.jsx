import React from 'react';
import clsx from 'clsx';

const PageHeader = ({ title, description }) => {
    return (
        <section className="bg-slate-50 py-20 relative overflow-hidden border-b border-slate-200">
            {/* Background Patterns - Adjusted for Light Mode */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 animate-slide-up">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
