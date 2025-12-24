import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Staggered Container for children elements
export const StaggerWrap = ({ children, className = "", delay = 0, staggerChildren = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: delay,
                        staggerChildren: staggerChildren
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

// Child item for StaggerWrap
export const StaggerItem = ({ children, className = "" }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

// Parallax Image Wrapper
export const ParallaxImage = ({ src, alt, className = "", height = "400px" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to a vertical translation for the image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`} style={{ height }}>
            <motion.div style={{ y, height: "120%", width: "100%", position: "absolute", top: "-10%" }}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    );
};

// Text Reveal Effect (Characters/Words)
export const TextReveal = ({ text, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Splitting by words for smoother performance than characters
    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{ duration: 0.5, delay: delay + (i * 0.03), ease: [0.33, 1, 0.68, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...directionOffset[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
            transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
