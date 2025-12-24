import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Palette, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const ProjectProcess = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: '01',
            icon: Search,
            title: 'Discovery & Planning',
            subtitle: 'Understanding Your Vision',
            description: 'We start by diving deep into your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed roadmap.',
            color: 'from-[#5F27CD] to-[#7C3AED]',
            highlights: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning']
        },
        {
            number: '02',
            icon: Palette,
            title: 'Design & Prototyping',
            subtitle: 'Bringing Ideas to Life',
            description: 'Our designers create stunning UI/UX designs and interactive prototypes. We ensure every pixel is perfect before moving to development.',
            color: 'from-[#00D2D3] to-[#06B6D4]',
            highlights: ['Wireframing', 'UI/UX Design', 'Interactive Prototypes', 'Design System']
        },
        {
            number: '03',
            icon: Code,
            title: 'Development',
            subtitle: 'Building with Excellence',
            description: 'Our expert developers write clean, scalable code using the latest technologies. We follow Agile methodology with 2-week sprints and regular demos.',
            color: 'from-[#8B5CF6] to-[#A78BFA]',
            highlights: ['Agile Sprints', 'Code Reviews', 'Continuous Testing', 'Regular Demos']
        },
        {
            number: '04',
            icon: Rocket,
            title: 'Launch & Support',
            subtitle: 'Going Live Successfully',
            description: 'We handle deployment, monitoring setup, and provide ongoing support. Your success is our priority even after launch.',
            color: 'from-[#10B981] to-[#34D399]',
            highlights: ['Production Deployment', '24/7 Monitoring', 'Bug Fixes', 'Feature Updates']
        }
    ];

    return (
        <div className="relative">
            {/* Progress Bar */}
            <div className="flex justify-between mb-16 relative">
                {/* Background Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200"></div>

                {/* Active Progress Line */}
                <motion.div
                    className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />

                {/* Step Circles */}
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === activeStep;
                    const isCompleted = index < activeStep;

                    return (
                        <motion.button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className="relative z-10 flex flex-col items-center gap-3 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Circle */}
                            <motion.div
                                className={`
                                    w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                                    ${isActive || isCompleted
                                        ? 'bg-gradient-to-br ' + step.color + ' shadow-xl'
                                        : 'bg-white border-2 border-slate-300 group-hover:border-[#5F27CD]'
                                    }
                                `}
                                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                {isCompleted ? (
                                    <CheckCircle className="text-white" size={28} />
                                ) : (
                                    <Icon
                                        className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#5F27CD]'}
                                        size={28}
                                    />
                                )}
                            </motion.div>

                            {/* Step Number */}
                            <span className={`
                                text-xs font-bold transition-colors
                                ${isActive ? 'text-[#5F27CD]' : 'text-slate-400'}
                            `}>
                                STEP {step.number}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                >
                    <div className={`
                        bg-gradient-to-br ${steps[activeStep].color}
                        rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden
                    `}>
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                                style={{
                                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                    backgroundSize: '50px 50px'
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start gap-6 mb-8">
                                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                    {React.createElement(steps[activeStep].icon, {
                                        size: 40,
                                        className: "text-white"
                                    })}
                                </div>
                                <div className="flex-1">
                                    <div className="text-white/80 text-sm font-semibold mb-2">
                                        {steps[activeStep].subtitle}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-3">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        {steps[activeStep].description}
                                    </p>
                                </div>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {steps[activeStep].highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                                    >
                                        <CheckCircle className="text-white mx-auto mb-2" size={20} />
                                        <span className="text-white text-sm font-medium">
                                            {highlight}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-slate-600 hover:text-[#5F27CD]"
                >
                    <ArrowRight size={20} className="rotate-180" />
                    Previous
                </button>

                <div className="flex gap-2">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${index === activeStep ? 'w-8 bg-[#5F27CD]' : 'w-2 bg-slate-300'}
                            `}
                        />
                    ))}
                </div>

                <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-slate-600 hover:text-[#5F27CD]"
                >
                    Next
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProjectProcess;
