import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "David O.",
    text: "Trimz Barbers gave me the best haircut I’ve had in years. Great vibes and clean cuts!",
    title: "Loyal Customer",
    rating: 5,
  },
  {
    name: "Amaka T.",
    text: "Super professional barbers! My beard trim was sharp and smooth.",
    title: "Happy Client",
    rating: 4,
  },
  {
    name: "Chuka B.",
    text: "Always on time, clean tools, and great conversation. Highly recommend!",
    title: "Regular Visitor",
    rating: 5,
  },
];

export default function CustomerReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setAnimate(true);
      }, 200); // Short delay before next stars animate in
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center gap-1 mt-3">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar
              key={i}
              className={`text-yellow-400 transition-all duration-500 ease-out transform ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
              } delay-[${i * 100}ms]`}
            />
          ) : (
            <FaRegStar
              key={i}
              className={`text-yellow-400 transition-all duration-500 ease-out transform ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
              } delay-[${i * 100}ms]`}
            />
          )
        )}
      </div>
    );
  };

  return (
    <section className="py-14 px-4" id="testimonies">
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400" />
      <br />
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-xl mb-10 md:text-4xl font-bold text-yellow-400">
          What Our Customers Say
        </h4>

        {/* make this testimonies to wrap inside a quote image, and bounces when flipped in... */}
        <div className="relative px-8 py-10 max-w-3xl mx-auto transition duration-500 ease-in-out">
          {/* text quote sign...  <FaQuoteLeft className="text-yellow-400 text-3xl absolute top-4 left-4" /> */}
          <p className="text-white text-lg italic leading-relaxed">
            &apos;&apos;{testimonials[current].text}&apos;&apos;
          </p>

          {/* Animated Stars */}
          {renderStars(testimonials[current].rating)}

          <div className="mt-6">
            <h2 className="text-4xl font-bold text-yellow-400">
              {testimonials[current].name}
            </h2>
            <p className="text-white text-sm">{testimonials[current].title}</p>
          </div>

          {/* Dots 
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAnimate(false);
                  setTimeout(() => {
                    setCurrent(index);
                    setAnimate(true);
                  }, 150);
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-yellow-400 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <div className="mb-10 border-b border-gray-700 pb-4 text-center text-sm text-gray-400" />
    </section>
  );
}
