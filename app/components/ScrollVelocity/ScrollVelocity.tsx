'use client'

import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  href: string;
}

interface ScrollPortfolioProps {
  items: PortfolioItem[];
  speed?: number;
  className?: string;
  imageClassName?: string;
}

export const ScrollPortfolio = ({
  items = [],
  speed = 30,
  className = "",
  imageClassName = ""
}: ScrollPortfolioProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplikasi item untuk efek infinite seamless
  const duplicatedItems = [...items, ...items];

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      baseX.set(baseX.get() + (speed * delta) / 1000);
      
      // Reset posisi ketika mencapai setengah scroll
      if (baseX.get() >= containerRef.current!.scrollWidth / 2) {
        baseX.set(0);
      }
    }
  });

  return (
    <div 
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex"
        style={{ x: baseX }}
        ref={containerRef}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.href}-${index}`}
            className="flex-shrink-0 px-4 transition-transform duration-300"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <motion.div
                className={`h-[500px] w-[400px] relative overflow-hidden rounded-lg shadow-xl ${imageClassName}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </a>
          </div>
        ))}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default ScrollPortfolio ;
