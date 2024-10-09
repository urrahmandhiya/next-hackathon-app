'use client'

import { useState } from "react";
import Image from "next/image";

interface AttractionProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const Attraction = ({ backgroundImage, title, subtitle }: AttractionProps) => {
    return (
        <div
            className={`h-full w-full ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl`}
        >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image src="/folded-map.svg" alt="map" width={16} height={16} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Content = () => {
    const attractions = [
        {
            backgroundImage: "bg-bg-img-1",
            title: "Mountain View Camp",
            subtitle: "Somewhere in the Wilderness",
        },
        {
            backgroundImage: "bg-bg-img-2",
            title: "River Rapids Adventure",
            subtitle: "Beside the River",
        },
        {
            backgroundImage: "bg-bg-img-2",
            title: "Canyon Cliff",
            subtitle: "Rocky Heights",
        },
        {
            backgroundImage: "bg-bg-img-2",
            title: "Desert Trek",
            subtitle: "Endless Sands",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = () => {
        setCurrentIndex((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
    };

    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="relative flex items-center justify-between w-full overflow-hidden">
                <button className="absolute left-0 p-4 z-10 text-white" onClick={showPrev}>
                    {"<"}
                </button>
                <div
                    className="flex h-[340px] w-full lg:h-[400px] xl:h-[540px] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${attractions.length * 100}%`,
                    }}
                >
                    {attractions.map((attraction, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            style={{ width: "100%" }} // Ensures each slide takes full width
                        >
                            <Attraction
                                backgroundImage={attraction.backgroundImage}
                                title={attraction.title}
                                subtitle={attraction.subtitle}
                            />
                        </div>
                    ))}
                </div>
                <button className="absolute right-0 p-4 z-10 text-white" onClick={showNext}>
                    {">"}
                </button>
            </div>
            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost</strong> And Not Knowing The Way?
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That is why we are here for those of you who want to start an adventure.
                    </p>
                    <Image
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    );
};

export default Content;
