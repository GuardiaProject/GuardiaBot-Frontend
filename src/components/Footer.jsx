import imageOne from "../images/p7.png"
export default function Footer(){
    return(

        <div className="flex flex-col bg-cover items-center justify-center p-10 gap-10" style={{backgroundImage:`url(${imageOne})`}}>
           <div className="bg-[#4D2F76] bg-opacity-20 w-[1200px] h-[2px] rounded-full ">

           </div>
           <div className="lex items-center justify-center">
            <h1 className="text-[#4D2F76]">Guardia</h1>

           </div>
        </div>
    )
}