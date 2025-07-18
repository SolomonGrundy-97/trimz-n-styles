//import { Link } from "react-router-dom";
//import { IoLogoWindows } from "react-icons/io5";

// const AboutSection = () => {
//   return (
//     <section className="bg-gray-100 mb-10 py-12 px-6 md:px-12 lg:px-24 text-center">
//       {/* Section Container */}
//       <div className="max-w-3xl mx-auto">
//         {/* Logo */}
//         <Link to="/" className="flex justify-center items-center mt-4">
//           <IoLogoWindows size={50} />
//         </Link>

//         {/* Divider */}
//         <div className="w-90 h-1 bg-gray-700 mx-auto my-4"></div>

//         {/* Description */}
//         <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//           Experience the perfect blend of classic and modern grooming at{" "}
//           <strong>Your Barber Shop Name</strong>. Our expert barbers specialize
//           in precision cuts, stylish beard trims, and relaxing hot towel shaves.
//           Enjoy a welcoming atmosphere, a curated playlist, and top-tier
//           grooming products. Sit back, relax, and leave feeling fresh and
//           confident.
//         </p>

//         {/* Divider */}
//         <div className="w-90 h-1 bg-gray-700 mx-auto my-4"></div>

//         {/* Button */}
//         <Link
//           to="/book"
//           className="bg-yellow-400 text-green-900 px-4 py-4 rounded-md font-bold hover:bg-yellow-500 transition"
//         >
//           BOOK NOW
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// =====================================================================================================================

// rectify whats causing the issue of the white backround section element not adding paddin at thr top/buttom
//import { Link } from "react-router-dom";
//import { IoLogoWindows } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section
      className="py-20 px-6 h-full mb-10 md:px-16 lg:px-32 text-center"
      id="about"
    >
      <br />
      <br />
      {/* Section Container */}
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center items-center mb-2">
          {/* <IoLogoWindows size={50} className="bg-yellow-400" /> */}{" "}
          <p className="text-white font-serif text-xl font-bold">About Us</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>

        {/* Description */}
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Experience the perfect blend of classic and modern grooming at{" "}
          <strong>Your Barber Shop Name</strong>. Our expert barbers specialize
          in precision cuts, stylish beard trims, and relaxing hot towel shaves.
          Enjoy a welcoming atmosphere, a curated playlist, and top-tier
          grooming products. Sit back, relax, and leave feeling fresh and
          confident.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
        <br />
        <br />

        {/* Button 
        <Link
          to="/book"
          className="bg-yellow-400 text-green-900 px-6 py-3 rounded-md text-lg font-bold shadow-md hover:bg-yellow-500 transition duration-300"
        >
          BOOK NOW
        </Link> */}
      </div>
    </section>
  );
};

export default AboutSection;
