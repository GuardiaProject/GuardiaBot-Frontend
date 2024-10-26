import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Features() {
  return (
    <div className="flex gap-10 px-10 items-center justify-center py-32 ">
      <div className="flex text-[#c0c0c0c0] items-center justify-between gap-28  ">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-[30px] font-semibold">Our Features</h1>
          <p className="text-opacity-50 text-[21px]">
            Our chatbot provides confidential,24/7 support,offering survivors of{" "}
            <br /> gender-based violence immediate access to resources,emotion
            <br />
            guidance,and connections to proffesional help-empowering users to{" "}
            <br /> explore their options in a safe and non-judgemental space
          </p>
          <div className="flex gap-20 items-center justify-center">
            <div className="flex items-center justify-center bg-[#1e1e1e] w-16 h-16 rounded-full border-2 border-[#4d2f76] ">
              <FaChevronLeft className="text-[#4d2f76] w-6 h-5" />
            </div>
            <div className="flex items-center justify-center bg-[#4d2f76] w-16 h-16 rounded-full border-2 border-[#4d2f76] ">
              <FaChevronRight className="text-[#c0c0c0] w-6 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-[#272450] bg-opacity-30 w-[400px] h-[350px] rounded-xl gap-5 flex flex-col items-center justify-center">
            <div className="bg-[#4d2f76] w-[300px] h-[90px] flex items-center justify-center rounded-bl-none rounded-br-3xl rounded-tl-2xl rounded-tr-xl p-5 -ml-[250px]">
                <h2 className="font-semibold ">Ask any question about gender</h2>

            </div>
           <div className="flex flex-col items-start justify-center gap-5">
           <p className="font-semibold text-[23px] text-center">Having any question about <br/>gender violence</p>
           <div className="bg-[#272450] bg-opacity-20 w-[150px] h-[60px] rounded-full text-[#272450] flex items-center justify-center">
            <p className="text-[#4d2f76]">Explore more</p>

           </div>

           </div>
        </div>
      </div>
    </div>
  );
}
