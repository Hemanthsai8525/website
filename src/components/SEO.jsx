import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        // Update Title
        document.title = title ? `${title} | Offket IT Solutions` : 'Offket IT Solutions | Enterprise IT Services';

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Offket IT Solutions provides enterprise-grade software engineering, cloud infrastructure, and AI solutions.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description || 'Offket IT Solutions provides enterprise-grade software engineering, cloud infrastructure, and AI solutions.';
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
