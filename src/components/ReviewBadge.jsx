import { FaStar } from "react-icons/fa";

const myStars = Array(4).fill().map((_, index)=> (
    <FaStar 
    key={`star-${index}`}
    className="text-yellow-400" />
))
const ReviewBadge = () => {
    return (
        <div className="review-badge flex items-center gap-3 bg-white shadow-md rounded-full px-4 py-2">
            <div className="flex items-center gap-2">
                {/* Rating number */}
                <span className="font-bold text-sm md:text-base">4.6</span>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                    {myStars}
                   
                </div>
            </div>

            {/* Divider dot */}
            <span className="text-gray-400 text-sm md:text-base">•</span>

            {/* Review link */}
            <a
                href="#"
                className="underline text-sm md:text-base font-medium review-badge-link"
            >
                Read our 1,466 reviews
            </a>
        </div>
    );
};

export default ReviewBadge;
