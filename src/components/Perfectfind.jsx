import React, { useState } from "react";

// Real dimensions from Amazon/Chewy listings. S and XL estimated from pattern.
const sizes = [
    {
        key: "S",
        img: "images/sm-bed.png",
        name: "Small Dog Sofa Furry",
        breeds: "Chihuahua, Yorkie, Pomeranian",
        weight: "Up to 15 lbs",
        cta: "See Small Beds",
        w: 20, d: 14, h: 7,       // estimated
        barWidth: 25,              // % of bar for visual scale
    },
    {
        key: "M",
        img: "images/md-bed.jpg",
        name: "Medium Dog Sofa Furry",
        breeds: "Pug, Corgi, Beagle",
        weight: "15 – 35 lbs",
        cta: "See Medium Beds",
        w: 28, d: 20, h: 9,       // from Amazon
        barWidth: 50,
    },
    {
        key: "L",
        img: "images/lg-bed.png",
        name: "Large Dog Sofa Furry",
        breeds: "Labrador, Golden Retriever, Shiba",
        weight: "35 – 70 lbs",
        cta: "See Large Beds",
        w: 40, d: 23, h: 13,      // from Amazon
        barWidth: 75,
    },
    {
        key: "XL",
        img: "images/xl-bed.png",
        name: "XL Dog Sofa Furry",
        breeds: "Great Dane, Mastiff, Bernese",
        weight: "70+ lbs",
        cta: "See XL Beds",
        w: 50, d: 28, h: 15,      // estimated
        barWidth: 100,
    },
];

const features = [
    "Memory foam cushion",
    "Washable zippered cover",
    "Waterproof liner",
    "Non-slip wooden legs",
];

export default function PerfectFind() {
    const [active, setActive] = useState(1);
    const current = sizes[active];

    return (
        <section className="bg-[#F9F8F6] py-14 px-4 sm:px-8">
            {/* Preload all images for instant swap */}
            <div className="hidden" aria-hidden="true">
                {sizes.map((s) => <img key={s.key} src={s.img} alt="" />)}
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-dark-blue text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                        Find the Perfect Bed for Your Pet
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Our pet beds are flying off the shelves. Don't wait—<strong>grab one now</strong> before they're gone!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* LEFT — Image with size bubbles */}
                    <div className="w-full lg:flex-1">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md">
                            {sizes.map((s, i) => (
                                <img
                                    key={s.key}
                                    src={s.img}
                                    alt={s.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            ))}

                            {/* Size bubbles overlaid bottom-left */}
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                {sizes.map((s, i) => (
                                    <button
                                        key={s.key}
                                        onClick={() => setActive(i)}
                                        aria-label={`Select ${s.key} size`}
                                        aria-pressed={active === i}
                                        className={`w-12 h-12 rounded-full font-bold text-sm transition-all duration-200 shadow-lg focus:outline-none ${active === i
                                            ? "bg-dark-blue text-white scale-110 ring-2 ring-white"
                                            : "bg-white text-dark-blue hover:bg-gray-100"
                                            }`}
                                    >
                                        {s.key}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Info panel */}
                    <div className="w-full lg:w-80 xl:w-96">
                        <div key={current.key} className="flex flex-col gap-5">

                            <div>
                                <h3 className="text-dark-blue text-2xl sm:text-3xl font-bold leading-tight mb-1">
                                    {current.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{current.breeds}</p>
                            </div>

                            {/* Visual size bar */}
                            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bed size</span>
                                    <span className="text-xs font-bold text-dark-blue">
                                        {current.w}" × {current.d}" × {current.h}"
                                    </span>
                                </div>

                                {/* Bar track */}
                                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-dark-blue rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${current.barWidth}%` }}
                                    />
                                </div>

                                {/* S / M / L / XL tick labels */}
                                <div className="flex justify-between mt-1.5">
                                    {sizes.map((s, i) => (
                                        <span
                                            key={s.key}
                                            className={`text-xs font-bold transition-colors duration-200 ${active === i ? "text-dark-blue" : "text-gray-300"
                                                }`}
                                        >
                                            {s.key}
                                        </span>
                                    ))}
                                </div>

                                {/* Weight range under bar */}
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Best for dogs <span className="font-semibold text-dark-blue">{current.weight}</span>
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-2">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-dark-blue text-white font-bold text-base py-4 rounded-2xl hover:bg-[#001a3a] active:scale-95 transition-all duration-200">
                                {current.cta}
                            </button>

                            <p className="text-center text-xs text-gray-400">
                                Free shipping · 1-year warranty · Made in Mexico
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}