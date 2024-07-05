import ContactForm from "./ContactForm";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

export default function ContactGrid() {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-4">
            <div className="relative flex flex-col border col-span-1 items-center justify-end p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] group">
                <h3 className="uppercase font-bold text-7xl ">
                    Get In Touch
                </h3>
            </div>
            <div className="relative flex flex-col border col-span-3 justify-center items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-[calc(100vw)] lg:h-[calc(25vw)] bg-full" />
            </div>

            {/* second row grid */}
            <div className="relative flex flex-col border col-span-1 gap-6 items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] group">
                <ul className="flex flex-col gap-8">
                    <li className="flex gap-4 text-xl">
                        <RiMapPinLine className="text-3xl" /> 123 Elm Street,
                        Springfield, IL 62701,
                        United State
                    </li>
                    <li className="flex gap-4 text-xl">
                        <RiPhoneLine className="text-2xl" /> 012 - 345 6789
                    </li>
                    <li className="flex gap-4 text-xl">
                        <TfiEmail className="text-2xl" /> propertyestate@example.com
                    </li>
                </ul>
            </div>
            <div className="relative flex flex-col border col-span-3 justify-center items-center p-12 border-black h-[calc(110vw)] lg:h-[calc(25vw)] group">
                <ContactForm />
            </div>
        </div>
    )
}