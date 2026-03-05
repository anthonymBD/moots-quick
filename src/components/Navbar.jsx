import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 sm:h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/images/logoMoots.png" alt="Moots" className="h-12 sm:h-18 w-auto" />
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-stone-500">
                    <a href="#best-sellers" className="hover:text-dark-blue transition-colors">Best Sellers</a>
                    <a href="#why-us" className="hover:text-dark-blue transition-colors">Why Moots</a>
                    <a href="#reviews" className="hover:text-dark-blue transition-colors">Reviews</a>
                    <a href="#faq" className="hover:text-dark-blue transition-colors">FAQ</a>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Fake Cart Integration */}
                    <button className="relative p-2 text-dark-blue hover:bg-stone-100 rounded-full transition-colors flex items-center justify-center cursor-pointer">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="absolute top-0 right-0 bg-amber-400 text-dark-blue text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white" style={{ transform: 'translate(25%, -25%)' }}>
                            2
                        </span>
                    </button>

                    <Button className="bg-dark-blue text-white hover:bg-[#0a1628] rounded-2xl px-6 py-6 font-semibold shadow-sm hidden sm:flex tracking-wide">
                        Shop Now
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
