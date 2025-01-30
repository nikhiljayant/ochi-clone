import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-t-3xl bg-[#004D43]">
      <div className="text border-t border-b border-slate-300 flex gap-10 overflow-hidden pt-10">
        <h1 className="text-[27vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] whitespace-nowrap uppercase -mt-[7vw] -mb-[1vw]">
          we are ochi
        </h1>
        <h1 className="text-[27vw] leading-none font-['Test_Founders_Grotesk_X_Condensed'] whitespace-nowrap uppercase -mt-[7vw] -mb-[1vw]">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
