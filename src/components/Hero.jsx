import { useState } from "react";
import ReviewBadge from "./ReviewBadge";
import { Button } from "./ui/button";

export default function Hero({ onDemoClick }) {
    return (
        <section className="bg-white px-4 sm:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ── LEFT: Copy ── */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

                        {/* Eyebrow label — quiet, editorial */}
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-stone-400">
                            <span className="w-6 h-px bg-stone-300" />
                            Premium Pet Furniture
                            <span className="w-6 h-px bg-stone-300" />
                        </span>

                        {/* Headline — large, confident, no gimmicks */}
                        <h1 className="text-[#00081C] text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight">
                            For the Dog Who's Always Been by Your Side —
                            <br className="hidden sm:block" />
                            <span className="relative inline-block mt-1">
                                <span className="relative z-10">Now They Sleep Like Royalty.</span>
                                {/* Warm underline accent */}
                                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-amber-400 rounded-full opacity-60" />
                            </span>
                        </h1>

                        {/* Subtext — calm, confident, not pushy */}
                        <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-md">
                            Reclaim your bed. Give your dog the comfort they deserve — stylish enough for your home,
                            durable enough for their lifestyle.
                        </p>

                        {/* CTA row — shadcn Button + ghost secondary */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
                            <Button
                                size="lg"
                                onClick={onDemoClick}
                                className="bg-[#00081C] text-white font-semibold text-base px-8 py-6 rounded-2xl hover:bg-[#0a1628] active:scale-[0.98] transition-all duration-200 shadow-md tracking-wide"
                            >
                                Find My Dog's Size
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-stone-200 text-[#00081C] font-semibold text-base px-6 py-6 rounded-2xl hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 tracking-wide"
                            >
                                <a href="#reviews" className="flex items-center gap-2">
                                    Read Reviews
                                    <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Button>
                        </div>

                        {/* Trust row — minimal, no emojis, refined */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 pt-1">
                            {[
                                "1-Year Warranty",
                                "Free US Shipping",
                                "100% Satisfaction",
                            ].map((text) => (
                                <span key={text} className="flex items-center gap-1.5 text-xs text-stone-400 font-medium tracking-wide">
                                    <span className="w-1 h-1 rounded-full bg-amber-400 inline-block" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Image ── */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Main image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4] bg-stone-100">
                                <picture>
                                    <source srcSet="images/hero-mobile.jpg" media="(max-width: 768px)" />
                                    <img
                                        src="images/hero.jpg"
                                        alt="Dog resting comfortably on a Moot's premium pet sofa"
                                        className="w-full h-full object-cover"
                                    />
                                </picture>

                                {/* Subtle dark gradient at bottom for card legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>

                            {/* ReviewBadge — floated bottom-left, outside image on mobile */}
                            <div className="absolute bottom-4 left-4">
                                <ReviewBadge />
                            </div>

                            {/* Floating stat chip — top right */}
                            <div className="absolute -top-4 -right-4 hidden sm:flex flex-col items-center justify-center bg-[#00081C] text-white rounded-2xl w-24 h-24 shadow-xl">
                                <span className="text-2xl font-bold leading-none">5K+</span>
                                <span className="text-[10px] font-medium text-stone-300 uppercase tracking-wider mt-1 text-center leading-tight">Happy<br />Dogs</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}