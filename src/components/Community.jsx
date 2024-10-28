import imageOne from "../images/person.png";
import imageTwo from "../images/p2.png"
import imageThree from "../images/p3.png"
import imageFour from "../images/p4.png"
import imageFive from "../images/p5.png"
import imageSix from "../images/p6.png"
import imageEight from "../images/p8.png"
import imageNine from "../images/p9.png"
import imageTen from "../images/p10.png"

export default function Community() {
    const testimonials = [
        { id: 1, imgSrc: imageOne, text: 'I got enough skills about violence prevention' },
        { id: 2, imgSrc: imageTwo },
        { id: 3, imgSrc: imageThree },
        { id: 4, imgSrc: imageFour },
        { id: 5, imgSrc: imageFive },
        { id: 6, imgSrc: imageSix },
        { id: 7, imgSrc: imageTen },
        { id: 8, imgSrc: imageEight },
        { id: 9, imgSrc: imageNine, text: 'The best bot to tell any gender problem' },
    ];

    return (
        <div className="flex flex-col items-start justify-center text-[#c0c0c0] p-10 gap-10">
            <h1 className="text-[30px] font-semibold">What our community says</h1>

            <div className="bg-[#272450] bg-opacity-30 w-full md:w-[1200px] h-auto rounded-lg flex flex-col items-center justify-center space-y-10 p-10">
            <div className="flex justify-between w-full max-w-4xl gap-8 p-6">
                    {testimonials.slice(0,3).map(({ id, imgSrc, text }) => (
                        <div key={id} className="relative group flex flex-col items-center">
                            <img
                                src={imgSrc}
                                alt={`testimonial-${id}`}
                                className="w-16 h-16  rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                            />
                            {text && (
                                <div className="absolute -inset-14 flex items-center text-opacity-50 justify-center bg-[#1b1b2f] bg-opacity-80 text-[#c0c0c0] text-center rounded-md w-[200px] h-[60px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 text-sm">
                                    {text}
                                </div>
                            )}
                        </div>
                    ))}
                </div>  {/* Row 2 - Centered */}
                <div className="flex justify-center w-full max-w-4xl gap-36 -mt-6">
                    {testimonials.slice(3, 6).map(({ id, imgSrc, text }) => (
                        <div key={id} className="relative group flex flex-col items-center">
                            <img
                                src={imgSrc}
                                alt={`testimonial-${id}`}
                                className="w-16 h-16 rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                            />
                            {text && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#1b1b2f] bg-opacity-80 text-white text-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 text-sm">
                                    {text}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Row 3 - Same Layout as Row 1 */}
                <div className="flex justify-between w-full max-w-4xl gap-8 -mt-6">
                    {testimonials.slice(6).map(({ id, imgSrc, text }) => (
                        <div key={id} className="relative group flex flex-col items-center">
                            <img
                                src={imgSrc}
                                alt={`testimonial-${id}`}
                                className="w-16 h-16 rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                            />
                            {text && (
                                <div className="absolute -inset-14 flex items-center text-opacity-50 justify-center bg-[#1b1b2f] bg-opacity-80 text-[#c0c0c0] text-center rounded-md w-[200px] h-[60px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 text-sm">
                                    {text}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
