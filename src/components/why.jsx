import PhoneImage from "../images/phone 3.png";
export default function Why() {
  return (
    <div className="p-10 items-center flex justify-center gap-20">
      <div className="bg-[#4D2F76] w-[550px] h-[450px] rounded-2xl flex flex-wrap  items-center justify-center">
        <img src={PhoneImage} alt="" className="w-[350px] h-[350px]" />
      </div>
      <div className="bg-[#272450] bg-opacity-30 w-[550px] h-[450px] rounded-2xl flex gap-10 flex-col items-center justify-center">
        <h1 className="text-[#4d2f76] text-[30px] font-semibold">
          Why GuardiaBot?
        </h1>
        <p className="text-center w-[400px] text-[#c0c0c0] text-opacity-50">
          We offer a compassionate, survivor-centered platform that prioritizes
          privacy and safety. Our chatbot is available 24/7, providing instant
          access to resources and guidance tailored to each users unique
          situation. Unlike traditional services, we empower individuals to
          explore their options without pressure, offering non-judgmental
          support and connecting them to professional help when they are
          ready—all in a secure and confidential environment
        </p>
      </div>
    </div>
  );
}
