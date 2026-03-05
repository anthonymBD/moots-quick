import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-blue text-stone-300 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-flex items-center justify-center bg-white/5 rounded-xl p-3 mb-6 hover:bg-white/10 transition-colors">
                            <img src="/images/logoMoots.png" alt="Moots" className="h-24 w-24 "/>
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed text-stone-400">
                            Premium pet furniture for the dog who's always been by your side. Reclaim your bed. Give your dog the comfort they deserve.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-xs tracking-[0.15em] uppercase">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="#why-us" className="hover:text-white transition-colors">Why Moots</a></li>
                            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-xs tracking-[0.15em] uppercase">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#shipping" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#warranty" className="hover:text-white transition-colors">1-Year Warranty</a></li>
                            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Moots. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">TikTok</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
