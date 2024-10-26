import imageOne from "../images/1.png";
import imageTwo from "../images/3.png";
import imageThree from "../images/6.png";

export default function Partners() {
    const Images = [imageOne, imageTwo, imageThree];

    return (
        <div className="flex flex-col items-center justify-center gap-10 md:mt-20 p-5">
            <p className="text-[#C0C0C0] text-[20px] text-opacity-50 text-center">
                We work with different organizations in order to help avoid gender-based violence and other <br /> related countries  governments.
            </p>
            <div className="border-[#c0c0c0] border-[1.5px] border-opacity-50 rounded-full w-[500px] h-[100px] p-2 items-center justify-center gap-5 flex">
                {Images.map((image, index) => (
                    <img key={index} src={image} alt={`Partner ${index + 1}`} className="h-10 w-[110px] " />
                ))}
            </div>
        </div>
    );
}
