import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerWrap, StaggerItem } from '../components/Animations';
import { services } from '../data';

const Services = () => {
    return (
        <>
            <SEO
                title="Services | Offkettech"
                description="Comprehensive IT services including Web & Mobile Development, AI/ML, Cloud & DevOps, Cybersecurity, and UI/UX Design."
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
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-[#00D2D3]">What We Do</div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Enterprise-Grade Technology Services
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-4">
                                From concept to deployment, we deliver scalable, secure, and high-performance solutions tailored to your business needs.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <StaggerWrap className="grid grid-cols-1 lg:grid-cols-2 gap-12" staggerChildren={0.1}>
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            // Define unique background patterns for each service
                            const backgroundPatterns = [
                                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235F27CD' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, // Web Dev
                                `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300D2D3' fill-opacity='0.04' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`, // AI/ML
                                `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.04'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, // Cloud
                                `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%2310B981' stroke-width='2' fill='none' fill-opacity='0.04' d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z'/%3E%3C/svg%3E")`, // Mobile
                                `url("data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 1 1-9.78 0 5 5 0 0 1 9.78 0z' fill='%23F59E0B' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`, // Security
                                `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23EF4444' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")` // UI/UX
                            ];

                            return (
                                <StaggerItem key={service.id}>
                                    <div
                                        className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden group"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.unsplash.com/photo-${['1461749280684-dccba630e2f6', '1677442136019-21780ecad995', '1451187580459-43490279c0fa', '1512941937669-90a1b58e7e9c', '1550751827-4bd374c3f58b', '1561070791-2526d30994b5'][index]}?auto=format&fit=crop&q=80&w=1200)`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {/* Icon & Title */}
                                        <div className="flex items-start gap-4 mb-6 relative z-10">
                                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                                <Icon size={32} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-navy-900 mb-2">{service.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mb-6 flex-1 relative z-10">
                                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Benefits</h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-slate-600">
                                                        <CheckCircle size={18} className="text-[#00D2D3] flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="pt-6 border-t border-slate-200 relative z-10">
                                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.tech.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-[#F9F9FB] text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerWrap>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">How We Work</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Development Process</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                A proven methodology that ensures quality, transparency, and timely delivery.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="max-w-4xl mx-auto">
                        <StaggerWrap className="space-y-8" staggerChildren={0.1}>
                            {[
                                {
                                    step: '01',
                                    title: 'Discovery & Planning',
                                    description: 'We start by understanding your business goals, technical requirements, and project constraints. This phase includes stakeholder interviews, requirement analysis, and feasibility studies.',
                                    deliverables: ['Project roadmap', 'Technical specification', 'Cost estimate']
                                },
                                {
                                    step: '02',
                                    title: 'Design & Architecture',
                                    description: 'Our team creates detailed UI/UX designs and system architecture diagrams. We ensure scalability, security, and performance are built into the foundation.',
                                    deliverables: ['Wireframes & mockups', 'Architecture diagrams', 'Database schema']
                                },
                                {
                                    step: '03',
                                    title: 'Development & Testing',
                                    description: 'Using Agile methodology, we develop in 2-week sprints with continuous testing. You get regular demos and can provide feedback throughout the process.',
                                    deliverables: ['Working software', 'Test reports', 'Sprint demos']
                                },
                                {
                                    step: '04',
                                    title: 'Deployment & Support',
                                    description: 'We handle production deployment, monitoring setup, and provide ongoing maintenance. Our team ensures smooth operations and quick issue resolution.',
                                    deliverables: ['Production deployment', 'Documentation', '24/7 monitoring']
                                }
                            ].map((phase, index) => (
                                <StaggerItem key={index}>
                                    <div className="flex gap-6 group">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                                {phase.step}
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-8 border-l-2 border-slate-200 pl-6 -ml-8">
                                            <h3 className="text-2xl font-bold text-navy-900 mb-3">{phase.title}</h3>
                                            <p className="text-slate-600 leading-relaxed mb-4">{phase.description}</p>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Deliverables</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.deliverables.map((item, i) => (
                                                        <span key={i} className="px-3 py-1 bg-[#F9F9FB] text-slate-700 text-xs font-medium rounded-full">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerWrap>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Flexible Pricing</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Engagement Models</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Choose the model that best fits your project needs and budget.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerWrap className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {[
                            {
                                title: 'Fixed Price',
                                description: 'Best for well-defined projects with clear scope and timeline.',
                                features: ['Predictable budget', 'Fixed timeline', 'Defined deliverables', 'Ideal for MVPs'],
                                ideal: 'Startups & MVPs'
                            },
                            {
                                title: 'Time & Materials',
                                description: 'Flexible approach for evolving requirements and ongoing projects.',
                                features: ['Hourly/monthly rates', 'Flexible scope', 'Transparent billing', 'Agile friendly'],
                                ideal: 'Growing Products',
                                featured: true
                            },
                            {
                                title: 'Dedicated Team',
                                description: 'Full-time resources dedicated to your project for long-term partnerships.',
                                features: ['Exclusive team', 'Scalable capacity', 'Full control', 'Long-term commitment'],
                                ideal: 'Enterprises'
                            }
                        ].map((model, index) => (
                            <StaggerItem key={index}>
                                <div className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${model.featured ? 'ring-2 ring-[#5F27CD] relative' : ''}`}>
                                    {model.featured && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{model.title}</h3>
                                    <p className="text-slate-600 mb-6">{model.description}</p>
                                    <ul className="space-y-3 mb-6 flex-1">
                                        {model.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-600">
                                                <CheckCircle size={18} className="text-[#00D2D3] flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-6 border-t border-slate-200">
                                        <div className="text-sm text-slate-500 mb-2">Ideal for</div>
                                        <div className="font-semibold text-[#5F27CD]">{model.ideal}</div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerWrap>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center text-white max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                            <p className="text-xl text-white/90 mb-8">
                                Let's discuss your project and find the perfect solution for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-[#5F27CD] px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
                                >
                                    Schedule Consultation <ArrowRight size={20} />
                                </a>
                                <a
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5F27CD] transition-colors"
                                >
                                    View Our Work
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default Services;
