import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FadeIn, StaggerWrap, StaggerItem } from '../components/Animations';
import { technologies } from '../data';

const Technologies = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Technologies' },
        { id: 'Frontend', label: 'Frontend' },
        { id: 'Backend', label: 'Backend' },
        { id: 'Database', label: 'Database' },
        { id: 'DevOps', label: 'DevOps' },
        { id: 'Security & QA', label: 'Security & QA' }
    ];

    const filteredTechnologies = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    return (
        <>
            <SEO
                title="Technology Stack | Offkettech"
                description="Our expertise covers the full modern stack: React, Node.js, Python, AWS, Kubernetes, and more. Vendor-agnostic approach."
            />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-[#00D2D3]">Our Tech Stack</div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Cutting-Edge Technologies for Modern Solutions
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-4">
                                We leverage the best tools and frameworks to build scalable, secure, and high-performance applications. Vendor-agnostic approach ensures the right technology for your specific needs.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 md:py-8 bg-white border-b border-slate-200 sticky top-[70px] md:top-[80px] z-30 transition-all">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full font-medium transition-all ${activeCategory === category.id
                                    ? 'bg-[#5F27CD] text-white shadow-lg scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    {filteredTechnologies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredTechnologies.map((tech) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.category}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200"
                                    >
                                        {/* Category Header */}
                                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white shadow-lg">
                                                <Icon size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-navy-900">{tech.category}</h3>
                                                <p className="text-sm text-slate-500">{tech.items.length} technologies</p>
                                            </div>
                                        </div>

                                        {/* Technology Items */}
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                            {tech.items.map((item) => (
                                                <motion.div
                                                    key={item.name}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all group cursor-pointer"
                                                >
                                                    <div className="relative">
                                                        <img
                                                            src={item.logo}
                                                            alt={item.name}
                                                            className="w-12 h-12 mb-3 object-contain transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5F27CD]/20 to-[#00D2D3]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                                    </div>
                                                    <span className="text-xs font-medium text-slate-600 group-hover:text-[#5F27CD] transition-colors text-center">
                                                        {item.name}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No technologies found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Why Our Stack Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-16">
                            <div className="text-xs md:text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-2 md:mb-3">Our Approach</div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">Why Our Technology Stack?</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Vendor Agnostic',
                                description: 'We choose the best tool for each specific job, not based on vendor relationships or bias.',
                                icon: '🎯'
                            },
                            {
                                title: 'Battle-Tested',
                                description: 'Every technology in our stack has been proven in production environments at scale.',
                                icon: '🛡️'
                            },
                            {
                                title: 'Future-Proof',
                                description: 'We stay ahead of the curve, adopting emerging technologies that provide real value.',
                                icon: '🚀'
                            },
                            {
                                title: 'Performance First',
                                description: 'Optimized for speed, efficiency, and scalability from day one.',
                                icon: '⚡'
                            },
                            {
                                title: 'Security Built-In',
                                description: 'Industry-standard security practices integrated into every layer of the stack.',
                                icon: '🔒'
                            },
                            {
                                title: 'Developer Experience',
                                description: 'Modern tooling and frameworks that enable rapid, reliable development.',
                                icon: '💻'
                            }
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-[#F9F9FB] rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center text-white max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ready to Build Something Amazing?</h2>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 px-4">
                                Let's discuss which technologies are the perfect fit for your project.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-[#5F27CD] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
                            >
                                Start a Conversation
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default Technologies;
