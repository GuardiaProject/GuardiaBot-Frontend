import Features from "../components/Features";
import Hero from "../components/Hero";
import Patners from "../components/Patners";
import Navbar from "../components/navbar";
import Why from "../components/why";
import imageOne from "../images/Group.png";
import imageTwo from "../images/el.png";


export default function Home() {
    return (
        <div className="flex bg-[#1E1E1E] flex-col items-center justify-center overflow-hidden">
            <div className="  bg-cover md:pb-32"  style={{ backgroundImage: `url(${imageTwo})` }}>
            <div 
                className="bg-cover bg-center h-screen w-screen flex flex-row  items-center justify-center" 
                style={{ backgroundImage: `url(${imageOne})`,height:"cover" }}
                
            >
                <Navbar />
                <Hero/>
                
            </div>
           
        </div>
        <Patners/>
        <Features/>
        <Why/>
       
        </div>
    );
}
