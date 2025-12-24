import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-600 overflow-x-hidden">
            <TopBar />
            <Navbar />
            <main className="flex-grow pt-[120px]">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />

            {/* Floating Chat & Call Widgets */}
            <CallButton />
            <WhatsAppButton />
            <Chatbot />
        </div>
    );
};

export default Layout;
