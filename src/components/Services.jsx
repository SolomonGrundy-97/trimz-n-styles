import { useState, useEffect } from "react";
import { ImScissors } from "react-icons/im";
import { PiMaskSadFill } from "react-icons/pi";
import { MdOutlineCleaningServices } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Haircut Styles",
    icon: <ImScissors className="h-10 w-10 bg-black mb-4" />,
    description: "Fresh cuts tailored to your look by skilled barbers.",
  },
  {
    title: "Beard Trimming",
    icon: <MdOutlineCleaningServices className="h-10 w-10 bg-black mb-4" />,
    description: "Keep your beard sharp, clean, and styled just right.",
  },
  {
    title: "Smooth Shave",
    icon: <MdOutlineCleaningServices className="h-10 w-10 bg-black mb-4" />,
    description: "Enjoy a clean, smooth shave with premium care.",
  },
  {
    title: "Classic Styling",
    icon: <MdOutlineCleaningServices className="h-10 w-10 bg-black mb-4" />,
    description: "Classic and modern styles to match your vibe.",
  },
  {
    title: "Face Masking",
    icon: <PiMaskSadFill className="h-10 w-10 bg-black mb-4" />,
    description: "Rejuvenate your skin with a relaxing face mask session.",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [visibleCount, setVisibleCount] = useState(2);
  const handleShowMore = () => setVisibleCount(services.length);

  return (
    <section
      className="py-16 px-4 md:px-10 text-center"
      id="services"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-white font-serif text-xl font-bold">Our Services</p>
        <div className="flex justify-center items-center mb-5">
          <span className="w-16 border-t border-yellow-800 mx-2"></span>
          <span className="text-yellow-800 text-xl">👨‍🔧</span>
          <span className="w-16 border-t border-yellow-800 mx-2"></span>
        </div>

        {/* Grid on small/medium, flex on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-wrap lg:justify-between px-4 lg:px-0">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-full lg:w-[23%] mb-6"
            >
              <div className="bg-yellow-400 rounded-lg shadow-md p-6 transition hover:shadow-xl h-full min-h-[320px] flex flex-col justify-center">
                <div className="flex flex-col items-center bg-black rounded-md p-6 h-full">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center italic">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < services.length && (
          <p
            onClick={handleShowMore}
            className="inline-flex items-center text-white hover:text-yellow-400 transition cursor-pointer mb-6"
          >
            Show More ↓
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
