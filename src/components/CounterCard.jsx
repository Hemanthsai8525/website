import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CounterCard = ({ end, suffix = '', label, icon: Icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const duration = 2000; // 2 seconds
        const startValue = 0;
        const endValue = parseInt(end);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuad = progress * (2 - progress);
            const currentCount = Math.floor(easeOutQuad * (endValue - startValue) + startValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
            {Icon && (
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                </div>
            )}
            <div className="text-5xl font-bold text-[#5F27CD] mb-2">
                {count}{suffix}
            </div>
            <div className="text-slate-600 font-medium">{label}</div>
        </motion.div>
    );
};

export default CounterCard;
