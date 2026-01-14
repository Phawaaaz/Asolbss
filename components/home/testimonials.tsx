"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "TechCorp Industries",
    author: "John Mensah",
    position: "CEO",
    content: "ASOL Business Solutions transformed our financial operations with their expert consultancy. Their credit analysis helped us secure crucial funding for expansion.",
    logo: "/logos/techcorp.png"
  },
  {
    id: 2,
    company: "Global Ventures Ltd",
    author: "Amina Hassan",
    position: "CFO",
    content: "The arbitration services provided by ASOL were exceptional. They helped us resolve complex disputes efficiently while maintaining professional relationships.",
    logo: "/logos/global-ventures.png"
  },
  {
    id: 3,
    company: "Premier Banking Group",
    author: "David Osei",
    position: "Managing Director",
    content: "Their banking consultancy expertise is unmatched. ASOL's strategic advice has been instrumental in our institution's growth and risk management.",
    logo: "/logos/premier-banking.png"
  },
  {
    id: 4,
    company: "Innovation Holdings",
    author: "Sarah Johnson",
    position: "Director of Operations",
    content: "ASOL's corporate advisory services provided the clarity and direction we needed. Their structured approach to business planning delivered measurable results.",
    logo: "/logos/innovation.png"
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function Testimonials() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setPage([newIndex, newDirection]);
  };

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container text-center max-w-4xl mx-auto px-4">
        <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
          Real Impact
        </div>
        
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          Delivering Real Business Impact
        </h2>

        <div className="relative min-h-[350px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full cursor-grab active:cursor-grabbing"
            >
              <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed relative px-12">
                <span className="text-6xl text-primary/10 absolute -top-4 left-0">"</span>

                <p className="italic mb-8">
                  {current.content}
                </p>

                <span className="text-6xl text-primary/10 absolute -bottom-8 right-0">"</span>

                {/* Author info */}
                <footer className="mt-8 pt-6 border-t border-border">
                  {/* Optional: Company logo */}
                  {/* {current.logo && (
                    <img
                      src={current.logo}
                      alt={current.company}
                      className="h-8 mx-auto mb-4 opacity-60"
                    />
                  )} */}
                  <div className="font-semibold text-foreground">{current.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {current.position}, {current.company}
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors shadow-sm z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors shadow-sm z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/20"
              }`}
              animate={{
                width: index === currentIndex ? 32 : 10,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}