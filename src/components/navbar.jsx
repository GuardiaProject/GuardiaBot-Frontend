import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [blurIntensity, setBlurIntensity] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
       
        const scrollPosition = window.scrollY;
        const maxBlur = 100; 
        setBlurIntensity(Math.min(scrollPosition / 100 * maxBlur, maxBlur));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const userLinks = [
        { name: "Home", src: "#" },
        { name: "About", src: "#" },
        { name: "Features", src: "#" },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 z-50 w-full flex justify-between md:justify-center items-center py-3 bg-[#1e1e1e] "
                style={{
                    backdropFilter: `blur(${blurIntensity}px) saturate(180%)`,
                }}
            >
                <div className="flex items-center max-w-7xl w-full px-6 justify-between md:justify-center md:gap-36 ">
                    <h1 className="text-[#4D2F76] text-[24px] font-semibold">Guardia</h1>
                    
                   
                    <FaBars className="md:hidden text-[#4D2F76] text-2xl cursor-pointer" onClick={toggleMenu} />
                    
                  
                    <div className={`fixed inset-0 bg-[#1e1e1e] flex flex-col items-center justify-center gap-10 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:static md:flex md:flex-row md:gap-36`}>
                        <button className="absolute top-4 right-4 text-2xl md:hidden text-white" onClick={toggleMenu}>
                            <FaTimes />
                        </button>

                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
                            {userLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.src}
                                    className="text-white md:text-[#C0C0C0] text-[15px] hover:text-[#4D2F76] transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        
                        <button to=" " className="border-2 border-[#4D2F76] w-[130px] text-[14px] text-white md:text-[#4D2F76] h-[40px] hover:bg-[#4D2F76] hover:text-[#C0C0C0] rounded-3xl transition-colors duration-300">
                            Start Chart
                        </button>
                       
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
