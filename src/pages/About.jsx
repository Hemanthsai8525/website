import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Target, Users, Award, TrendingUp, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
import { FadeIn, StaggerWrap, StaggerItem } from '../components/Animations';
import { companyDetails } from '../data';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Offket IT Solutions's mission, values, and commitment to delivering enterprise-grade technology solutions."
            />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <div className="text-sm font-bold uppercase tracking-wider mb-4 text-[#00D2D3]">About Offket IT Solutions</div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Engineering Excellence, Delivered with Integrity
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                We're a specialized technology partner focused on building scalable, secure, and high-performance solutions for businesses that value quality and long-term stability.
                            </p>
                            <div className="grid grid-cols-3 gap-4 md:gap-8 text-white/90">
                                <div>
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">10+</div>
                                    <div className="text-xs md:text-sm">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">50+</div>
                                    <div className="text-xs md:text-sm">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">98%</div>
                                    <div className="text-xs md:text-sm">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-2xl"
                            />
                        </FadeIn>

                        <div>
                            <FadeIn delay={0.2}>
                                <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Our Philosophy</div>
                                <h2 className="text-4xl font-bold text-navy-900 mb-6">Engineering First, Always</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    We believe that great software is the result of disciplined engineering, not accidental success. Our mission is to provide businesses with predictable, high-quality technology outcomes.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    As a company, we value transparency above all else. We tell our clients what can be done, what cannot, and the realistic costs involved. This honesty is the foundation of our client relationships.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-[#F9F9FB] rounded-lg border-l-4 border-[#5F27CD]">
                                        <Target className="w-6 h-6 text-[#5F27CD] flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-navy-900 mb-1">Our Mission</h4>
                                            <p className="text-sm text-slate-600">To simplify complex digital transformation through rigorous engineering and ethical consulting.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-[#F9F9FB] rounded-lg border-l-4 border-[#00D2D3]">
                                        <TrendingUp className="w-6 h-6 text-[#00D2D3] flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-navy-900 mb-1">Our Vision</h4>
                                            <p className="text-sm text-slate-600">To be the preferred engineering partner for businesses that value quality, security, and long-term stability.</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">What Drives Us</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Core Values</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                These principles guide every decision we make and every line of code we write.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {[
                            {
                                icon: CheckCircle,
                                title: 'Quality Over Speed',
                                description: 'We prioritize doing things right over doing things fast. Sustainable code beats quick hacks.'
                            },
                            {
                                icon: Users,
                                title: 'Transparent Communication',
                                description: 'No jargon, no hidden costs. We explain technical decisions in plain language.'
                            },
                            {
                                icon: Award,
                                title: 'Continuous Learning',
                                description: 'Technology evolves rapidly. We invest in our team\'s growth and stay ahead of trends.'
                            },
                            {
                                icon: Target,
                                title: 'Client Success',
                                description: 'Your success is our success. We measure ourselves by the value we deliver.'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Scalability Mindset',
                                description: 'We build for tomorrow, not just today. Every solution is designed to grow with you.'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Security First',
                                description: 'Security isn\'t an afterthought. It\'s built into every layer from day one.'
                            }
                        ].map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <StaggerItem key={index}>
                                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white mb-6">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerWrap>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeIn>
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Company Information</div>
                            <h2 className="text-4xl font-bold text-navy-900 mb-6">Who We Are</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    <strong>{companyDetails.legalName}</strong> is an independent IT services firm based in {companyDetails.address}. Founded in {companyDetails.founded}, we specialize in software engineering, digital transformation, and cloud infrastructure.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    We operate on a <strong>{companyDetails.operatingModel}</strong> model, allowing us to work with clients globally while maintaining strong local presence in India.
                                </p>

                                <div className="space-y-4 not-prose">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <MapPin className="w-5 h-5 text-[#5F27CD]" />
                                        <span>{companyDetails.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <Mail className="w-5 h-5 text-[#5F27CD]" />
                                        <a href={`mailto:${companyDetails.email}`} className="hover:text-[#5F27CD] transition-colors">
                                            {companyDetails.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <Phone className="w-5 h-5 text-[#5F27CD]" />
                                        <a href={`tel:${companyDetails.phone}`} className="hover:text-[#5F27CD] transition-colors">
                                            {companyDetails.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] rounded-2xl p-8 text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                                <div className="space-y-6">
                                    <div className="border-b border-white/20 pb-4">
                                        <div className="text-sm text-white/80 mb-1">Legal Entity</div>
                                        <div className="font-semibold">{companyDetails.legalName}</div>
                                    </div>
                                    <div className="border-b border-white/20 pb-4">
                                        <div className="text-sm text-white/80 mb-1">Founded</div>
                                        <div className="font-semibold">{companyDetails.founded}</div>
                                    </div>
                                    <div className="border-b border-white/20 pb-4">
                                        <div className="text-sm text-white/80 mb-1">Jurisdiction</div>
                                        <div className="font-semibold">{companyDetails.jurisdiction}</div>
                                    </div>
                                    <div className="border-b border-white/20 pb-4">
                                        <div className="text-sm text-white/80 mb-1">Operating Model</div>
                                        <div className="font-semibold">{companyDetails.operatingModel}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/80 mb-1">Specialization</div>
                                        <div className="font-semibold">Software Engineering, Cloud Infrastructure, Digital Transformation</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center text-white max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ready to Work Together?</h2>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 px-4">
                                Let's discuss how we can help transform your business with technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-white text-[#5F27CD] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl text-center"
                                >
                                    Get in Touch
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-block bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg font-semibold hover:bg-white hover:text-[#5F27CD] transition-colors text-center"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default About;
