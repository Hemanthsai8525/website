import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

export const PrivacyPolicy = () => {
    return (
        <>
            <SEO title="Privacy Policy" />
            <PageHeader title="Privacy Policy" />
            <section className="section-padding bg-navy-900">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
                        <p className="text-sm text-slate-400 mb-8">Last Updated: December 24, 2024</p>

                        <h3 className="text-white">1. Introduction</h3>
                        <p className="text-slate-light">
                            Offket Tech ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3 className="text-white mt-8">2. Information We Collect</h3>
                        <p className="text-slate-light">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="text-slate-light list-disc pl-5 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers provided via our contact forms.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
                        </ul>

                        <h3 className="text-white mt-8">3. How We Use Your Data</h3>
                        <p className="text-slate-light">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="text-slate-light list-disc pl-5 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3 className="text-white mt-8">4. Data Security</h3>
                        <p className="text-slate-light">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export const TermsConditions = () => {
    return (
        <>
            <SEO title="Terms & Conditions" />
            <PageHeader title="Terms & Conditions" />
            <section className="section-padding bg-navy-900">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
                        <p className="text-sm text-slate-400 mb-8">Last Updated: December 24, 2024</p>

                        <h3 className="text-white">1. Agreement to Terms</h3>
                        <p className="text-slate-light">
                            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Offket Tech ("we", "us", or "our"), concerning your access to and use of the Offket Tech website.
                        </p>

                        <h3 className="text-white mt-8">2. Intellectual Property Rights</h3>
                        <p className="text-slate-light">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>

                        <h3 className="text-white mt-8">3. Limitations of Liability</h3>
                        <p className="text-slate-light">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
                        </p>

                        <h3 className="text-white mt-8">4. Governing Law</h3>
                        <p className="text-slate-light">
                            These Terms shall be governed by and defined following the laws of India. Offket Tech and yourself irrevocably consent that the courts of Hyderabad, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
