import React from 'react';
import logo from '../assets/Logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Logo InCode */}
                    <div className="flex justify-center items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 w-auto transition-all duration-500 transform hover:scale-105"
                        />
                    </div>
                    {/* Copyright */}
                    <p className="text-sm">
                        &copy; 2024 InCode. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
