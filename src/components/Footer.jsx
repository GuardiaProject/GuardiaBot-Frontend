import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import imageOne from "../images/p7.png";

export default function Footer() {
    const footer = ["Home", "About", "Features"];
    const icons = [FaYoutube, FaInstagram, FaTwitter];
    
    return (
        <div className="flex flex-col bg-cover items-center justify-center p-10 gap-10" style={{ backgroundImage: `url(${imageOne})`,height:"cover" }}>
            <div className="bg-[#4D2F76] bg-opacity-20 w-[1100px] h-[2px] rounded-full "></div>
            
            <div className="flex items-center justify-center gap-40">
                <h1 className="text-[#4D2F76]">Guardia</h1>
                
                <div className="flex items-center justify-center gap-8">
                    {footer.map((item, index) => (
                        <p key={index} className="text-[#c0c0c0] text-opacity-50">{item}</p>
                    ))}
                </div>
                
                <div className="flex items-center justify-center gap-8">
                    {icons.map((Icon, index) => (
                        <Icon key={index} className="text-[#c0c0c0] text-opacity-50" size={24} />
                    ))}
                </div>
            </div>
        </div>
    );
}
