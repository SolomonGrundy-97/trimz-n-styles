import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import ShopLogo from "../assets/images/trimz_photo.jpg";

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
            {/* <h2 className="text-3xl font-bold text-yellow-400">
              Trimz &apos;n&apos; Style
            </h2> */}
            <a href="#" className="container cursor-pointer">
              <img src={ShopLogo} alt="shop logo" className="p-2 h-15 w-15" />
            </a>
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
                  <a href="#appointment" className="hover:text-yellow-400">
                    Haircut
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Beard Trim
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Shave
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Hair Wash
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Hair Treatment
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Facials
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Manicure
                  </a>
                </li>
                <li>
                  <a href="#appointment" className="hover:text-yellow-400">
                    Pedicure
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <a href="#about" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+2349097441714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Prcing
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
