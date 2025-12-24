import React from 'react';
import { companyDetails } from '../data';

const Logo = ({ size = 140, mobileSize, className = '' }) => {
    // Use mobileSize if provided, otherwise use 60% of desktop size for mobile
    const mobileSizeValue = mobileSize || Math.round(size * 0.6);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src="/offket-logo.png"
                alt="Offket IT Solutions"
                className="h-auto"
                style={{
                    width: `${mobileSizeValue}px`,
                }}
            />
            <style jsx>{`
                @media (min-width: 768px) {
                    img {
                        width: ${size}px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Logo;
