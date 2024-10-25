import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import imageOne from "../images/Group.png";

export default function Home() {
    return (
        <div className="bg-[#1E1E1E]  overflow-x-hidden">
            <div 
                className="bg-cover bg-center h-screen w-screen flex flex-row  items-center justify-center" 
                style={{ backgroundImage: `url(${imageOne})`,height:"cover" }}
                
            >
                <Navbar />
                <Hero/>
            </div>
        </div>
    );
}
