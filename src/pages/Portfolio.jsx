import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerWrap, StaggerItem } from '../components/Animations';
import { projects } from '../data';

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Portfolio"
                description="Explore our portfolio of successful projects across FinTech, HealthTech, E-commerce, and Enterprise solutions."
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
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-[#00D2D3]">Our Work</div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Real Projects, Real Results
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-4">
                                Case studies showcasing our technical expertise across FinTech, HealthTech, E-commerce, and Enterprise solutions.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <StaggerWrap className="grid grid-cols-1 lg:grid-cols-2 gap-12" staggerChildren={0.15}>
                        {projects.map((project) => (
                            <StaggerItem key={project.id}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
                                    {/* Project Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block px-3 py-1 bg-[#5F27CD] text-white text-xs font-semibold rounded-full mb-2">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-2">CLIENT</h4>
                                            <p className="text-navy-900 font-medium">{project.client}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-2">CHALLENGE</h4>
                                            <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-2">SOLUTION</h4>
                                            <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-2">TECHNOLOGIES</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-slate-200">
                                            <h4 className="text-sm font-semibold text-slate-500 mb-2">OUTCOME</h4>
                                            <p className="text-slate-600 leading-relaxed mb-4">{project.outcome}</p>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-2 text-[#5F27CD] font-semibold hover:gap-3 transition-all"
                                            >
                                                View Case Study <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerWrap>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center text-white max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Let's Build Your Success Story</h2>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 px-4">
                                Ready to transform your business with technology? Let's discuss your project.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-[#5F27CD] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
