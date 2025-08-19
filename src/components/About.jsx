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
          <p className="text-yellow-400 font-serif text-xl font-bold">
            About Us
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>

        {/* Description */}
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Experience the perfect blend of classic and modern grooming at{" "}
          <strong>TRIMZ &apos;N&apos; STYLE</strong>. Our expert barbers
          specialize in precision cuts, stylish beard trims, and relaxing hot
          towel shaves. Enjoy a welcoming atmosphere, a curated playlist, and
          top-tier grooming products. Sit back, relax, and leave feeling fresh
          and confident.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default AboutSection;
