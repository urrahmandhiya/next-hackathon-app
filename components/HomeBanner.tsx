import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
    return (
        <section className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center mx-auto h-[300px] lg:h-[580px] max-w-full relative w-full">
                <Image
                    src="/home-banner2.png"
                    alt="home-banner2"
                    width={1440}
                    height={580}
                    className="w-full h-full object-cover object-center"
                />
                <div
                    className="absolute bottom-5 lg:bottom-10 
                    text-white left-5 lg:left-10 flex flex-col xl:max-w-[390px]"
                >
                    <p className='text-[20px] font-[700] 
                    md:text-[40px] md:font-[700] md:leading-[120%]
                    lg:text-[64px] lg:font-[700] lg:leading-[120%]'>Leuwimalang</p>
                    <p className='text-[20px] font-[700] 
                    md:text-[40px] md:font-[700] md:leading-[120%]
                    lg:text-[64px] lg:font-[700] lg:leading-[120%]'>Tourism</p>
                    <p className='xl:text-[20px] lg:text-nowrap'>Lets Find Interesting Tourist Spot and Create New Memories</p>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner