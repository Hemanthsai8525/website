import React from 'react';
import { companyDetails } from '../data';

const Logo = ({ size = 140, className = '' }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src="/offket-logo.png"
                alt="Offket IT Solutions"
                className="h-auto"
                style={{ width: `${size}px` }}
            />
        </div>
    );
};

export default Logo;
