import React from "react";
// Frame Motion
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll daya-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-t-3xl bg-[#004D43]">
      <div className="text border-t border-b border-slate-300 flex overflow-hidden pt-10">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="text-[27vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] whitespace-nowrap uppercase -mt-[7vw] -mb-[1vw] pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="text-[27vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] whitespace-nowrap uppercase -mt-[7vw] -mb-[1vw] pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
