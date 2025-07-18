import { useState, useEffect } from "react";
import Zion from "../assets/images/team-1.jpg";
import Stanley from "../assets/images/team-2.jpg";
import Solomon from "../assets/images/team-3.jpg";
import Yusuf from "../assets/images/team-4.jpg";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const barbers = [
  {
    name: "Zion",
    title: "Senior Barber",
    image: Zion,
    bio: "Zion has over 10 years of experience creating classic and modern cuts for all hair types. He’s known for his precision and warm personality.",
  },
  {
    name: "Stanley",
    title: "Hair Stylist",
    image: Stanley,
    bio: "Stanley is passionate about creative hairstyles and specializes in styling, coloring, and trendy haircuts for both men and women.",
  },
  {
    name: "Solomon",
    title: "Beard Expert",
    image: Solomon,
    bio: "Solomon is a beard grooming master. From trims to full beard makeovers, he brings out the best look in every client.",
  },
  {
    name: "Yusuf",
    title: "Fade Specialist",
    image: Yusuf,
    bio: "Yusuf is known for his skin fades and fresh cuts. His attention to detail ensures every client leaves sharp and satisfied.",
  },
];

const Barbers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedBarber, setSelectedBarber] = useState(null);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20 text-center relative"
      id="barbers"
    >
      <p className="text-yellow-400 mb-2 font-serif text-xl font-bold">
        Our Barbers
      </p>
      <div className="w-20 mx-auto border-b-2 border-yellow-500 mb-10"></div>

      <div className="grid sm:grid-cols-2 md:flex md:flex-wrap md:justify-center gap-8">
        {barbers.map((barber, index) => (
          <div
            key={index}
            onClick={() => setSelectedBarber(barber)}
            className="group relative overflow-hidden shadow-lg cursor-pointer w-60 sm:w-44"
          >
            <div className="relative h-[350px] sm:h-[250px] py-2 px-2">
              {/* Barber Image */}
              <img
                src={barber.image}
                alt={barber.name}
                className="rounded-lg w-full h-full object-cover transform transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              />

              {/* "Click Me" Overlay 
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-black/60 text-white py-2 px-4 rounded-md text-sm font-semibold shadow-lg">
                  Click Me
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBarber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div
            className="rounded-lg max-w-md w-full bg-yellow-400 shadow-xl relative p-6"
            data-aos="zoom-up"
          >
            <button
              onClick={() => setSelectedBarber(null)}
              className="absolute text-xl top-6 left-6 text-red-600 p-8 font-bold hover:bg-white"
            >
              <AiOutlineClose size={30} />
            </button>
            <img
              src={selectedBarber.image}
              alt={selectedBarber.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">
              {selectedBarber.name}
            </h3>
            <p className="text-gray-600 font-semibold mb-3">
              {selectedBarber.title}
            </p>
            <p className="text-white text-sm">{selectedBarber.bio}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Barbers;
