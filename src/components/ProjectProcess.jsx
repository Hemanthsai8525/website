import React, { useState } from 'react';
import { StaggerWrap, StaggerItem, FadeIn } from './Animations';
import { Search, PenTool, Code, Send } from 'lucide-react';

const ProjectProcess = () => {
    const steps = [
        {
            id: '01',
            title: 'Research Project',
            description: 'We start by understanding your goals, market, and user needs to define a solid strategy.',
            icon: Search,
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: '02',
            title: 'Evaluate Plans',
            description: 'Our team analyzes technical requirements and creates a detailed roadmap for success.',
            icon: PenTool,
            color: 'from-purple-400 to-purple-600'
        },
        {
            id: '03',
            title: 'Best Results',
            description: 'We execute with precision, using agile methods to deliver high-quality, scalable code.',
            icon: Code,
            color: 'from-pink-400 to-pink-600'
        },
        {
            id: '04',
            title: 'Happy Customer',
            description: 'We ensure smooth deployment and provide ongoing support to guarantee your satisfaction.',
            icon: Send,
            color: 'from-teal-400 to-teal-600'
        }
    ];

    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0">
                <div
                    className="h-full bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] transition-all duration-1000 ease-out"
                    style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                ></div>
            </div>

            <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" staggerChildren={0.2}>
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index <= activeStep;

                    return (
                        <StaggerItem key={index}>
                            <div
                                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#00D2D3] h-full"
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                {/* Step Number Badge */}
                                <div className={`absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-colors duration-300 ${isActive ? 'bg-[#5F27CD]' : 'bg-slate-300'}`}>
                                    {step.id}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] text-white shadow-lg scale-110' : 'bg-slate-100 text-slate-400'}`}>
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-navy-900 mb-3 text-center group-hover:text-[#5F27CD] transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-600 text-sm text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </StaggerItem>
                    );
                })}
            </StaggerWrap>
        </div>
    );
};

export default ProjectProcess;
