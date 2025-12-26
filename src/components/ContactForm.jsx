import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Using Web3Forms (Free email service)
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your key from web3forms.com
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: 'Offket Tech Website',
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });

                // Also log to console for debugging
                console.log('Form Submitted Successfully:', formData);
            } else {
                setStatus('error');
                console.error('Form submission failed:', result);
            }
        } catch (error) {
            setStatus('error');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>

            {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for contacting us. We will get back to you within 24 hours.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-[#5F27CD] hover:text-[#4A1FA3] underline font-medium"
                    >
                        Send another message
                    </button>
                </div>
            ) : status === 'error' ? (
                <div className="text-center py-12 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 text-red-500 mb-4">
                        <AlertCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2">Submission Failed</h4>
                    <p className="text-slate-600 mb-4">There was an error sending your message. Please try again or email us directly at hr@offkettech.com</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="text-[#5F27CD] hover:text-[#4A1FA3] underline font-medium"
                    >
                        Try again
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Business Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors"
                                placeholder="Acme Corp"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors"
                                placeholder="+91 9876543210"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Interested In *</label>
                        <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors"
                        >
                            <option value="">Select a Service</option>
                            <option value="web-mobile">Web & Mobile Development</option>
                            <option value="ai-ml">AI & Machine Learning</option>
                            <option value="cloud">Cloud & DevOps</option>
                            <option value="cybersecurity">Cybersecurity</option>
                            <option value="ui-ux">UI/UX Design</option>
                            <option value="enterprise">Enterprise Solutions</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-[#5F27CD] focus:ring-2 focus:ring-[#5F27CD]/20 transition-colors resize-none"
                            placeholder="Tell us about your project requirements..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-[#5F27CD] hover:bg-[#4A1FA3] text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                    >
                        {status === 'submitting' ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Request <Send size={18} />
                            </>
                        )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                        By submitting this form, you agree to our <a href="/privacy" className="text-[#5F27CD] hover:underline">Privacy Policy</a>
                    </p>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
