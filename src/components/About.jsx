import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className="font-['Neue_Montreal] text-[3.5vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full flex border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="font-['Neue_Montreal] text-5xl">Our approach:</h1>
          <button className="flex gap-10 items-center py-3 px-5 bg-zinc-900 mt-7 rounded-full text-zinc-100 text-lg">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img className="w-full h-full rounded-3xl object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
