import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#5F27CD] transition-colors group"
            >
                <span className="text-lg font-semibold text-navy-900 group-hover:text-[#5F27CD] pr-8">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-6 h-6 text-[#5F27CD]" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does it generate make responses?",
            answer: "Our tools are easy to use and affordable, so you can start improving your website's SEO today."
        },
        {
            question: "Do I get all the demos and templates with it?",
            answer: "Yes, you get access to all demos and templates included in your package. We provide comprehensive documentation and support to help you get started quickly."
        },
        {
            question: "How do you find different criteria in your process?",
            answer: "We follow a systematic approach that includes discovery, analysis, design, development, and deployment phases. Each phase has specific criteria and checkpoints to ensure quality."
        },
        {
            question: "What do I need to apply for an account?",
            answer: "You can apply for an account by contacting us through our contact form or email. We'll guide you through the onboarding process and requirements."
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
            ))}
        </div>
    );
};

export default FAQAccordion;
