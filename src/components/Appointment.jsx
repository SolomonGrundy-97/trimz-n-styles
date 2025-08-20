import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";
import AppointmentImg from "../assets/images/post-1.jpg";

const AppointmentSection = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const clientTemplateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;
  const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    service: "",
    barber: "",
  });

  const [isBooking, setIsBooking] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBooking(true); // Change button text to "Booking..."

    try {
      // Send to Owner
      await emailjs.send(
        serviceId, // Service ID
        ownerTemplateId, // Owner Template ID
        formData,
        publicKey // Public Key
      );
      console.log("Owner email sent!");

      // Send to Client
      await emailjs.send(
        serviceId, // Same Service ID
        clientTemplateId, // Client Template ID
        formData,
        publicKey // Same Public Key
      );
      console.log("Client email sent!");

      // Show success toast
      toast.success(
        "😀 Thanks for booking! A confirmation email has been sent to you.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        time: "",
        service: "",
        barber: "",
      });
    } catch (err) {
      console.error("Error sending emails", err);
      toast.error("❌ Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsBooking(false); // Restore button text
    }
  };

  return (
    <section
      className="flex flex-col md:flex-row min-h-screen font-sans"
      id="appointment"
    >
      {/* Left Image */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={AppointmentImg}
          alt="appointment-image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Form */}
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />

      <div className="w-full md:w-1/2 bg-[#1e1e1e] px-6 py-16 md:px-12 lg:px-20 flex flex-col justify-center">
        <h2 className=" text-xl lg:text-4xl text-white font-bold mb-4 leading-normal">
          Make an Appointment
        </h2>
        <p className="text-yellow-400 mb-10 text-base">
          Book your professional grooming session with experienced barbers in a
          relaxing environment.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <input
            type="text"
            name="time"
            placeholder="Your Free Time & Day"
            value={formData.time}
            onChange={handleChange}
            className="p-3 mt-2 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <option className="text-gray-400" value="" disabled>
              Services
            </option>
            <option className="text-black">Haircut</option>
            <option className="text-black">Beard Trim</option>
            <option className="text-black">Shave</option>
            <option className="text-black">Hair Wash</option>
            <option className="text-black">Hair Treatment</option>
            <option className="text-black">Facials</option>
            <option className="text-black">Manicure</option>
            <option className="text-black">Padicure</option>
          </select>
          <select
            name="barber"
            value={formData.barber}
            onChange={handleChange}
            required
            className="p-3 mt-2 mb-10 rounded-md bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <option className="text-gray-400" value="" disabled>
              Choose Barbers
            </option>
            <option className="text-black">Zion</option>
            <option className="text-black">Stanley</option>
            <option className="text-black">Solomon</option>
            {/* <option className="text-black">Yusuf</option> */}
          </select>

          <div className="md:col-span-2 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="submit"
              disabled={isBooking}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-600 rounded-md text-white font-semibold transition duration-300 ease-in-out shadow-md"
            >
              {isBooking ? "BOOKING..." : "MAKE APPOINTMENT"}
            </button>
            <a
              href="https://wa.me/+2347035935922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-800 text-white rounded-md shadow-md transition duration-300"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
