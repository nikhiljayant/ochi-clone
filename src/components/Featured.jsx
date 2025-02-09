import React, { useState } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { Power4 } from "gsap";

const Featured = () => {
  const [currentlyHovered, setCurrentlyHovered] = useState(null);

  return (
    <div data-scroll data-scroll-section className="relative w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setCurrentlyHovered("fyde")}
            onMouseLeave={() => setCurrentlyHovered(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="text-[#CDEA68] absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl z-10">
              <motion.span
                initial={{ y: "100%" }}
                animate={
                  currentlyHovered === "fyde" ? { y: "0" } : { y: "100%" }
                }
                transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block"
              >
                FYDE
              </motion.span>
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setCurrentlyHovered("vise")}
            onMouseLeave={() => setCurrentlyHovered(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="text-[#CDEA68] flex overflow-hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl">
              <motion.span
                initial={{ y: "100%" }}
                animate={
                  currentlyHovered === "vise" ? { y: "0" } : { y: "100%" }
                }
                transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="inline-block"
              >
                VISE
              </motion.span>
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
