import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((txt) => (
          <div key={txt} className="masker">
            <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-['Host_Grotesk'] font-medium">
              {txt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
