import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Santorini Sunset Escape",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 4,
      nights: 3,
      description:
        "Experience the breathtaking sunsets of Santorini with our exclusive tour package. Explore white-washed villages, volcanic beaches, and enjoy authentic Greek cuisine.",
      price: 910,
    },
    {
      id: 2,
      title: "Bali Paradise Retreat",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 5,
      nights: 4,
      description:
        "Discover the tropical paradise of Bali with its lush rice terraces, sacred temples, and pristine beaches. Includes yoga sessions and traditional spa treatments.",
      price: 850,
    },
    {
      id: 3,
      title: "Kyoto Cultural Journey",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 6,
      nights: 5,
      description:
        "Immerse yourself in Japanese culture with our Kyoto tour. Visit ancient temples, participate in a traditional tea ceremony, and explore bamboo forests.",
      price: 1150,
    },
    {
      id: 4,
      title: "Amalfi Coast Adventure",
      image:
        "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 5,
      nights: 4,
      description:
        "Journey along Italy's stunning Amalfi Coast. Enjoy scenic drives, charming coastal towns, and delicious Mediterranean cuisine with breathtaking sea views.",
      price: 1050,
    },
    {
      id: 5,
      title: "Machu Picchu Expedition",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 7,
      nights: 6,
      description:
        "Trek the legendary Inca Trail to Machu Picchu. Explore ancient ruins, experience Andean culture, and witness the breathtaking beauty of the Sacred Valley.",
      price: 1250,
    },
    {
      id: 6,
      title: "Serengeti Safari",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 6,
      nights: 5,
      description:
        "Embark on an unforgettable wildlife safari in Tanzania's Serengeti National Park. Witness the Great Migration and spot the Big Five in their natural habitat.",
      price: 1950,
    },
    {
      id: 7,
      title: "Northern Lights Iceland",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 4,
      nights: 3,
      description:
        "Chase the magical Northern Lights in Iceland. Relax in geothermal hot springs, explore ice caves, and marvel at stunning waterfalls and black sand beaches.",
      price: 1150,
    },
    {
      id: 8,
      title: "Maldives Luxury Getaway",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      days: 5,
      nights: 4,
      description:
        "Indulge in luxury at our exclusive Maldives resort. Stay in overwater bungalows, snorkel in crystal-clear waters, and enjoy world-class spa treatments.",
      price: 2050,
    },
    // Add more tours as needed
  ];

  const nextSlide = () => {
    if (currentSlide < tours.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="px-4 h-200 md:px-8 lg:px-32 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Top Packages</h3>

        <div className="mt-4 md:mt-0">
          <motion.h2
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Top Tours To <span className="text-primary">Spark</span> Your
            <br />
            <span className="text-primary">Wanderlust</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In
            Sit Et Integer Vestibulum. Mi Euismod Id Urna Malesuada.
          </motion.p>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-92 h-1 bg-gray-300 rounded-full mr-4">
          <div
            className="h-full bg-gray-800 rounded-full"
            style={{ width: `${((currentSlide + 1) / tours.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex space-x-2">
          <span className="text-gray-500">
            {currentSlide + 1}/{tours.length}
          </span>
          <div className="flex space-x-1">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="cursor-pointer w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              &lt;
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === tours.length - 1}
              className="cursor-pointer w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-sm disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Tours slider */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="ml-0 sm:ml-[23%] flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 14}%)`,
            width: `${tours.length * 20.33}%`,
            ...(isMobile && { transform: "translateX(0)", width: "100%" }), // Override transform on mobile
          }}
        >
          {tours.map((tour, index) => (
            <>
              {index === currentSlide ? (
                <div
                  key={tour.id}
                  className={`w-full sm:w-1/3 flex-shrink-0 px-4 transition-all duration-300 ${
                    index === currentSlide ? "scale-100 opacity-100 z-10" : ""
                  }`}
                >
                  <div className=" overflow-hidden ">
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover rounded-lg "
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-3xl ">{tour.title}</h3>

                        <div className="">
                          <span className="text-black text-lg font-medium">
                            {tour.days} Days
                          </span>{" "}
                          <span className="text-black text-sm">
                            / {tour.nights} Nights
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 line-clamp-2">
                        {tour.description}
                      </p>
                      <div className="flex sm:flex-row flex-col gap-2 justify-between items-center mt-4">
                        <div className="text-xl rounded-sm border border-black p-2 w-full sm:w-auto text-center ">
                          From ${tour.price}
                        </div>
                        <button className="cursor-pointer hover:bg-white hover:text-primary hover:border-primary hover:border-2 bg-primary text-xl text-white font-light px-4 py-2 rounded w-full sm:w-auto text-center">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={tour.id}
                  className={`hidden sm:block w-[14%] flex-shrink-0 px-1  transition-all duration-300 `}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full rounded-lg object-cover h-[20rem] "
                  />
                  <h3 className="text-3xl mt-5">{tour.title}</h3>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
