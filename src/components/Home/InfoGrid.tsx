import React from 'react';
import ImageSlider from '../ui/ImageSlider';
import Image from 'next/image';

export const InfoGrid = () => {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-4">
            {/*first row grid*/}
            <div className="relative flex flex-col border justify-center items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl md:text-[10vw] text-center">
                        707
                    </h3>
                    <p className="text-3xl text-center uppercase">
                        Clients
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-[calc(100vw)] lg:h-[calc(25vw)] bg-full" />
            </div>
            <div className="relative flex flex-col border justify-between p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] group">
                <h3 className="uppercase font-bold text-xl translate-y-full group-hover:translate-y-0 duration-500">
                    Unlocking Dreams,<br />One Home at a Time.
                </h3>
                <div className="h-[calc(50vw)] md:h-[calc(25vw)] my-5 overflow-hidden">
                    <Image alt="project" src="/project01.jpg" width={500} height={300}
                        className='translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-100 duration-500' />
                </div>
                <a href="#projects" className="w-fit px-5 py-2 border rounded-full hover">
                    View Current Projets
                </a>
            </div>
            <div className="relative flex flex-col justify-center border p-10 hover:p-2 duration-500 border-black h-[calc(100vw)] lg:h-[calc(25vw)] group overflow-hidden">
                <h3 className="uppercase font-bold text-8xl md:text-[5vw] h-full flex flex-col justify-center leading-[1.2em] duration-500 group-hover:bg-lime-800 group-hover:p-10 group-hover:text-white">
                    Quality.<br />
                    Trust.<br />
                    Value.
                </h3>
            </div>

            {/*second row grid*/}
            <div className="relative flex flex-col border justify-between p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] group">
                <h3 className="uppercase font-bold text-xl translate-y-full group-hover:translate-y-0 duration-500">
                    PRECISION AND ELEGANCE. OUR DISTINCTIVE DESIGN DEFINES US.
                </h3>
                <div className="h-[calc(50vw)] md:h-[calc(25vw)] my-5 overflow-hidden">
                    <Image alt="project" src="/project02.jpg" width={500} height={300}
                        className='translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-100 duration-500' />
                </div>
                <a href="#projects" className="w-fit px-5 py-2 border rounded-full hover">
                    View Upcoming Projets
                </a>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl md:text-[10vw] text-center">
                        5
                    </h3>
                    <p className="text-3xl text-center uppercase">
                        Current Projects
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="flex flex-col flex-grow-2 border col-span-2 row-span-2 justify-between p-5 border-black h-[calc(100vw)] lg:h-full group">
                <ImageSlider />
            </div>

            {/*third row grid*/}
            <div className="relative flex flex-col border justify-center items-center p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl md:text-[10vw] text-center">
                        80
                    </h3>
                    <p className="text-3xl text-center uppercase">
                        Past Projects
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="relative flex flex-col border justify-between p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)]  group">
                <h3 className="uppercase font-bold text-xl translate-y-full group-hover:translate-y-0 duration-500">
                    PRESTIGIOUS RESIDENTIAL PROJECTS IN PRIME BRISBANE LOCATIONS.
                </h3>
                <div className="h-[calc(50vw)] md:h-[calc(25vw)] my-5 overflow-hidden">
                    <Image alt="project" src="/project03.jpg" width={500} height={300}
                        className='translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-100 duration-500' />
                </div>
                <a href="#projects" className="w-fit px-5 py-2 border rounded-full hover">
                    View Past Projets
                </a>
            </div>

            {/*fourth row grid*/}
            <div className="flex flex-col border col-span-2 justify-end p-16 border-black h-[calc(50vw)] lg:h-[calc(25vw)] hover:bg-sky-800 duration-500 hover:text-white">
                <h3 className="uppercase font-bold text-8xl md:text-[10vw] leading-[1.2em]">
                    About
                </h3>
                <p className="text-3xl font-bold uppercase">
                    Our Values & Purpose
                </p>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[calc(100vw)] lg:h-[calc(25vw)] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property02.jpg)] bg-no-repeat bg-center h-full bg-full" />
            </div>
            <div className="relative flex flex-col border p-12 border-black h-[calc(100vw)] lg:h-[calc(25vw)]  group">
                <h3 className="uppercase font-bold text-3xl">
                    CONTACT US
                </h3>
                <div className="flex flex-col text-xl md:text-2xl group-hover:opacity-100 md:opacity-0 duration-300 flex-grow py-6">
                    <>
                        <span className='font-bold'>
                            Address:
                        </span> 123 Maple Street, Springfield QLD 4000
                    </>
                    <>
                        <span className='font-bold'>
                            Phone
                        </span> 07 1234 5678
                    </>
                    <>
                        <span className='font-bold'>Email:</span> contact@randomemail.com</>
                </div>
                <a href="#contact" className="w-fit px-5 py-2 border rounded-full hover">
                    Get In Touch
                </a>
            </div>

        </div>
    )
}
