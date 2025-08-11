import { useEffect, useRef } from "react";

// ADD THE ACTUAL IMAGES AND ADJUST THE IMAGE SIZE...
const images = [
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Trimz Classic Cuts 1",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Modern Barbering Styles 2",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Your Look, Our Passion 3",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Clean, Sharp & Fresh 4",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Clean, Sharp & Fresh 5",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Clean, Sharp & Fresh 6",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Clean, Sharp & Fresh 7",
  },
  {
    src: "/src/assets/images/trimz_photo.jpg",
    caption: "Clean, Sharp & Fresh 8",
  },
];

export default function Carousel() {
  const trackRef = useRef(null);

  const carouselImages = [...images, ...images]; // duplicate for seamless scroll

  useEffect(() => {
    const keyframes = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;

    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <section className="" id="services">
      <p className="text-yellow-400 text-center font-serif text-xl font-bold">
        Our Services
      </p>
      <div className="flex justify-center items-center mb-5">
        <span className="w-16 border-t border-yellow-400 mx-2"></span>
        <span className="text-yellow-800 text-xl">👨‍🔧</span>
        <span className="w-16 border-t border-yellow-400 mx-2"></span>
      </div>

      <br />
      <br />

      {/* carousels */}
      <div className="relative overflow-hidden w-full h-60 sm:h-72 md:h-80 group">
        <div
          ref={trackRef}
          className="flex w-max"
          style={{
            animation: "scrollLeft 30s linear infinite",
            animationPlayState: "running",
          }}
          onMouseEnter={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = "running";
          }}
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="h-full min-w-[250px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0 flex flex-col items-center px-2"
            >
              <img
                src={image.src}
                className="h-3/4 w-full object-cover rounded-md shadow-md"
                alt={`Slide ${index + 1}`}
              />
              <p className="mt-2 text-center text-sm sm:text-base text-gray-800 font-medium px-2">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
