import bgImage from "../images/bg.png";
import botImage from "../images/botimage.png"
export default function Register() {
  return (
    <div
      className="flex flex-col bg-[#1E1E1E] w-full h-screen overflow-hidden bg-cover justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})`, height: "cover" }}
    >
      <div className="flex items-center justify-center flex-wrap">
        <div className="flex flex-col gap-5 items-start justify-start rounded-tl-lg rounded-bl-lg w-[450px] py-10 px-20 h-[450px] bg-[#1b1b2f] bg-opacity-30">
            <h1 className="text-[#c0c0c0] text-opacity-50 font-semibold text-[30px]">Register</h1>
            <input type="text" placeholder="Enter your email" className="bg-[#1b1b2f] rounded-lg focus:bg-[#4D2F76] focus:placeholder-transparent focus:outline-none focus:p-2 text-[#c0c0c0]  placeholder:text-center bg-opacity-80 placeholder:text-opacity-50 w-[320px] h-[55px]"/>
            <input type="text" placeholder="Enter your username" className="bg-[#1b1b2f] rounded-lg focus:bg-[#4D2F76] focus:placeholder-transparent focus:outline-none focus:p-2 text-[#c0c0c0]  placeholder:text-center bg-opacity-80 placeholder:text-opacity-50 w-[320px] h-[55px]"/>
            <input type="text" placeholder="Enter your password" className="bg-[#1b1b2f] rounded-lg focus:bg-[#4D2F76] focus:placeholder-transparent focus:outline-none focus:p-2 text-[#c0c0c0]  placeholder:text-center bg-opacity-80 placeholder:text-opacity-50 w-[320px] h-[55px]"/>
             <button className="bg-[#4D2F76] text-[#c0c0c0] text-opacity-50 w-[150px] h-[60px] text-center rounded-lg ml-16">Register</button>

        </div>
        <div className="flex flex-col gap-5 items-start justify-start rounded-tr-lg rounded-br-lg w-[450px] py-10 px-20 h-[450px] bg-[#4D2F76] ">
            <h1 className="text-[#c0c0c0]  font-semibold text-[20px]">Day to day your ai assistant</h1>
             <img src={botImage} alt="" className="w-[300px] h-[350px]"/>
        </div>
       
      </div>
    </div>
  );
}
