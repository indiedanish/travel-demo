import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // For section animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Carter",
      subtitle: "Subtitle here",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      quote:
        "I've been on countless trips, but this one was different. Everything was perfectly organized, and the local insights made it truly unique. Can't wait for my next adventure!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      subtitle: "Adventure Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      quote:
        "The attention to detail and personalized experience exceeded all my expectations. Truly a journey to remember!",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      subtitle: "Travel Blogger",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      quote:
        "From start to finish, this trip was flawlessly executed. The local experiences were the highlight for me.",
    },
  ];

  const textRef = useRef(null);
  const words = testimonials[0].quote.split(" ");

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.15,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      className="container mx-auto py-32 md:py-56 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-center text-xl mb-4">Testimonials</h2>

      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={textRef}
          className="text-3xl md:text-5xl mb-12 font-light justify-center"
          style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
        >
          {words.map((word, index) => (
            <span key={index} className="inline-block">
              {word}
            </span>
          ))}
        </h2>
        <div className="flex justify-center items-center gap-4 mb-2">
          <div className="w-32 h-32 self-end rounded-lg overflow-hidden">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-38 p[y]-10 self-end rounded-lg overflow-hidden">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 self-end rounded-lg overflow-hidden">
            <img
              src={testimonials[2].image}
              alt={testimonials[2].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-medium text-lg">{testimonials[0].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[0].subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Section6;
