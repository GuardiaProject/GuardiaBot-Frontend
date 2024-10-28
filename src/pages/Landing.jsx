import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Community from "../components/Community";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Patners from "../components/Patners";
import Navbar from "../components/navbar";
import Why from "../components/why";
import imageOne from "../images/Group.png";
import imageTwo from "../images/el.png";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,  
            easing: 'ease-in-out', 
            mirror: true,  
            once: false  
        });
        
        AOS.refresh();
    }, []);

    return (
        <div className="flex bg-[#1E1E1E] flex-col items-center justify-center overflow-hidden">
            <div className="bg-cover md:pb-32" style={{ backgroundImage: `url(${imageTwo})` }}>
                <div 
                    className="bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${imageOne})`, height: "cover" }}
                >
                  
                    
                        <Navbar />
                  
                    
              
                    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <Hero />
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <Patners />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <Features />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
                <Why />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <Community />
            </div>
            <Footer />
        </div>
    );
}
