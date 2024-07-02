import React from 'react'

export const InfoGrid = () => {
    return (
        <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-4">
            {/*first row grid*/}
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl">
                        707
                    </h3>
                    <p className="text-3xl text-center">
                        Clients
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-full bg-full"></div>
            </div>
            <div className="relative flex flex-col border justify-between p-16 border-black h-[50vh] group">
                <h3 className="uppercase font-bold text-3xl">
                    Unlocking Dreams, One Home at a Time.
                </h3>
                <button className="px-5 py-2 border rounded-full hover">
                    Current Projets
                </button>
            </div>
            <div className="relative flex flex-col border p-16 hover:p-2 duration-500 border-black h-[50vh] group overflow-hidden">
                <h3 className="uppercase font-bold text-7xl leading-[1.2em] duration-500 group-hover:bg-lime-800 group-hover:p-14 group-hover:text-white">
                    Quality.<br/>
                    Trust.<br/>
                    Value.
                </h3>
            </div>

            {/*second row grid*/}
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl">
                        707
                    </h3>
                    <p className="text-3xl text-center">
                        Clients
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-full bg-full"></div>
            </div>
            <div className="flex flex-col flex-grow-2 border col-span-2 row-span-2 grid-flow-row-dense justify-between p-16 border-black h-full group">
                <h3 className="uppercase font-bold text-3xl">
                    Unlocking Dreams, One Home at a Time.
                </h3>
                <button className="px-5 py-2 border rounded-full hover">
                    Current Projets
                </button>
            </div>

            {/*third row grid*/}
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-full bg-full"></div>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-full bg-full"></div>
            </div>

            {/*fourth row grid*/}
            <div className="flex flex-col flex-grow-2 border col-span-2 row-span-2 grid-flow-row-dense justify-between p-16 border-black h-[50vh] group">
                <h3 className="uppercase font-bold text-3xl">
                    Unlocking Dreams, One Home at a Time.
                </h3>
                <button className="px-5 py-2 border rounded-full hover">
                    Current Projets
                </button>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:bg-lime-100 group">
                <div className="scale-100 group-hover:scale-0 group-hover:opacity-0 duration-500">
                    <h3 className="font-bold text-9xl">
                        707
                    </h3>
                    <p className="text-3xl text-center">
                        Clients
                    </p>
                </div>
                <span className="absolute top-[calc(50vh*50px)] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-500 p-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, enim ac luctus aliquam, purus eros gravida dui, et hendrerit eros leo et orci.
                </span>
            </div>
            <div className="relative flex flex-col border justify-center items-center p-16 border-black h-[50vh] hover:p-2 duration-500 group">
                <div className="w-full bg-[url(/property01.jpg)] bg-no-repeat bg-center h-full bg-full"></div>
            </div>
        </div>
    )
}
