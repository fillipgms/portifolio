import Image from "next/image";
import React from "react";
import header from "@/public/header.jpg";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="h-svh grid grid-cols-2 py-5 px-10 gap-10 grid-rows-2">
            <Image
                {...header}
                alt="header"
                className="col-span-2 h-full object-cover rounded-3xl"
            />
            <div className="flex flex-col justify-center gap-5">
                <Button
                    className="bg-[#7AC1DE] rounded-full px-10 text-lg w-1/2"
                    size={"lg"}
                >
                    vamos conversar
                </Button>
                <h1 className="text-[5rem] font-bold">
                    Fillip
                    <div className="flex items-center gap-2">
                        <span className=" inline-block h-[5px] w-24 bg-black"></span>
                        Mangia
                    </div>
                </h1>
            </div>
            <div className="flex flex-col gap-10">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                </p>
                <div className="grid grid-cols-2 flex-1 gap-3">
                    <div className="bg-slate-400 row-span-2 rounded-3xl"></div>
                    <div className="bg-slate-400 rounded-3xl"></div>
                    <div className="bg-slate-400 rounded-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
