import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1E1B2E] text-gray-400 py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-8 ">
            <p className="text-sm sm:text-base mb-2 sm:mb-0">© TeamVault Technologies. All rights reserved.</p>
            <a target='_blank' href="https://mahmoudfathy.vercel.app/" className="text-sm sm:text-base hover:text-purple-400 transition-colors duration-300">
                Created By Eng <span className="text-purple-600 font-semibold">Mahmoud Fathy</span>
            </a>
        </footer>
    );
};

export default Footer;
