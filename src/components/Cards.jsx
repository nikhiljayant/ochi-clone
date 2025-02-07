import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center px-16 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-10 rounded-full py-1 px-4 border-[#CDEA68] border text-[#CDEA68] text-xs">
            © 2020 - {new Date().getFullYear()}
          </button>
        </div>
      </div>

      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute left-10 bottom-10 rounded-full py-1 px-4 border-[#fff] border text-[#fff] text-xs">
            © 2020 - {new Date().getFullYear()}
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute left-10 bottom-10 rounded-full py-1 px-4 border-[#fff] border text-[#fff] text-xs">
            BUISNESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
