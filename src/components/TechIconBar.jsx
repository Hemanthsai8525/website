import React, { useState } from 'react';
import { Monitor, Watch, Smartphone, Shield, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TechIconBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const techCategories = [
        {
            icon: Monitor,
            label: 'Website',
            color: 'from-[#5F27CD] to-[#7C3AED]',
            description: 'Applies deep technological expertise in machine learning and artificial intelligence development services to help clients deliver personalization and customer convenience at scale.'
        },
        {
            icon: Watch,
            label: 'Wearable',
            color: 'from-[#00D2D3] to-[#06B6D4]',
            description: 'Building smart wearable solutions that integrate seamlessly with IoT ecosystems and provide real-time data insights.'
        },

        {
            icon: Smartphone,
            label: 'Android',
            color: 'from-[#10B981] to-[#34D399]',
            description: 'Creating native Android applications with optimal performance, security, and user experience.'
        },
        {
            icon: Shield,
            label: 'ISO',
            color: 'from-[#F59E0B] to-[#FBBF24]',
            description: 'Implementing ISO-compliant security standards and quality management systems for enterprise applications.'
        },
        {
            icon: Network,
            label: 'ITO',
            color: 'from-[#EF4444] to-[#F87171]',
            description: 'Providing comprehensive IT outsourcing services with dedicated teams and flexible engagement models.'
        }
    ];

    return (
        <div>
            {/* Icon Bar with Gradient Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
                {techCategories.map((tech, index) => {
                    const Icon = tech.icon;
                    const isActive = activeIndex === index;

                    return (
                        <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <div className={`
                                relative overflow-hidden rounded-2xl p-8 transition-all duration-300
                                ${isActive
                                    ? 'bg-gradient-to-br ' + tech.color + ' shadow-2xl'
                                    : 'bg-white shadow-md hover:shadow-xl'
                                }
                            `}>
                                {/* Animated Background Glow */}
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br opacity-50 blur-xl"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                )}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className={`
                                        w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                                        ${isActive
                                            ? 'bg-white/20 backdrop-blur-sm'
                                            : 'bg-gradient-to-br ' + tech.color
                                        }
                                    `}>
                                        <Icon
                                            size={32}
                                            className={isActive ? 'text-white' : 'text-white'}
                                        />
                                    </div>
                                    <span className={`
                                        font-bold text-base transition-colors duration-300
                                        ${isActive ? 'text-white' : 'text-navy-900'}
                                    `}>
                                        {tech.label}
                                    </span>
                                </div>

                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Description with Enhanced Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative"
                >
                    <div className={`
                        bg-gradient-to-br ${techCategories[activeIndex].color} 
                        rounded-2xl p-8 md:p-12 shadow-2xl
                    `}>
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                {React.createElement(techCategories[activeIndex].icon, {
                                    size: 40,
                                    className: "text-white"
                                })}
                                <h3 className="text-3xl font-bold text-white">
                                    {techCategories[activeIndex].label}
                                </h3>
                            </div>
                            <p className="text-white/95 text-lg leading-relaxed">
                                {techCategories[activeIndex].description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TechIconBar;
