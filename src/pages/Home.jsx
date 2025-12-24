import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, FileText, Database, Phone, CheckCircle, Award, Users, ThumbsUp, Target, Lightbulb, Database as DataIcon, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CounterCard from '../components/CounterCard';
import VideoModal from '../components/VideoModal';
import TechIconBar from '../components/TechIconBar';
import ProjectProcess from '../components/ProjectProcess';
import BlogCard from '../components/BlogCard';
import { TextReveal, FadeIn, StaggerWrap, StaggerItem } from '../components/Animations';
import { services, companyDetails } from '../data';

const Home = () => {
    return (
        <>
            <SEO
                title="Transform Ideas into Technology | Offkettech"
                description="Enterprise IT Solutions: Web Development, AI/ML, Cloud Infrastructure, and Cybersecurity services from Hyderabad, India."
            />

            {/* HERO SECTION - Exact Match to Video */}
            <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5F27CD]/90 to-[#00D2D3]/70"></div>
                </div>

                {/* Floating Graphics */}
                <motion.div
                    className="absolute top-20 right-20 text-white/20"
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Code size={80} />
                </motion.div>
                <motion.div
                    className="absolute bottom-32 left-20 text-white/20"
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <FileText size={60} />
                </motion.div>
                <motion.div
                    className="absolute top-1/2 right-1/4 text-white/20"
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    <Database size={70} />
                </motion.div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-bold uppercase tracking-widest mb-4 text-[#00D2D3]"
                    >
                        WELCOME TO OFFKETTECH
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight"
                    >
                        We transform ideas <br className="hidden sm:block" />into <span className="text-[#00D2D3]">technology</span>
                    </motion.h1>

                    {/* Dual CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
                    >
                        <Link
                            to="/about"
                            className="w-full sm:w-auto bg-white text-[#5F27CD] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#00D2D3] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            Discover More <ArrowRight size={18} className="md:w-5 md:h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5F27CD] transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            Contact With Us <ArrowRight size={18} className="md:w-5 md:h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* GET TO KNOW US SECTION - Exact Content from Video */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Laptop Image */}
                        <FadeIn direction="right">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
                                    alt="AI Assistant Dashboard"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-[#5F27CD] text-white p-6 rounded-xl shadow-xl">
                                    <div className="text-3xl font-bold">10+</div>
                                    <div className="text-sm">Years Experience</div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right: Content - Exact from Video */}
                        <FadeIn direction="left" delay={0.2}>
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Get to Know Us</div>
                            <h2 className="text-4xl font-bold text-navy-900 mb-6 leading-tight">
                                Empowering Digital Transformation with Smart Software & Scalable Tech
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                At Offkettech, we craft powerful digital solutions tailored for the modern world. From building intuitive mobile apps and dynamic websites to deploying AI-driven platforms and secure cloud infrastructure — we help businesses evolve, scale, and lead through technology.
                            </p>

                            {/* Checklist - Exact from Video */}
                            <div className="space-y-4 mb-8">
                                {[
                                    'Custom Web & Mobile App Development',
                                    'AI & Machine Learning Solutions for Automation',
                                    'Enterprise-Grade Cloud & Cybersecurity Services',
                                    'UI/UX Engineering & Full-Stack Software Architecture'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#00D2D3] flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Snippet - Exact from Video */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white rounded-xl shadow-md">
                                <div className="flex-1">
                                    <div className="text-sm text-slate-500 mb-1">Call us free</div>
                                    <div className="text-2xl font-bold text-[#5F27CD] flex items-center gap-2">
                                        <Phone size={24} />
                                        {companyDetails.phone}
                                    </div>
                                </div>
                                <Link to="/about" className="bg-[#5F27CD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4A1FA3] transition-colors whitespace-nowrap">
                                    Discover More
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* OUR BEST SERVICES GRID - Premium Design */}
            <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-[#F9F9FB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-8 md:mb-12 lg:mb-16">
                            <motion.div
                                className="inline-block mb-3 md:mb-4"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] uppercase tracking-wider">
                                    What We Offer
                                </span>
                            </motion.div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-4 md:mb-6">
                                Our Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">Services</span>
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                                Enterprise-grade solutions powered by cutting-edge technology and delivered by expert teams
                            </p>
                        </div>
                    </FadeIn>

                    {/* Premium 3-Column Grid */}
                    <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {services.slice(0, 6).map((service, index) => {
                            const Icon = service.icon;
                            const gradients = [
                                'from-[#5F27CD] to-[#7C3AED]',
                                'from-[#00D2D3] to-[#06B6D4]',
                                'from-[#8B5CF6] to-[#A78BFA]',
                                'from-[#10B981] to-[#34D399]',
                                'from-[#F59E0B] to-[#FBBF24]',
                                'from-[#EF4444] to-[#F87171]'
                            ];

                            return (
                                <StaggerItem key={service.id}>
                                    <Link to="/services">
                                        <motion.div
                                            className="group relative h-full cursor-pointer"
                                            whileHover={{ y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                                                {/* Gradient Header with Icon */}
                                                <div className={`relative h-56 bg-gradient-to-br ${gradients[index]} flex items-center justify-center overflow-hidden`}>
                                                    {/* Animated Background */}
                                                    <motion.div
                                                        className="absolute inset-0 opacity-20"
                                                        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                                                        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                                                        style={{
                                                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                                            backgroundSize: '30px 30px'
                                                        }}
                                                    />

                                                    {/* Icon */}
                                                    <motion.div
                                                        className="relative z-10"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    >
                                                        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                            <Icon size={48} className="text-white" />
                                                        </div>
                                                    </motion.div>

                                                    {/* Number Badge */}
                                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                        <span className="text-white font-bold text-lg">0{index + 1}</span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-4 md:p-6 flex-1 flex flex-col">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-900 mb-2 md:mb-3 group-hover:text-[#5F27CD] transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3 md:mb-4 flex-1">
                                                        {service.description}
                                                    </p>

                                                    {/* Tech Tags */}
                                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                                                        {service.tech.slice(0, 3).map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 md:px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Learn More */}
                                                    <div className="flex items-center gap-2 text-[#5F27CD] font-semibold group-hover:gap-3 transition-all text-sm md:text-base">
                                                        <span>Learn More</span>
                                                        <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>

                                                {/* Hover Glow */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </StaggerItem>
                            );
                        })}
                    </StaggerWrap>

                    {/* View All CTA */}
                    <FadeIn delay={0.6}>
                        <div className="text-center mt-16">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                View All Services
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* HOW WE WORK - Our Development Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <motion.div
                                className="inline-block mb-4"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] uppercase tracking-wider">
                                    How We Work
                                </span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                                Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">Process</span>
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                A proven 4-step methodology that ensures quality, transparency, and timely delivery for every project
                            </p>
                        </div>
                    </FadeIn>
                    <ProjectProcess />
                </div>
            </section>

            {/* FAQ SECTION - Exact from Video */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Common Questions</div>
                            <h2 className="text-4xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Find answers to the most common questions about our services, process, and how we can help your business grow.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FAQAccordion />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* VIDEO & STATS SECTION - Exact from Video */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <VideoModal overlayText="We make the creative solutions for IT business!" />
                    </FadeIn>

                    {/* Stats Counters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <CounterCard end={20} suffix="+" label="Winning awards on solar" icon={Award} />
                        <CounterCard end={35} suffix="K" label="We have completed projects" icon={Users} />
                        <CounterCard end={98} suffix="%" label="Genuine positive feedback" icon={ThumbsUp} />
                    </div>
                </div>
            </section>

            {/* WHAT WE DEAL WITH - Exact from Video */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Our Expertise</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900">What we deal with</h2>
                    </div>
                    <TechIconBar />
                </div>
            </section>

            {/* HOW WE DO OUR PROJECTS - Animated Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Our Process</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">How We Do Our Projects</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                A proven 4-step process that ensures quality, transparency, and timely delivery
                            </p>
                        </div>
                    </FadeIn>
                    <ProjectProcess />
                </div>
            </section>

            {/* WHY WE ARE DIFFERENT - Exact from Video */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Our Advantage</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Why we are different</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Target,
                                title: 'End to end development',
                                description: 'We build complete digital products — from concept to scalable deployment.'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Technology source',
                                description: 'We help you choose, integrate, and manage the right tech stack for success.'
                            },
                            {
                                icon: DataIcon,
                                title: 'Information manage',
                                description: 'Organize, secure, and make sense of your business data with ease.'
                            },
                            {
                                icon: Network,
                                title: 'Network business',
                                description: 'Boost your operations with smart, connected systems that grow with you.'
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="text-center p-8 bg-[#F9F9FB] rounded-xl hover:shadow-xl transition-shadow duration-300">
                                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] rounded-full flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS - Exact from Video */}
            <section className="py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Client Feedback</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900">What Our Clients Say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sai Ram', role: 'CEO, Tech Startup', avatar: 'SR' },
                            { name: 'Nick Jonas', role: 'Product Manager', avatar: 'NJ' },
                            { name: 'Jibon Pilsberg', role: 'CTO, Enterprise', avatar: 'JP' }
                        ].map((person, index) => (
                            <FadeIn key={index} delay={index * 0.15}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                    {/* 5 Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 italic mb-6 leading-relaxed">
                                        "We've been working with Evolve for over a year now and we're happy with the results."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#5F27CD] text-white flex items-center justify-center font-bold">
                                            {person.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-navy-900">{person.name}</div>
                                            <div className="text-sm text-slate-500">{person.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG SECTION - Exact from Video */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <div className="text-sm font-bold text-[#5F27CD] uppercase tracking-wider mb-3">Latest Insights</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">From Our Blog</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Stay updated with the latest trends in technology and digital transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <BlogCard
                            title="AI and Machine Learning: Transforming Startup Operations in 2024"
                            author="Tech Insights Team"
                            date="15 December, 2024"
                            excerpt="Discover how AI startups are leveraging machine learning for automation, predictive analytics, and personalized customer experiences. Over $100B invested globally in AI this year."
                            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                            slug="ai-machine-learning-2024"
                        />
                        <BlogCard
                            title="Cloud Computing Strategies for Scalable Startup Growth"
                            author="DevOps Weekly"
                            date="10 December, 2024"
                            excerpt="Learn how serverless computing, Kubernetes orchestration, and edge computing are enabling startups to scale efficiently without massive upfront infrastructure costs."
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                            slug="cloud-computing-strategies"
                        />
                        <BlogCard
                            title="Software Development Best Practices: From MVP to Enterprise Scale"
                            author="Engineering Digest"
                            date="5 December, 2024"
                            excerpt="Explore Agile methodologies, DevSecOps integration, and multi-platform frameworks like React Native that are helping startups build scalable, secure applications faster."
                            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                            slug="software-development-best-practices"
                        />
                    </div>

                    <div className="text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 bg-[#5F27CD] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4A1FA3] transition-colors shadow-lg"
                        >
                            View All Posts <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
