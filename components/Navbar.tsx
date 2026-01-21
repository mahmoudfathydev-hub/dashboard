import React from 'react';

const Navbar = () => {
    return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-[#3c3855d3] via-[#2C2940] to-[#131022] px-4 sm:px-8 py-3 flex items-center justify-between shadow-md z-100">
            <div className="flex items-center">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-36 h-12 object-contain transition-transform duration-300 scale-450"
                />
            </div>
            <div>
                <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-purple-500 transition-colors duration-300">
                    Talk Support
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
