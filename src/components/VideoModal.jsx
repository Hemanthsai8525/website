import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ videoUrl = "https://www.youtube.com/embed/lMJImKo-eZU", overlayText }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Video Section with Play Button */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setIsOpen(true)}>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5F27CD]/80 to-[#00D2D3]/60"></div>

                {/* Overlay Text */}
                {overlayText && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white text-4xl md:text-5xl font-bold text-center px-6 mb-20">
                            {overlayText}
                        </h3>
                    </div>
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:bg-[#00D2D3] transition-colors duration-300"
                    >
                        <Play className="w-12 h-12 text-[#5F27CD] ml-1 group-hover:text-white transition-colors" fill="currentColor" />
                    </motion.div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* Video Iframe */}
                            <iframe
                                className="w-full h-full"
                                src={videoUrl}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VideoModal;
