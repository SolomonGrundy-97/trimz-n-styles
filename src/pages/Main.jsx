//import React from 'react'
import About from "../components/About";
import Services from "../components/Services";
import Appointment from "../components/Appointment";
import WelcomePage from "../components/WelcomePage";
import OurBarbers from "../components/OurBarbers";
import Testimonies from "../components/Testimonies";

const Main = () => {
  return (
    <div>
      <WelcomePage />
      <About />
      <Services />
      <br />
      <br />
      <br />
      <br />
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400" />
      <br />
      <OurBarbers />
      <br />
      <br />
      <br />
      <Testimonies />
      <br />
      <br />
      <br />
      <br />
      <Appointment />
      <br />
      <br />
    </div>
  );
};

export default Main;
