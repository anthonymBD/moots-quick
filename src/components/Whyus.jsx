import React from "react";

const features = [
    { label: "Orthopedic Memory Foam", moots: true, others: true },
    { label: "Washable Zippered Cushion Cover", moots: true, others: true },
    { label: "High-Density Foam Padding", moots: true, others: false },
    { label: "Space-Saving Furniture Design", moots: true, others: false },
    { label: "Easy to Clean", moots: true, others: true },
    { label: "Stylish, Home-Blending Aesthetic", moots: true, others: false },
    { label: "1-Year Warranty", moots: true, others: false },
];

function Check() {
    return (
        <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );
}

function Cross() {
    return (
        <svg className="w-5 h-5 text-red-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
    );
}

export default function UvsThemSection() {
    return (
        <section className="bg-white py-14 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mb-3">
                        <span className="w-6 h-px bg-stone-300" />
                        The Difference Is Clear
                        <span className="w-6 h-px bg-stone-300" />
                    </span>
                    <h2 className="text-dark-blue text-2xl sm:text-3xl lg:text-4xl font-bold">
                        Moots vs. The Rest
                    </h2>
                </div>

                {/* Two-column layout: image left, table right */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* LEFT — Product image */}
                    <div className="w-full lg:w-2/5 shrink-0">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-stone-100">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0904/2378/7839/files/Leatherette_Sofa_Brown_1.png?v=1726836389"
                                alt="Moot's premium leatherette pet sofa"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute top-4 left-4 bg-dark-blue text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                                Moot's Choice
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Comparison table */}
                    <div className="w-full lg:flex-1">
                        <div className="rounded-2xl overflow-hidden border border-stone-100 shadow-sm">

                            {/* Table header */}
                            <div className="grid grid-cols-[1fr_auto_auto]">
                                {/* Feature label col */}
                                <div className="bg-stone-50 px-5 py-3 border-b border-stone-100" />
                                {/* Moots col header */}
                                <div className="bg-dark-blue px-6 py-3 border-b border-dark-blue text-center min-w-[90px]">
                                    <span className="text-white text-sm font-bold tracking-wide">Moot's</span>
                                </div>
                                {/* Others col header */}
                                <div className="bg-stone-50 px-6 py-3 border-b border-stone-100 text-center min-w-[90px]">
                                    <span className="text-stone-400 text-sm font-semibold tracking-wide">Others</span>
                                </div>
                            </div>

                            {/* Feature rows */}
                            {features.map((f, i) => (
                                <div
                                    key={f.label}
                                    className={`grid grid-cols-[1fr_auto_auto] items-center ${i % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                                        } ${i < features.length - 1 ? "border-b border-stone-100" : ""}`}
                                >
                                    {/* Label */}
                                    <div className="px-5 py-4">
                                        <span className="text-dark-blue text-sm font-medium">{f.label}</span>
                                    </div>
                                    {/* Moots cell — highlighted */}
                                    <div className="bg-dark-blue/5 px-6 py-4 min-w-[90px] border-l border-r border-dark-blue/10">
                                        {f.moots ? <Check /> : <Cross />}
                                    </div>
                                    {/* Others cell */}
                                    <div className="px-6 py-4 min-w-[90px]">
                                        {f.others ? <Check /> : <Cross />}
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* CTA below table */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                            <p className="text-stone-500 text-sm">
                                <span className="font-semibold text-dark-blue">7 reasons</span> to choose Moot's over the rest.
                            </p>
                            <button className="w-full sm:w-auto bg-dark-blue text-white font-bold text-sm px-6 py-3.5 rounded-2xl hover:bg-[#0a1628] active:scale-95 transition-all duration-200 shadow-md">
                                Shop Best Sellers →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}