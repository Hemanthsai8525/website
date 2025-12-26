import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, Linkedin } from 'lucide-react';
import { FadeIn } from '../components/Animations';
import { companyDetails } from '../data';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Offket IT Solutions. We're here to help with your technology needs."
            />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-[#00D2D3]">Get In Touch</div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Let's Start a Conversation
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-4">
                                Have a project in mind? We'd love to hear about it. Fill out the form below or reach out directly.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 md:py-16 lg:py-24 bg-[#F9F9FB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <FadeIn>
                                <div>
                                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Contact Information</h2>
                                    <p className="text-slate-600 mb-8">
                                        We typically respond within 24 hours. For urgent inquiries, please call us directly.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <a
                                        href={companyDetails.mapsLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1 group-hover:text-[#5F27CD] transition-colors">Office Location</h3>
                                            <p className="text-sm text-slate-600">{companyDetails.address}</p>
                                            <p className="text-xs text-[#5F27CD] mt-1">Click to view on Google Maps →</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1">Email Address</h3>
                                            <a href={`mailto:${companyDetails.email}`} className="text-sm text-[#5F27CD] hover:underline">
                                                {companyDetails.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1">Phone Number</h3>
                                            <a href={`tel:${companyDetails.phone}`} className="text-sm text-[#5F27CD] hover:underline">
                                                {companyDetails.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1">Business Hours</h3>
                                            <p className="text-sm text-slate-600">Monday - Friday</p>
                                            <p className="text-sm text-slate-600">9:30 AM to 6:30 PM IST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5F27CD] to-[#00D2D3] flex items-center justify-center text-white flex-shrink-0">
                                            <Linkedin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1">LinkedIn</h3>
                                            <a
                                                href={companyDetails.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[#5F27CD] hover:underline"
                                            >
                                                Connect with us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <FadeIn delay={0.2}>
                                <ContactForm />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-navy-900 mb-4">Visit Our Office</h2>
                            <p className="text-slate-600 text-lg">
                                We're located in the heart of Hyderabad's tech hub
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8825!2d78.3608!3d17.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sPranava%20Business%20Park!5e0!3m2!1sen!2sin!4v1703427890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Offket IT Solutions Office Location - Pranava Business Park, Kondapur"
                            ></iframe>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#5F27CD] to-[#00D2D3]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <FadeIn>
                        <div className="text-center text-white max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Prefer to Chat?</h2>
                            <p className="text-xl text-white/90 mb-8">
                                Click the WhatsApp button (bottom left) or the chatbot (bottom right) for instant support!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`https://wa.me/${companyDetails.phone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors shadow-xl"
                                >
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href={`mailto:${companyDetails.email}`}
                                    className="inline-block bg-white text-[#5F27CD] px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
                                >
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default Contact;
