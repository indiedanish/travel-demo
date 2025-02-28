import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section3 = () => {
  const ref = useRef(null);
  const isTextInView = useInView(ref, { once: false, amount: 0.3 }); // Triggers animation when 30% of the section is visible
  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);
  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to check screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Array of image objects with all necessary data
  const galleryImages = [
    // First row
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Maldives water bungalows",
      position: "self-end",
      height: "md:h-[90%]",
      row: 1,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Canal in Venice",
      position: "",
      height: "",
      row: 1,
    },
    {
      id: 3,

      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Tropical island resort",
      position: "self-end",
      height: "md:h-[90%]",
      row: 1,
    },
    // Second row
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Wat Arun temple in Bangkok",
      position: "self-start",
      height: "md:h-[90%]",
      row: 2,
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Long-tail boat in Thailand",
      position: "",
      height: "",
      row: 2,
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Waterfall in tropical forest",
      position: "self-start",
      height: "md:h-[90%]",
      row: 2,
    },
  ];

  // Functions to control slider
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section ref={ref} className="py-16 px-4 container mx-auto">
      {/* Animated Text Section */}
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-satoshi text-[24px] font-medium mb-2"
        >
          About Us
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-satoshi text-[48px] text-5xl mb-4"
        >
          Welcome to <span className="text-primary">Serenity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="font-satoshi text-[24.02px] max-w-[900px] mx-auto text-gray-600 leading-[1.3] tracking-wide text-center"
        >
          Lorem ipsum dolor sit amet consectetur. Mauris hendrerit aliquam nisi
          sit eget sit. Natoque placerat eu volutpat est pellentesque bibendum
          iaculis sit.
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0.7, y: 50 }}
        animate={isTextInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }}
      >
        {isMobile ? (
          // Mobile slider view
          <div className="max-w-screen-lg mx-auto px-4 relative">
            <div className="relative overflow-hidden rounded-xl shadow-md h-80">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute w-full h-full transition-all duration-200 fade-in ${
                    index === currentSlide ? "opacity-100 " : "opacity-0 "
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop grid view (original layout)
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="grid grid-cols-12 gap-4 md:gap-6 lg:h-[40rem]">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className={`col-span-12 md:col-span-4 lg:col-span-4 ${image.height} ${image.position}`}
                >
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.p>
    </section>
  );
};

export default Section3;
