import componentImage from "../images/Group 1.png"
import imageOne from "../images/Group 44.png"
export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center gap-5 p-10 md:mt-44">
            <h1 className="text-[50px] text-center font-semibold text-[#C0C0C0]">Gender Based Question Solving with <br/><span className="text-[#4D2F76]">Guardia Bot</span></h1>
            <p className="text-center text-[#c0c0c0] text-opacity-50">Visit guardiaBot to get solutions on gender and get consultations against any violence <br/> that you meet</p>
            <div className="flex bg-cover bg-center gap-10 items-center justify-center" >
            <button className="border-2 border-[#4D2F76]  w-[200px] text-[16px] hover:bg-[#1e1e1e] hover:text-[#4D2F76] h-[65px] bg-[#4D2F76] text-[#C0C0C0] rounded-full transition-colors duration-300">
                            Get started
                        </button>
                        <img src={imageOne} alt="" className="bg-cover h-[380px] w-[380px]" style={{ backgroundImage: `url(${componentImage})`,backgroundRepeat:"no-repeat" }}/>
           
            </div>
 
        </div>
    )
}