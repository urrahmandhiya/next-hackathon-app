import React from 'react'
import Button from './Button';

export const FEATURES = [
    {
        title: 'Farming',
        backgroundImage: "bg-bg-img-1",
        description:
            'Visit a local organic garden and learn about sustainable farming techniques.',
    },
    {
        title: 'Waterfall',
        backgroundImage: 'bg-bg-img-2',
        description:
            "Enjoy the stunning of Leuwimalang Waterfall, this place is perfect for relaxing, and taking pictures.",
    },
    {
        title: 'Trekking',
        backgroundImage: 'bg-bg-img-3',
        description:
            'Explore challenging trekking trails amidst forests and rice fields. Experience the beauty of nature.',
    },
    {
        title: 'Hiking',
        backgroundImage: 'bg-bg-img-4',
        description:
            ' Get an exciting hiking experience. Enjoy the challenges of varied terrain and spectacular views from a height.',
    },
];

const AttractionPage = () => {
    return (
        <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-12 mb-24">
            <div className="w-full max-w-sm min-w-[80%] mx-auto py-6 lg:py-16 3xl:py-0">
                <div className='relative mb-8'>
                    <h2 className="bold-40 lg:bold-64">Attraction</h2>
                </div>
                <div className="flex items-center gap-12">
                    <div className="relative w-full">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm lg:text-lg border border-slate-200 rounded-lg pl-3 pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow whitespace-nowrap"
                            placeholder="Search something here..."
                        />
                        <button
                            className="absolute top-2 lg:top-3 right-2 flex items-center rounded py-2 px-3 border border-transparent text-center text-sm text-slate-800 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <Button
                        type='button'
                        title='Booking'
                        variant='btn_judge_gray'
                    />
                </div>
            </div>
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="z-20 flex w-full flex-col lg:w-[100%]">
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
                        {FEATURES.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                title={feature.title}
                                backgroundImage={feature.backgroundImage}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

type FeatureItem = {
    title: string;
    backgroundImage: string;
    description: string;
}

const FeatureItem = ({ title, backgroundImage, description }: FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-stat shadow-lg rounded p-6">
            <div className={`rounded p-24 lg:px-20 lg:py-28 ${backgroundImage} w-full object-cover object-center`}>
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                {title}
            </h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    )
}

export default AttractionPage