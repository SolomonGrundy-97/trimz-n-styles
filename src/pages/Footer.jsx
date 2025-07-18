// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTiktok,
//   FaWhatsapp,
//   FaArrowUp,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";

// export default function Footer() {
//   const [showButton, setShowButton] = useState(false);

//   // Show button after scrolling down
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* Main Footer */}
//       <footer className="bg-black text-white py-10 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
//           {/* Brand Info */}
//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold text-yellow-400 mb-2">
//               Trimz Barbers
//             </h2>
//             <p className="text-sm text-gray-300 italic">
//               Sharp Cuts. Fresh Looks. Clean Confidence.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-sm text-center md:text-left">
//             <div>
//               <h3 className="text-yellow-400 font-semibold mb-2 uppercase">
//                 Services
//               </h3>
//               <ul className="space-y-1">
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Haircut
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Beard Trim
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Shave
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-yellow-400 font-semibold mb-2 uppercase">
//                 Company
//               </h3>
//               <ul className="space-y-1">
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div className="text-center md:text-left">
//             <h3 className="text-yellow-400 font-semibold mb-3 uppercase">
//               Follow Us
//             </h3>
//             <div className="flex justify-center md:justify-start gap-4">
//               <a
//                 href="https://facebook.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-400 text-black p-3 rounded-full hover:bg-white hover:text-yellow-500 transition"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://wa.me/2349097441714"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-400 text-black p-3 rounded-full hover:bg-white hover:text-green-500 transition"
//               >
//                 <FaWhatsapp />
//               </a>
//               <a
//                 href="https://instagram.com/yourhandle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-400 text-black p-3 rounded-full hover:bg-white hover:text-pink-500 transition"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://tiktok.com/@yourhandle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-400 text-black p-3 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <FaTiktok />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
//           &copy; {new Date().getFullYear()} Trimz Barbers. All rights reserved.
//         </div>
//       </footer>

//       {/* Back to Top Button */}
//       {showButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-white transition duration-300"
//           aria-label="Back to Top"
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </>
//   );
// }

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400" />
      {/* Location Map Section */}
      <section
        className="w-full bg-black py-8 px-4 text-yellow-400"
        id="findus"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Find Us</h3>
          <div className="w-full h-[300px] rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Trimz Barbers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.693449210268!2d7.497512014279963!3d9.057085790982525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba7f7704fd7%3A0x324f7db64c58818e!2sAbuja!5e0!3m2!1sen!2sng!4v1682606855664!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <br />
      <div className="mb-10 border-b border-gray-700 pb-4 text-center text-sm text-gray-400" />

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-yellow-400">
              Trimz &apos;n&apos; Style
            </h2>
            <p className="text-gray-300 mt-2 max-w-sm">
              Sharp Cuts. Fresh Looks. Clean Confidence. Book your next style
              upgrade today.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between text-center md:text-left gap-6">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Services</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Haircut
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Beard Trim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Shave
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-yellow-400 font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://wa.me/2349097441714"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        <br />
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400" />
      </footer>

      <br />
      <p className="text-gray-400 mt-5 mb-4 text-center">
        &copy; {new Date().getFullYear()} Trimz &apos;n&apos; Style. All rights
        reserved.
      </p>
    </>
  );
}
