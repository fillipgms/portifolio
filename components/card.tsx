import Image, { ImageProps } from "next/image";
import React from "react";

interface cardProps {
    img: ImageProps;
    name: string;
    desc: string;
}

const card = ({ img, name, desc }: cardProps) => {
    return (
        <div>
            <Image {...img} alt={name} />
        </div>
    );
};

export default card;
