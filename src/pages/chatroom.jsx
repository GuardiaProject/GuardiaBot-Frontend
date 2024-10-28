import {
    FaArrowUp,
    FaBars,
    FaCog,
    FaImage,
    FaMicrophone,
    FaQuestionCircle,
    FaThLarge,
    FaUser,
  } from "react-icons/fa";
  import personImage from "../images/p2.png";
  import { useState } from "react";
  
  export default function ChatRoom() {
    const selection = [
      "Gender Based Violence",
      "Sexual Violence",
      "Nutrition",
      "Child Reprishment",
      "Sexual Reprishment",
    ];
  
    const [message, setMessage] = useState("");
  
    const handleChange = (e) => {
      setMessage(e.target.value);
      e.target.style.height = "auto"; 
      e.target.style.height = `${e.target.scrollHeight}px`; 
    };
  
    return (
      <div className="bg-[#1e1e1e] h-screen overflow-x-hidden flex flex-col justify-between">
        <div className="flex items-center px-6 py-6 md:py-10 md:px-16 justify-between">
          <div className="flex items-center justify-center gap-5">
            <FaBars className="text-[#c0c0c0] md:w-5 md:h-5 h-3 w-3" />
            <h1 className="text-[#c0c0c0] md:text-[25px] text-[20px]">
              GuardiaBot
            </h1>
          </div>
          <div className="flex items-center justify-center gap-5">
            <FaThLarge className="text-[#c0c0c0] md:w-5 md:h-5 w-3 h-3" />
            <img src={personImage} alt="" className="md:w-10 w-6 h-6 md:h-10" />
          </div>
        </div>
        <div className="flex items-center md:px-16 px-6 md:py-36 py-6  md:gap-[150px]">
          <div className="flex flex-col gap-5 text-[#c0c0c0]">
            <FaCog className="md:w-5 md:h-5 h-3 w-3" />
            <FaUser className="md:w-5 md:h-5 h-3 w-3" />
            <FaQuestionCircle className="md:w-5 md:h-5 h-3 w-3" />
          </div>
          <div className="flex flex-col gap-5 items-center justify-center ">
            <h1 className="text-[40px] font-semibold text-center bg-gradient-to-r from-[#4D2F76] to-[#1b1b2f] bg-clip-text text-transparent ">
              Hello Aine
            </h1>
            <h1 className="text-[30px] font-semibold text-center text-[#c0c0c0] text-opacity-50 ">
              Welcome to GuardiaBot
            </h1>
            <div className="flex items-center justify-center md:gap-6 gap-3 flex-wrap">
              {selection.map((item, index) => (
                <p
                  key={index}
                  className="md:w-[200px] w-[100px] md:p-4 p-2 text-[8px] md:text-[16px] md:rounded-lg rounded-md text-center bg-[#4D2F76] text-[#c0c0c0]"
                >
                  {item}
                </p>
              ))}
            </div>
            <form action="" className="md:w-[1000px] w-[300px] ">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={handleChange}
                  className="w-full resize-none focus:text-center md:placeholder:text-[16px] placeholder:text-[9px] focus:placeholder-transparent placeholder:text-[#c0c0c0] pl-16 pr-32 placeholder:justify-center placeholder:items-center pt-4 pb-4 bg-[#1b1b2f] bg-opacity-30 rounded-lg focus:outline-none text-opacity-50 text-[#c0c0c0] placeholder:text-center"
                  placeholder="Enter your Message here"
                  rows="1" 
                />
                <button className="absolute left-2 top-1/2 -translate-y-1/2 px-2">
                  <FaMicrophone className="text-[#c0c0c0] text-opacity-50 md:w-6 md:h-6 w-4 h-4" />
                </button>
                <div className="flex absolute right-1  top-1/2 -translate-y-1/2 px-4 items-center justify-center gap-5 text-[#828DA9]">
                  <FaImage className="w-5 h-5 bg-opacity-50" />
                  <div className="flex items-center rounded-full bg-[#4D2F76] p-2">
                    <FaArrowUp className="text-white" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  