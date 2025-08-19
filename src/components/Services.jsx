import { useEffect, useRef } from "react";

const images = [
  {
    src: "/src/assets/images/barbing.jpg",
    caption: "Barbing",
  },
  {
    src: "/src/assets/images/hair-treatment.jpg",
    caption: "Hair Treatment",
  },
  {
    src: "/src/assets/images/hairwash.jpg",
    caption: "Hair Wash",
  },
  {
    src: "/src/assets/images/shave.webp",
    caption: "Shave",
  },
  {
    src: "/src/assets/images/beard-trim1.jpg",
    caption: "Beard Trim",
  },
  {
    src: "/src/assets/images/pedicure.jpg",
    caption: "Pedicure",
  },
  {
    src: "/src/assets/images/facials1.jpg",
    caption: "Facials",
  },
  {
    src: "/src/assets/images/manicure2.jpg",
    caption: "Manicure",
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
    <section id="services">
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

      {/* Carousel */}
      <div className="relative overflow-hidden w-full h-56 sm:h-64 md:h-72 group">
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
              className="flex-shrink-0 flex flex-col items-center px-2 w-40 sm:w-48 md:w-56"
            >
              <img
                src={image.src}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-auto object-cover mx-auto rounded-lg"
                alt={`Slide ${index + 1}`}
              />
              <p className="mt-4 text-center text-lg sm:text-base text-yellow-400 font-medium px-2">
                ⭐ {image.caption} ⭐
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------------------------------------------
// import { useEffect, useRef } from "react";

// const images = [
//   { src: "/src/assets/images/barbing.jpg", caption: "Barbing" },
//   { src: "/src/assets/images/hair-treatment.jpg", caption: "Hair Treatment" },
//   { src: "/src/assets/images/hairwash.jpg", caption: "Hair Wash" },
//   { src: "/src/assets/images/shave.webp", caption: "Shave" },
//   { src: "/src/assets/images/beard-trim1.jpg", caption: "Beard Trim" },
//   { src: "/src/assets/images/pedicure.jpg", caption: "Pedicure" },
//   { src: "/src/assets/images/facials1.jpg", caption: "Facials" },
//   { src: "/src/assets/images/manicure2.jpg", caption: "Manicure" },
// ];

// export default function Carousel() {
//   const trackRef = useRef(null);
//   const carouselImages = [...images, ...images]; // duplicate for seamless scroll

//   useEffect(() => {
//     const keyframes = `
//       @keyframes scrollLeft {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//     `;

//     const styleSheet = document.styleSheets[0];
//     if (styleSheet) {
//       styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
//     }
//   }, []);

//   return (
//     <section id="services">
//       <p className="text-yellow-400 text-center font-serif text-xl font-bold">
//         Our Services
//       </p>
//       <div className="flex justify-center items-center mb-5">
//         <span className="w-16 border-t border-yellow-400 mx-2"></span>
//         <span className="text-yellow-800 text-xl">👨‍🔧</span>
//         <span className="w-16 border-t border-yellow-400 mx-2"></span>
//       </div>

//       <br />
//       <br />

//       {/* Carousel */}
//       <div className="relative overflow-hidden w-full h-64 sm:h-72 md:h-80 group">
//         <div
//           ref={trackRef}
//           className="flex w-max"
//           style={{
//             animation: "scrollLeft 30s linear infinite",
//             animationPlayState: "running",
//           }}
//           onMouseEnter={() => {
//             if (trackRef.current)
//               trackRef.current.style.animationPlayState = "paused";
//           }}
//           onMouseLeave={() => {
//             if (trackRef.current)
//               trackRef.current.style.animationPlayState = "running";
//           }}
//         >
//           {carouselImages.map((image, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 flex flex-col items-center px-2
//               w-44 sm:w-52 md:w-60"
//             >
//               <div className="w-full aspect-square">
//                 <img
//                   src={image.src}
//                   className="w-full h-full object-cover rounded-lg shadow-md"
//                   alt={`Slide ${index + 1}`}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm sm:text-base md:text-lg text-yellow-400 font-medium px-2 truncate w-full">
//                 ⭐ {image.caption} ⭐
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
