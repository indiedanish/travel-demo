import { Search, Facebook, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import XIcon from "../../assets/vector.svg";
import Insta from "../../assets/insta.svg";
import Face from "../../assets/facebook.svg";

const Section = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <div className="container mx-auto relative">
      <div className="m-2 rounded-lg overflow-hidden">
        {/* Navigation Bar */}
        <nav className="absolute  top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 lg:px-8">
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                About Us
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Tours
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Packages
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-0 xl:top-2 -translate-x-1/2  flex items-center justify-center ">
            <span className="text-3xl font-bold">LOGO</span>
          </div>

          {/* Search & Menu */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="relative hidden md:block">
              <Input
                className="pl-4 pr-4 py-1 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 rounded-lg"
                placeholder="Find Destination"
                type="search"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About Us
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Tours
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Packages
              </a>
              <div className="relative mt-2">
                <Input
                  className="pl-8 pr-4 py-1 bg-gray-100 text-gray-800 placeholder:text-gray-500 border-gray-200 rounded-lg"
                  placeholder="Find Destination"
                  type="search"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        )}

        {/* Social Media Icons */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 flex flex-col space-y-3">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white rounded-full hover:shadow-lg  cursor-pointer"
          >
            <img src={Face} alt="Facebook" className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white rounded-full hover:shadow-lg  cursor-pointer"
          >
            <img src={Insta} alt="Instagram" className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white rounded-full hover:shadow-lg  cursor-pointer"
          >
            <img src={XIcon} alt="X" className="w-5 h-5" />
          </Button>
        </div>

        {/* Hero Section */}
        <div className="">
          <img
            src="./src/assets/main-with-design.png"
            alt="Tropical beach with boats"
            className="w-full h-[45rem] object-cover object-top"
          />
          {/* Hero Text */}
          <div
            ref={textRef}
            className="absolute bottom-10 left-10 text-white mr-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-satoshi text-3xl xs:text-4xl sm:text-5xl mb-2"
            >
              Discover the World,
              <br className="hidden sm:block" />
              One Destination at a Time!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="font-satoshi text-[16px] text-white/90 mb-4"
            >
              Want a fully personalized travel experience? Design your own
              itinerary, choose your <br /> destinations, and travel at your own
              pace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="font-satoshi text-xl border border-white inline-block py-2 px-5 rounded-sm text-white/90 mb-4"
            >
              Explore Now
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
