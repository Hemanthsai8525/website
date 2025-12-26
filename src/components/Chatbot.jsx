import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyDetails, services } from '../data';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'Hello! 👋 I\'m the Offket IT Solutions AI Assistant. I can tell you everything about our company, services, technologies, and more. How can I help you today?',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Comprehensive knowledge base
    const knowledgeBase = {
        // Company Info
        company: {
            keywords: ['company', 'about', 'who are you', 'offkettech', 'what do you do', 'tell me about'],
            response: `Offket IT Solutions (${companyDetails.legalName}) is a professional IT services company based in ${companyDetails.address}. Founded in ${companyDetails.founded}, we specialize in:\n\n• Web & Mobile Development\n• AI & Machine Learning\n• Cloud & DevOps\n• Cybersecurity\n• UI/UX Design\n\nWe follow a ${companyDetails.operatingModel} model and are strictly vendor-agnostic, choosing the right technology for each project.`
        },

        // Services
        services: {
            keywords: ['service', 'what services', 'what do you offer', 'capabilities', 'expertise'],
            response: `We offer ${services.length} core services:\n\n${services.map((s, i) => `${i + 1}. **${s.title}**\n   ${s.description}\n   Technologies: ${s.tech.join(', ')}`).join('\n\n')}\n\nWhich service would you like to know more about?`
        },

        // Web & Mobile
        webMobile: {
            keywords: ['web development', 'mobile app', 'react', 'react native', 'website', 'app development'],
            response: `Our Web & Mobile Development services include:\n\n✅ Custom web applications using React & TypeScript\n✅ Cross-platform mobile apps with React Native\n✅ Progressive Web Apps (PWAs)\n✅ E-commerce platforms\n✅ Enterprise dashboards\n\n**Technologies:** React, Next.js, React Native, Node.js, TypeScript, PostgreSQL\n\n**Benefits:**\n• Scalable architecture\n• Type-safe code\n• Performance optimized\n• SEO friendly\n\nWould you like to discuss a project?`
        },

        // AI & ML
        aiMl: {
            keywords: ['ai', 'machine learning', 'artificial intelligence', 'ml', 'data science', 'automation'],
            response: `Our AI & Machine Learning solutions:\n\n🤖 **Services:**\n• Predictive analytics\n• Process automation\n• Natural Language Processing (NLP)\n• Computer Vision\n• Custom model training\n• ChatGPT/OpenAI integration\n\n**Technologies:** Python, TensorFlow, PyTorch, OpenAI API, Pandas, Scikit-learn\n\n**Use Cases:**\n• Customer behavior prediction\n• Automated document processing\n• Chatbots & virtual assistants\n• Image recognition\n• Recommendation systems\n\nInterested in AI for your business?`
        },

        // Cloud & DevOps
        cloud: {
            keywords: ['cloud', 'devops', 'aws', 'kubernetes', 'docker', 'infrastructure', 'deployment'],
            response: `Cloud & Infrastructure Services:\n\n☁️ **Offerings:**\n• AWS/Azure/GCP architecture\n• Kubernetes orchestration\n• CI/CD pipeline setup\n• Infrastructure as Code (Terraform)\n• Serverless solutions\n• Auto-scaling systems\n\n**Technologies:** AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions\n\n**Benefits:**\n• 99.9% uptime\n• Cost optimization\n• Automated deployments\n• Disaster recovery\n• Security compliance\n\nNeed help with cloud migration?`
        },

        // Cybersecurity
        security: {
            keywords: ['security', 'cybersecurity', 'penetration testing', 'vulnerability', 'secure', 'protection'],
            response: `Cybersecurity & Compliance:\n\n🔒 **Services:**\n• Vulnerability assessments\n• Penetration testing\n• Security code reviews\n• OWASP Top 10 compliance\n• Security audits\n• Incident response\n\n**Technologies:** Burp Suite, SonarQube, OAuth 2.0, SSL/TLS\n\n**Compliance:**\n• GDPR ready\n• ISO 27001 practices\n• PCI DSS for payments\n• HIPAA for healthcare\n\nProtect your business with enterprise-grade security!`
        },

        // UI/UX
        uiux: {
            keywords: ['design', 'ui', 'ux', 'user interface', 'user experience', 'figma', 'prototype'],
            response: `Product Design (UI/UX):\n\n🎨 **Services:**\n• User research & personas\n• Wireframing & prototyping\n• Design systems\n• Accessibility (WCAG) compliance\n• Usability testing\n• Brand identity\n\n**Tools:** Figma, Adobe XD, Sketch\n\n**Deliverables:**\n• Interactive prototypes\n• Design system documentation\n• Component libraries\n• Style guides\n\nCreate delightful user experiences!`
        },

        // Technologies
        technologies: {
            keywords: ['technology', 'tech stack', 'programming languages', 'frameworks', 'tools'],
            response: `Our Technology Stack:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Python, Java, Go\n**Mobile:** React Native, Flutter\n**Databases:** PostgreSQL, MongoDB, Redis\n**Cloud:** AWS, Azure, Google Cloud\n**DevOps:** Docker, Kubernetes, Terraform, Jenkins\n**AI/ML:** TensorFlow, PyTorch, OpenAI\n\nWe're vendor-agnostic and choose the best tool for each job!`
        },

        // Pricing
        pricing: {
            keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'quote', 'estimate'],
            response: `Pricing & Engagement Models:\n\n💰 **We offer flexible pricing:**\n\n1. **Fixed Price Projects**\n   • Clear scope & timeline\n   • Predictable budget\n   • Ideal for MVPs\n\n2. **Time & Materials**\n   • Hourly/monthly rates\n   • Flexible scope\n   • Ongoing projects\n\n3. **Dedicated Team**\n   • Full-time resources\n   • Long-term partnerships\n   • Scalable capacity\n\n**Pricing varies based on:**\n• Project complexity\n• Technology stack\n• Team size\n• Timeline\n\nContact us for a custom quote:\n📧 ${companyDetails.email}\n📞 ${companyDetails.phone}`
        },

        // Portfolio
        portfolio: {
            keywords: ['portfolio', 'projects', 'case studies', 'work', 'examples', 'clients'],
            response: `Our Portfolio:\n\n📊 **Recent Projects:**\n\n1. **FinTech Platform**\n   • Microservices architecture\n   • 40% performance improvement\n   • Technologies: Java, Spring Boot, Kafka, AWS\n\n2. **HealthTech AI Diagnostics**\n   • 88% accuracy in X-ray analysis\n   • Clinical trial phase\n   • Technologies: Python, TensorFlow, React\n\n3. **E-commerce Re-platforming**\n   • 60% faster load times\n   • Mobile-first design\n   • Technologies: Next.js, Shopify, Stripe\n\nVisit our Portfolio page for detailed case studies!`
        },

        // Contact
        contact: {
            keywords: ['contact', 'reach', 'email', 'phone', 'call', 'address', 'location', 'office'],
            response: `Get in Touch:\n\n📧 **Email:** ${companyDetails.email}\n📞 **Phone:** ${companyDetails.phone}\n📍 **Location:** ${companyDetails.address}\n\n⏰ **Hours:** Monday - Friday, 9:30 AM to 6:30 PM IST\n\n🔗 **Connect:**\nLinkedIn: ${companyDetails.social.linkedin}\n\nYou can also:\n• Fill out our contact form\n• Chat with us on WhatsApp (green button)\n• Schedule a free consultation\n\nWe typically respond within 24 hours!`
        },

        // Process
        process: {
            keywords: ['process', 'how do you work', 'methodology', 'workflow', 'approach'],
            response: `Our Development Process:\n\n1. **Discovery & Planning** 🔍\n   • Requirement analysis\n   • Technical feasibility\n   • Project roadmap\n\n2. **Design & Prototyping** 🎨\n   • UI/UX design\n   • Architecture planning\n   • Stakeholder approval\n\n3. **Development** 💻\n   • Agile sprints (2 weeks)\n   • Code reviews\n   • Continuous testing\n\n4. **Testing & QA** ✅\n   • Automated testing\n   • Security audits\n   • Performance optimization\n\n5. **Deployment & Support** 🚀\n   • Production deployment\n   • Monitoring setup\n   • Ongoing maintenance\n\nWe follow Agile/Scrum methodologies with full transparency!`
        },

        // Team
        team: {
            keywords: ['team', 'developers', 'engineers', 'who works', 'staff', 'employees'],
            response: `Our Team:\n\n👥 **Expertise:**\n• Senior Full-Stack Developers\n• AI/ML Engineers\n• Cloud Architects\n• DevOps Specialists\n• UI/UX Designers\n• QA Engineers\n• Project Managers\n\n**Experience:**\n• 10+ years average experience\n• Worked with Fortune 500 companies\n• Startup veterans\n• Open-source contributors\n\n**Certifications:**\n• AWS Certified\n• Google Cloud Professional\n• Certified Kubernetes Administrator\n• Scrum Master Certified\n\nWe're a team of passionate technologists!`
        },

        // Why Choose Us
        why: {
            keywords: ['why choose', 'why offkettech', 'what makes you different', 'advantages', 'benefits'],
            response: `Why Choose Offket IT Solutions?\n\n⭐ **Our Differentiators:**\n\n1. **Vendor Agnostic**\n   • Best tool for the job\n   • No bias or lock-in\n\n2. **Transparent Communication**\n   • Daily updates\n   • Full project visibility\n   • No hidden costs\n\n3. **Quality First**\n   • 80%+ test coverage\n   • Code reviews mandatory\n   • Security built-in\n\n4. **Scalable Solutions**\n   • Built for growth\n   • Performance optimized\n   • Future-proof architecture\n\n5. **Post-Launch Support**\n   • 24/7 monitoring\n   • Quick bug fixes\n   • Feature enhancements\n\n6. **Competitive Pricing**\n   • Flexible models\n   • No upfront fees\n   • ROI focused\n\nLet's build something amazing together!`
        },

        // Industries
        industries: {
            keywords: ['industry', 'sector', 'domain', 'vertical', 'fintech', 'healthcare', 'ecommerce'],
            response: `Industries We Serve:\n\n🏦 **FinTech**\n• Payment gateways\n• Trading platforms\n• Banking apps\n\n🏥 **HealthTech**\n• Telemedicine\n• AI diagnostics\n• Patient portals\n\n🛒 **E-commerce**\n• Online stores\n• Marketplaces\n• Inventory systems\n\n📚 **EdTech**\n• Learning platforms\n• Course management\n• Virtual classrooms\n\n🏢 **Enterprise**\n• CRM systems\n• ERP solutions\n• Business intelligence\n\nWe adapt to any industry with domain expertise!`
        }
    };

    const findBestMatch = (userInput) => {
        const input = userInput.toLowerCase();

        // Check each knowledge category
        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (data.keywords.some(keyword => input.includes(keyword))) {
                return data.response;
            }
        }

        // Default response
        return `I can help you with:\n\n• Company information\n• Services we offer\n• Technologies we use\n• Pricing & engagement models\n• Our portfolio & case studies\n• Contact information\n• Development process\n• Industries we serve\n\nWhat would you like to know?`;
    };

    const quickReplies = [
        { text: '🏢 About Company', query: 'Tell me about Offket IT Solutions' },
        { text: '⚙️ Services', query: 'What services do you offer?' },
        { text: '💰 Pricing', query: 'How much does it cost?' },
        { text: '📞 Contact', query: 'How can I contact you?' },
        { text: '🚀 Technologies', query: 'What technologies do you use?' },
        { text: '📊 Portfolio', query: 'Show me your portfolio' }
    ];

    const handleQuickReply = (reply) => {
        handleUserMessage(reply.query);
    };

    const handleUserMessage = (messageText) => {
        const userMsg = {
            type: 'user',
            text: messageText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = findBestMatch(messageText);
            const botMsg = {
                type: 'bot',
                text: botResponse,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        handleUserMessage(inputMessage);
        setInputMessage('');
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} className="md:w-7 md:h-7" /> : <MessageCircle size={24} className="md:w-7 md:h-7" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-pulse"></span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-20 md:bottom-24 right-2 md:right-6 z-50 w-[calc(100vw-1rem)] md:w-[420px] h-[500px] md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] text-white p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={20} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold">Offket IT Solutions AI Assistant</h3>
                                <p className="text-xs text-white/80 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Online • Ask me anything!
                                </p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] ${msg.type === 'user' ? 'bg-[#5F27CD] text-white' : 'bg-white text-slate-800 border border-slate-200'} rounded-2xl px-4 py-3 shadow-sm`}>
                                        <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                                        <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-white/70' : 'text-slate-400'}`}>{msg.time}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        {messages.length <= 2 && (
                            <div className="p-4 bg-white border-t border-slate-200">
                                <p className="text-xs text-slate-500 mb-2 font-medium">Quick questions:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickReplies.map((reply, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickReply(reply)}
                                            className="px-3 py-2 bg-slate-100 hover:bg-[#5F27CD] hover:text-white text-xs rounded-lg transition-colors text-left font-medium"
                                        >
                                            {reply.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 px-4 py-2.5 border border-slate-300 rounded-full focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!inputMessage.trim()}
                                className="w-10 h-10 bg-[#5F27CD] text-white rounded-full flex items-center justify-center hover:bg-[#4A1FA3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
