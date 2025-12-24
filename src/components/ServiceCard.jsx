import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="card group relative overflow-hidden h-full flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>

            <div className="relative z-10 flex-grow p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-navy-900 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative z-10 mt-auto pt-4 px-6 pb-6 border-t border-slate-100">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-navy-900 transition-colors"
                >
                    Learn more <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
