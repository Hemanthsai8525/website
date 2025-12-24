import React from 'react';
import clsx from 'clsx';

const SectionHeader = ({ title, subtitle, center = false, className }) => {
    return (
        <div className={clsx('mb-12 md:mb-16', center && 'text-center', className)}>
            <h2 className="text-secondary font-medium tracking-wide text-sm uppercase mb-3">
                {subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 capitalize leading-tight">
                {title}
            </h3>
            <div className={clsx(
                "h-1 w-20 bg-secondary mt-4 rounded",
                center && "mx-auto"
            )}></div>
        </div>
    );
};

export default SectionHeader;
