import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero_cont1">
      {/* <div className="hero_cont2"> */}
        <div style={{margin:"-18px"}}>SENIOR</div>
        <div style={{margin:"-18px"}}>EXPERIENCE</div>
        <div style={{margin:"-18px"}}>
          DESIGNER
          <FaRegCopyright style={{fontSize:"50px"}}/>
        {/* </div> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize:15,
          fontWeight:"normal",
          width:"30%"
        }}
      >
        <div>Google India Limited</div>
        <div>[2022/01/01 -present]</div>
      </div>
      <div>
        <img src="picturesIcon.jpeg" alt="image" className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
