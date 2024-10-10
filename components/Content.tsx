'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface BlogProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const BlogContent = ({ backgroundImage, title, subtitle }: BlogProps) => {
    return (
        <div
            className={`h-full w-full ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl`}
        >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="rounded-full bg-green-50 p-4 m-6">
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
    const blogs = [
        {
            backgroundImage: "bg-bg-img-5",
            title: "The Farming Process in Leuwimalang Village",
            subtitle: "Locals farming procedurs",
        },
        {
            backgroundImage: "bg-bg-img-6",
            title: "Cool Air While Trekking in Leuwimalang",
            subtitle: "Early in the morning",
        },
        {
            backgroundImage: "bg-bg-img-7",
            title: "Culinary in Leuwimalang",
            subtitle: "Tradition and Culture",
        },
        {
            backgroundImage: "bg-bg-img-8",
            title: "Educational Tour",
            subtitle: "Environmental",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = () => {
        setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
    };

    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="padding-container max-container w-full pb-24 m-12">
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Discover Leuwimalang</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">Exploring hidden gems and breathtaking agrotourism spots in Leuwimalang Village has never been easier. Whether you&apos;re discovering nature trails, experiencing local culture, or visiting farms, our platform provides detailed maps and attraction guides to ensure you never miss a thing.</p>
                </div>
            </div>
            <div className="relative flex items-center justify-between w-full overflow-hidden">
                <button className="absolute left-0 p-4 z-10 text-black" onClick={showPrev}>
                    {"<"}
                </button>
                <div
                    className="flex h-[340px] w-full lg:h-[400px] xl:h-[540px] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${blogs.length * 100}%`,
                    }}
                >
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            style={{ width: "100%" }} // Ensures each slide takes full width
                        >
                            <BlogContent
                                backgroundImage={blog.backgroundImage}
                                title={blog.title}
                                subtitle={blog.subtitle}
                            />
                        </div>
                    ))}
                </div>
                <button className="absolute right-0 p-4 z-10 text-white" onClick={showNext}>
                    {">"}
                </button>
            </div>
            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-olivine p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-14 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Looking for Local Tips</strong> And Stories?
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Our blog is here to guide you! Get tips, stories, and recommendations from locals and travelers to explore the best of Leuwimalang. From hidden spots to must-visit attractions, the blog will help you navigate your adventure with ease.
                    </p>
                    <Image
                        src="/quote.svg"
                        alt="quote"
                        width={186}
                        height={219}
                        className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0;"
                    />
                    <Link
                        href={'/blog'}
                        className="p-6 flex justify-center items-center"
                    >
                        <Button
                            type="button"
                            title="Visit Blog"
                            variant="btn_judge_gray"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Content;
