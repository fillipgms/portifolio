import Image from "next/image";
import React from "react";
import header from "@/public/header.jpg";
import { Button } from "../ui/button";
import imagePlaceholder from "@/public/imagePlaceholder.jpg";

const Hero = () => {
    return (
        <section className="h-svh grid md:grid-cols-2 place-content-center  gap-5 md:gap-y-10 gap-x-5 md:px-16 px-10 py-5">
            <Image
                {...header}
                alt="banner image"
                className="h-80 md:col-span-2 object-cover rounded-3xl"
            />
            <Button className="md:w-1/2 py-5 px-10 rounded-full">
                Vamos conversar
            </Button>
            <p className="row-start-3 md:row-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi obcaecati sint, reiciendis sequi quibusdam et sunt
                ducimus non aliquid dolorem ut, est ad voluptas eum. Non nostrum
                alias dolor quaerat.
            </p>
            <div className="h-full flex items-center row-start-2 md:row-auto">
                <h1 className="text-[3rem] md:text-[65px] md:text-left text-center font-bold md:after:hidden after:block after:h-[3px] after:w-full after:bg-black">
                    Fillip
                    <div className="md:flex inline-block items-center gap-2 md:px-0 px-3">
                        <span className="md:block hidden h-[5px] w-24 bg-black"></span>
                        Mangia
                    </div>
                </h1>
            </div>

            <div className="md:grid hidden grid-cols-2 grid-rows-2 max-h-52 flex-1 gap-3 ">
                <Image
                    {...imagePlaceholder}
                    alt="image placeholder"
                    className="row-span-2 rounded-2xl h-full w-full object-cover"
                />
                <Image
                    {...imagePlaceholder}
                    alt="image placeholder"
                    className="rounded-2xl h-full w-full object-cover"
                />
                <Image
                    {...imagePlaceholder}
                    alt="image placeholder"
                    className="rounded-2xl h-full w-full object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
