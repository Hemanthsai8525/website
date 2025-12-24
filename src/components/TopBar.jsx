import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import { companyDetails } from '../data';

const TopBar = () => {
    const socialLinks = [
        { icon: Facebook, url: companyDetails.social.facebook, label: 'Facebook' },
        { icon: Twitter, url: companyDetails.social.twitter, label: 'Twitter' },
        { icon: Linkedin, url: companyDetails.social.linkedin, label: 'LinkedIn' },
        { icon: Instagram, url: companyDetails.social.instagram, label: 'Instagram' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 bg-[#5F27CD] text-white py-2 text-sm z-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                {/* Operating Hours */}
                <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="hidden sm:inline">Monday - Friday :</span>
                    <span className="font-medium">9:30 AM to 6:30 PM</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#00D2D3] transition-colors"
                                aria-label={social.label}
                            >
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
