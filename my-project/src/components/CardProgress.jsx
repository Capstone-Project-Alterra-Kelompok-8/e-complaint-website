import React from "react";

const CardProgress = ({ number, text, icon, backgroundImage }) => {
  return (
    <div className="relative w-[250px] h-[169px] bg-yellow-400 rounded-[10px] overflow-hidden">
      <div
        className="absolute top-[75px] left-[7px] font-bold text-[#1a1a1a] text-[40px]">
        {number}
      </div>
      <div
        className="absolute top-[134px] left-[7px] font-bold text-[#1a1a1a] text-[18px]">
        {text}
      </div>
      {backgroundImage && (
        <img className="absolute w-[197px] h-[140px] -top-3 left-[103px] transform -translate-x-[-5%]" alt="Background" src={backgroundImage} />
      )}
      <img className="absolute w-[26px] h-[26px] top-[40px] left-[7px]" alt="Icon" src={icon} />
    </div>
  );
};

export default CardProgress;
