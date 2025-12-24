import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ phoneNumber = '+918106886572', message = 'Hello! I would like to know more about your services.' }) => {
    const handleClick = () => {
        // Format phone number (remove spaces, dashes, etc.)
        const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.button
            onClick={handleClick}
            className="fixed bottom-6 left-4 md:left-6 z-50 bg-[#25D366] text-white px-3 py-3 md:px-6 md:py-3 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 hover:bg-[#20BA5A] transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="relative">
                <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></span>
            </div>
            <span className="font-semibold hidden md:inline text-sm">Chat on WhatsApp</span>
        </motion.button>
    );
};

export default WhatsAppButton;
