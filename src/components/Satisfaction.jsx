import React from 'react'
import { Button } from "./ui/button";

const features = [
    {
        title: "Unrivaled Comfort",
        description:
            "Your pet deserves the same comfort you'd expect from your own bed. Our memory foam cushions, plush fabric, and ergonomic design will give your pet the best sleep they've ever had — every single night.",
        image:
            "/images/md-bed.png",
    },
    {
        title: "Built to Last",
        description:
            "Say goodbye to cheap, flimsy pet beds that fall apart after a few months. Our durable pet beds are made from the highest quality materials, ensuring they can withstand the toughest chewers, scratchers, and sleepers.",
        image:
            "/images/holdingdog.png",
    },
    {
        title: "Stylish & Chic",
        description:
            "Forget the ugly, bulky pet beds that ruin your home's aesthetic. Moot's pet beds are stylish, modern, and fashionable, designed to blend seamlessly into your home's decor. Now your pet's bed is part of the furniture — literally!",
        image:
            "/images/sleepyDog.png",
    },
];

const Satisfaction = () => {
    return (
        <section className="bg-[#00081C] py-16 px-4 sm:px-8">
            {/* Heading */}
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center max-w-3xl mx-auto mb-12 leading-tight">
                Why Moot's Pet Beds Are the Best Choice for Your Pet (And Your Home)
            </h2>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                    >
                        <div className="w-full aspect-[4/3] overflow-hidden">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            <h3 className="text-[#00081C] text-lg font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Satisfaction Guarantee */}
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                    100% Satisfaction Guarantee
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We believe in our pet beds so much that we offer a 1-year warranty. If
                    for any reason you're not completely satisfied, we'll make it right. No
                    questions asked.
                </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <Button size="lg" className="bg-white text-[#00081C] hover:text-[#00081C] font-bold text-base sm:text-lg px-8 py-6 rounded-2xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md">
                    See the Difference — Find Out
                </Button>
            </div>
        </section>
    );
}

export default Satisfaction