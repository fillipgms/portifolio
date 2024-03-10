import Image from "next/image";
import React from "react";
import header from "@/public/header.jpg";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="h-svh grid md:grid-cols-2 grid-cols-1 py-5 md:px-16 px-10  place-content-center md:gap-y-16 gap-x-5 gap-5 md:grid-rows-2">
            <Image
                {...header}
                alt="header"
                className="md:col-span-2 h-full object-cover rounded-3xl"
            />
            <div className="flex md:flex-col flex-col-reverse  justify-end gap-5 ">
                <Button
                    className="bg-[#7AC1DE] rounded-full px-10 text-lg md:w-1/2"
                    size={"lg"}
                >
                    vamos conversar
                </Button>
                <p className="md:hidden block">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                </p>
                <div className="h-full flex items-center">
                    <h1 className="md:text-[5rem] text-[3rem] md:text-left text-center font-bold md:after:hidden after:block after:h-[3px] after:w-full after:bg-black">
                        Fillip
                        <div className="md:flex inline-block items-center gap-2 md:px-0 px-3">
                            <span className="md:block hidden h-[5px] w-20 bg-black"></span>
                            Mangia
                        </div>
                    </h1>
                </div>
            </div>
            <div className="md:flex hidden flex-col gap-10">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                </p>
                <div className="md:grid grid-cols-2 flex-1 gap-3 ">
                    <div className="bg-slate-400 row-span-2 rounded-2xl"></div>
                    <div className="bg-slate-400 rounded-2xl"></div>
                    <div className="bg-slate-400 rounded-2xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
