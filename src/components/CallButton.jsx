import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallButton = ({ phoneNumber = '+918106886572' }) => {
    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <motion.button
            onClick={handleClick}
            className="fixed bottom-24 left-4 md:left-6 z-50 bg-gradient-to-r from-[#5F27CD] to-[#7C3AED] text-white px-3 py-3 md:px-6 md:py-3 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 hover:from-[#4A1FA3] hover:to-[#6B21A8] transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
        >
            <div className="relative">
                <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                    <Phone size={20} className="md:w-6 md:h-6" fill="currentColor" />
                </motion.div>
                <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <span className="font-semibold hidden md:inline text-sm">Call Us Now</span>
        </motion.button>
    );
};

export default CallButton;
