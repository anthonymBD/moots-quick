import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
    {
        name: "Dolly",
        text: "My baby has a partially torn ACL that is healing currently. This gives her support and cushion, and just high enough off the ground that she doesn't struggle. Highly recommend for big dogs with issues climbing!",
        img: "https://cdn.shopify.com/s/files/1/0904/2378/7839/files/81JUoUmlmjL._SL1600.jpg?v=1728203354",
        stars: 5,
    },
    {
        name: "Staci",
        text: "This couch looks very well made. Chase is a 67lb lab and he loves his new couch. I will update the review after a month or so. As of now, I would recommend this couch.",
        img: "https://cdn.shopify.com/s/files/1/0904/2378/7839/files/617fN_8kddL.jpg?v=1728203125",
        stars: 5,
    },
    {
        name: "Malinda J.",
        text: "I have a shiba and the large is a good size and lets him stretch out. It comes with cute little mini throw pillows and is high enough to see over the windowsill.",
        img: "https://cdn.shopify.com/s/files/1/0904/2378/7839/files/71yejsLVAVL._SL1600.jpg?v=1728203229",
        stars: 5,
    },
    {
        name: "Camilla K.",
        text: "My 3.5 lbs Yorkie loves this bed. There's plenty of room and she likes bringing her toys there. As a plus, it matches my couch perfectly!",
        img: "https://cdn.shopify.com/s/files/1/0904/2378/7839/files/71oCOwZI8XL._SL1600.jpg?v=1728203321",
        stars: 5,
    },
];

// Using Wikipedia/Wikimedia — stable, transparent, consistent format
const retailers = [
    {
        name: "Walmart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/60px-Walmart_Spark.svg.png",
        wordmark: "Walmart",
        wordmarkColor: "#0071CE",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg",
    },
    {
        name: "Wayfair",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg",
    },
    {
        name: "Chewy",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chewy_pet_food_logo.svg/960px-Chewy_pet_food_logo.svg.png",
    },
];

const CHAR_LIMIT = 100;

function Stars({ count }) {
    return (
        <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < count ? "text-orange-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.168c.969 0 1.372 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.952 2.701c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.058 9.394c-.784-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
            ))}
        </div>
    );
}

function ReviewText({ text }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = text.length > CHAR_LIMIT;
    return (
        <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
            {isLong && !expanded ? `${text.slice(0, CHAR_LIMIT).trimEnd()}… ` : text + " "}
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-dark-blue font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}
        </p>
    );
}

function RetailerLogo({ r }) {
    // Walmart needs special treatment: icon + wordmark side by side
    if (r.wordmark) {
        return (
            <div className="flex items-center gap-1.5">
                <img src={r.logo} alt="" className="h-6 w-auto" />
                <span style={{ color: r.wordmarkColor, fontWeight: 700, fontSize: "1.1rem", fontFamily: "sans-serif" }}>
                    {r.wordmark}
                </span>
            </div>
        );
    }
    return <img src={r.logo} alt={r.name} className="h-7 w-auto max-w-[120px] object-contain" />;
}

export default function Testimonials() {
    const swiperRef = useRef(null);

    return (
        <section className="bg-white py-14 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

                    {/* LEFT COLUMN */}
                    <div className="flex-shrink-0 lg:w-80 xl:w-96">
                        <h2 className="text-dark-blue text-2xl sm:text-3xl font-bold leading-tight mb-6">
                            Don't Just Take Our Word for It—See Why Pet Owners Love Moot's Beds
                        </h2>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-8 p-3 border border-gray-100 rounded-xl w-fit">
                            <div className="w-8 h-8 rounded-full bg-dark-blue flex items-center justify-center text-white text-xs font-bold shrink-0">
                                M
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-dark-blue text-sm">4.6</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className={`w-4 h-4 ${i <= 4 ? "text-orange-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.168c.969 0 1.372 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.952 2.701c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.058 9.394c-.784-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <button className="text-xs text-dark-blue underline underline-offset-2 text-left mt-0.5 hover:opacity-70 transition-opacity">
                                    Read our 1,466 reviews
                                </button>
                            </div>
                        </div>

                        {/* As Seen On */}
                        <div className="mb-8">
                            <p className="text-dark-blue font-bold text-lg mb-4">As seen on:</p>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                {retailers.map((r) => (
                                    <div key={r.name} className="flex items-center justify-start h-9">
                                        <RetailerLogo r={r} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full sm:w-auto bg-dark-blue text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#001a3a] active:scale-95 transition-all duration-200">
                            See Testimonials
                        </button>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-end gap-3 mb-4">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-11 h-11 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-[#001a3a] active:scale-95 transition-all"
                                aria-label="Previous"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-11 h-11 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-[#001a3a] active:scale-95 transition-all"
                                aria-label="Next"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={16}
                            breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 } }}
                        >
                            {reviews.map((r, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col">
                                        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-50">
                                            <img src={r.img} alt={`${r.name}'s pet`} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-5 flex flex-col">
                                            <Stars count={r.stars} />
                                            <ReviewText text={r.text} />
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <span className="font-bold text-dark-blue text-sm">{r.name}</span>
                                                <span className="flex items-center gap-1.5 text-xs text-orange-500 font-medium">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    Verified
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    );
}