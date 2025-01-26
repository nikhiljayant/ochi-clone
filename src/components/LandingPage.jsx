import React from "react";
// Icons
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((txt, index) => (
          <div key={txt} className="masker">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="w-[10vw] relative top-[.5vw] mr-2">
                  <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className="rounded-md" />
                </div>
              )}
              <h1 className="uppercase text-[9vw] leading-[7vw] font-['Test_Founders_Grotesk_X_Condensed'] font-medium">
                {txt}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => (
          <p
            key={item}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
