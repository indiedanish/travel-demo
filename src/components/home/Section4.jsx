import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Section4 = () => {
  // ... existing code ...
  const destinations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Santorini, Greece",
      description:
        "Explore the stunning white-washed buildings and blue domes overlooking the Aegean Sea. Perfect for romantic getaways and breathtaking sunsets.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Bali, Indonesia",
      description:
        "Discover lush rice terraces, sacred temples, and pristine beaches. Experience the perfect blend of relaxation, culture, and adventure in this tropical paradise.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80",
      title: "Kyoto, Japan",
      description:
        "Immerse yourself in ancient temples, traditional tea houses, and stunning cherry blossoms. Experience Japan's rich cultural heritage.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Machu Picchu, Peru",
      description:
        "Trek to this ancient Incan citadel nestled high in the Andes mountains. A bucket-list destination for history lovers and adventurers alike.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Amalfi Coast, Italy",
      description:
        "Drive along dramatic coastal roads, visit charming cliffside villages, and savor authentic Italian cuisine with stunning Mediterranean views.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Serengeti, Tanzania",
      description:
        "Witness the incredible wildlife and vast savannas on an unforgettable safari. Home to the Great Migration, one of nature's most spectacular events.",
    },
  ];
  // ... existing code ...

  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    // Make sure GSAP is available
    if (!gsap) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // First, clear any existing children that might be clones
    const originalChildren = Array.from(scrollContainer.children).slice(
      0,
      destinations.length
    );
    scrollContainer.innerHTML = "";

    // Add back the original items
    originalChildren.forEach((child) => {
      scrollContainer.appendChild(child);
    });

    // Then clone items for seamless looping
    originalChildren.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Calculate total width of all original items
    const totalWidth = originalChildren.reduce(
      (width, item) => width + item.offsetWidth + 24,
      0
    ); // 24px for gap

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // Create a fresh animation with adjusted duration based on screen width
    const isMobile = window.innerWidth < 768;
    const animationDuration = isMobile ? 30 : 20; // Slower on mobile

    animationRef.current = gsap.to(scrollContainer, {
      x: -totalWidth,
      duration: animationDuration,
      ease: "none",
      repeat: -1,
      paused: isHovering,
      force3D: true, // Force GPU acceleration
    });

    // Handle window resize
    const handleResize = () => {
      if (animationRef.current) {
        animationRef.current.kill();

        // Recalculate width after resize
        const newTotalWidth = originalChildren.reduce(
          (width, item) => width + item.offsetWidth + 24,
          0
        );

        // Adjust animation duration based on screen width
        const isMobile = window.innerWidth < 768;
        const newDuration = isMobile ? 30 : 20;

        // Create new animation with updated dimensions
        animationRef.current = gsap.to(scrollContainer, {
          x: -newTotalWidth,
          duration: newDuration,
          ease: "none",
          repeat: -1,
          paused: isHovering,
          force3D: true, // Force GPU acceleration
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [destinations.length, isHovering]); // Added dependencies

  // Create a separate effect for handling hover state
  useEffect(() => {
    if (animationRef.current) {
      if (isHovering) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="py-16 container mx-auto">
      <div className="md:mb-8 px-4 md:px-8 lg:px-16 xl:px-12 ">
        <motion.h3 
          className="text-xl font-semibold text-black mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Top Destinations
        </motion.h3>
        <div className="flex flex-col md:flex-row md:items-end gap-1">
          <motion.h2 
            className="text-4xl font-medium md:text-5xl text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover <span className="text-4xl text-black"> Your Next</span>
            <br></br>
            <span className="mr-3 text-4xl text-black">Dream</span>
            <span>Destination</span>
          </motion.h2>

          <motion.p 
            className="text-gray-600 md:max-w-md md:ml-auto text-sm md:text-right mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In
            Sit Et Integer Vestibulum. Mi Euismod Id Urna Malesuada. Farmlacius
            Facilisis Eget Pellentesque Et. Fusce Egestas Mauris Mi M Eget.
          </motion.p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 py-8 pb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: "flex",
            willChange: "transform",
            transform: "translateZ(0)", // Force GPU acceleration
          }}
        >
          {destinations.map((destination, index) => (
            <div
              key={`${destination.id}-${index}`}
              className={`flex-shrink-0 ${
                index % 2 === 0 ? "mt-16 w-[300px] " : "mb-12 w-[380px]"
              }`}
            >
              <div className="rounded-lg overflow-hidden shadow-md h-64 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{destination.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
