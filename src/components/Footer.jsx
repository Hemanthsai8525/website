import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyDetails, services, navigation } from '../data';
import Logo from './Logo';
import { Linkedin, Mail, MapPin, Phone, ShieldCheck, Send, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email && accepted) {
            alert('Thank you for subscribing!');
            setEmail('');
            setAccepted(false);
        }
    };

    return (
        <footer className="bg-navy-900 border-t border-navy-800 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Newsletter Section - From Video */}
                <div className="bg-gradient-to-r from-[#5F27CD] to-[#00D2D3] rounded-2xl p-8 md:p-12 mb-16">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h3 className="text-3xl font-bold mb-3">
                            technology business idea for your success
                        </h3>
                        <p className="text-white/90 mb-8">
                            Subscribe to our newsletter and stay updated with the latest tech trends
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your mail"
                                    className="flex-1 px-6 py-4 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Subscribe <Send size={18} />
                                </button>
                            </div>

                            <label className="flex items-center gap-2 text-sm text-white/90 justify-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={accepted}
                                    onChange={(e) => setAccepted(e.target.checked)}
                                    className="w-4 h-4 rounded border-white/30"
                                    required
                                />
                                <span>I accept all terms and conditions</span>
                            </label>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Info */}
                    <div>
                        <Link to="/" className="mb-6 inline-block">
                            <div className="bg-white p-3 rounded-lg">
                                <Logo size={160} />
                            </div>
                        </Link>
                        <p className="text-slate-light mb-6 text-sm leading-relaxed">
                            {companyDetails.description}
                        </p>

                        {/* Social Media Icons */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
                            <div className="flex gap-3">
                                <a
                                    href={companyDetails.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href={companyDetails.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1DA1F2] flex items-center justify-center text-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href={companyDetails.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href={companyDetails.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] flex items-center justify-center text-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>
                        {/* Legal Entity Note */}
                        <div className="mt-6 pt-6 border-t border-navy-800">
                            <p className="text-xs text-slate-500">
                                Registered Entity: {companyDetails.legalName}<br />
                                Jurisdiction: {companyDetails.jurisdiction}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            {navigation.slice(0, 5).map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="text-slate-light hover:text-[#00D2D3] text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Expertise</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link to="/services" className="text-slate-light hover:text-[#00D2D3] text-sm transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - From Video */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-light text-sm">
                                <MapPin size={18} className="text-[#00D2D3] shrink-0 mt-1" />
                                <a
                                    href={companyDetails.mapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors hover:underline"
                                >
                                    {companyDetails.address}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-light text-sm">
                                <Mail size={18} className="text-[#00D2D3] shrink-0" />
                                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors">
                                    {companyDetails.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-light text-sm">
                                <Phone size={18} className="text-[#00D2D3] shrink-0" />
                                <a href={`tel:${companyDetails.phone}`} className="hover:text-white transition-colors">
                                    {companyDetails.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-light">
                    <p>&copy; {new Date().getFullYear()} {companyDetails.legalName}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0 items-center">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <div className="flex items-center gap-1 text-green-500/80 text-xs border border-green-500/30 px-2 py-1 rounded bg-green-500/10">
                            <ShieldCheck size={12} /> SSL Secured
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
