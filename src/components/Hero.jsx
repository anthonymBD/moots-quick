import { useState } from "react";
import ReviewBadge from "./ReviewBadge";

const Hero = ({ onDemoClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-20 bg-white"
        >
            {/* Left Content */}
            <div className="w-full md:w-1/2 col-center md:items-start text-center md:text-left mt-10 md:mt-0 hero-text">
                <h1 className="font-serif font-bold mb-6 leading-snug hero-title">
                    For the Dog Who’s Always Been by <span className="font-extrabold">Your Side</span> –{" "}
                    Now They Have a Bed as Comfortable as <span className="font-extrabold">Yours.</span>
                </h1>

                <p className="mb-6 leading-relaxed max-w-md text-gray-700 hero-subtext">
                    Reclaim Your Bed! Give Your Dog the Comfort They Deserve — Finally Get Some Leg Room
                    (Snoring Dog Not Included... Maybe) with Easy Maintenance and Long-Lasting Durability.
                </p>

                <div className="col-center md:items-start gap-4">
                    <button
                        onClick={onDemoClick}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-transform duration-150 hero-btn ${hovered ? "hovered" : ""}`}
                        aria-label="View beds by my dog's size (demo)"
                    >
                        View Bed by My Dog’s Size
                    </button>

                    <p className="text-dark-blue text-sm sm:text-base max-w-sm hero-note">
                        <span className="font-bold">5,000 Happy Dogs</span> Can’t Be Wrong – Get Your Bed Back
                        and Enjoy Comfort for You and Your Dog Today!
                    </p>

                    <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base hero-link">
                        Read the reviews
                    </a>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 relative col-center hero-image-container">
                <picture>
                    <source srcSet="images/hero-mobile.jpg" media="(max-width: 768px)" />
                    <img
                        src="images/hero.jpg"
                        alt="Dog resting on bed"
                        className="rounded-3xl shadow-xl max-w-full md:max-w-lg object-cover hero-image"
                    />
                </picture>

                <div className="flex justify-center md:justify-start md:absolute md:bottom-5 md:left-5 md:mt-0 mt-4 hero-badge">
                    <ReviewBadge />
                </div>
            </div>
        </section>
    );
};

export default Hero;
