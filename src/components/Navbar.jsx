import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navigation, companyDetails } from '../data';
import Logo from './Logo';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={clsx(
            'fixed w-full z-40 transition-all duration-300 border-b top-[40px]',
            scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-2'
                : 'bg-white border-transparent py-4'
        )}>
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center">
                <Link to="/" className="hover:opacity-90 transition-opacity">
                    {/* Use light theme logo for white background */}
                    <Logo size={200} mobileSize={120} theme="light" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-secondary',
                                location.pathname === item.href ? 'text-secondary' : 'text-slate-600'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-[#5F27CD] hover:bg-[#4A1FA3] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                    >
                        Get Started <ChevronRight size={16} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-navy-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={clsx(
                'fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 pt-24 px-6',
                isOpen ? 'translate-x-0' : 'translate-x-full'
            )}>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link to="/" className="flex items-center">
                            <Logo size={180} />
                        </Link>
                    </div>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={clsx(
                                'text-xl font-medium border-b border-slate-100 pb-4',
                                location.pathname === item.href ? 'text-secondary' : 'text-slate-600'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-primary text-center mt-4"
                    >
                        Request Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
