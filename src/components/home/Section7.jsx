import React from "react";
import { motion } from "framer-motion";

const Section7 = () => {
  // Animation variants for text reveal
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Split text into words for staggered animation
  const text1 =
    "Find the Perfect trip for you and discover Extraordinary adventures with us!";
  const text2 =
    "Lorem ipsum dolor sit amet consectetur. Vivamus vitae nisi eget in sit et integer vestibulum. Mi euismod id urna malesuada!";

  return (
    <motion.div
      className="container mx-auto p-2 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of the text is in view
    >
      <div
        className="container mx-auto p-2 relative h-[50rem] rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(./src/assets/end-cover.jpeg)`,
          position: "relative",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-15"></div>

        <div className="relative px-5 xl:px-52 gap-7 text-white flex flex-col text-center mt-20 items-center w-full h-full z-10">
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl">
            {text1.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                variants={textVariants}
                custom={i} // Custom delay per word
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Animated Subtext */}
          <p className="text-2xl 2xl:px-52">
            {text2.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-1"
                variants={textVariants}
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <img
            className="cursor-pointer"
            src="./src/assets/explore-btn.svg"
            alt="Explore Button"
          />

          {/* Animated Logo Text */}
          <div className="mt-10 md:mt-10 lg:mt-20 text-7xl sm:text-9xl md:text-[10rem]">
            {"L O G O".split(" ").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={textVariants}
                custom={i + 2} // Reduced delay value to make animation start earlier
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="px-14 pb-2 flex flex-col md:flex-row absolute bottom-20 items-center justify-between w-full gap-3">
            <div className="text-2xl">LOGO</div>
            <div className="lg:ml-48 flex gap-2">
              <img src="./src/assets/icons/1.svg" alt="Icon 1" />
              <img src="./src/assets/icons/2.svg" alt="Icon 2" />
              <img src="./src/assets/icons/3.svg" alt="Icon 3" />
              <img src="./src/assets/icons/4.svg" alt="Icon 4" />
              <img src="./src/assets/icons/5.svg" alt="Icon 5" />
              <img src="./src/assets/icons/6.svg" alt="Icon 6" />
            </div>

            <div className="flex gap-5">
              <div>Template</div>
              <div>Tools</div>
              <div>Features</div>
              <div>About Us</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section7;
