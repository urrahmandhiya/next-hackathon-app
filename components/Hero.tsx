import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { Map } from './Map'

const Hero = () => {
    return (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="relative flex flex-1 justify-center items-center">
                <Map />
                <Link href={'/'} >
                    <Image
                        src={'/map-pointer.svg'}
                        alt='map-pointer'
                        width={25}
                        height={25}
                        className='absolute top-[40%] left-[50%] transform transition-transform duration-300 hover:scale-125
                        filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'
                    />
                </Link>
                <Link href={'/'} >
                    <Image
                        src={'/map-pointer.svg'}
                        alt='map-pointer'
                        width={25}
                        height={25}
                        className='absolute top-[25%] left-[25%] transform transition-transform duration-300 hover:scale-125
                        filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'
                    />
                </Link>
                <Link href={'/'} >
                    <Image
                        src={'/map-pointer.svg'}
                        alt='map-pointer'
                        width={25}
                        height={25}
                        className='absolute top-[80%] left-[75%] transform transition-transform duration-300 hover:scale-125
                        filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'
                    />
                </Link>
                <Link href={'/'} >
                    <Image
                        src={'/map-pointer.svg'}
                        alt='map-pointer'
                        width={25}
                        height={25}
                        className='absolute top-[65%] left-[80%] transform transition-transform duration-300 hover:scale-125
                        filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'
                    />
                </Link>
                <Link href={'/'} >
                    <Image
                        src={'/map-pointer.svg'}
                        alt='map-pointer'
                        width={25}
                        height={25}
                        className='absolute top-[55%] left-[65%] transform transition-transform duration-300 hover:scale-125
                        filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'
                    />
                </Link>
            </div>
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 shadow-lg p-6 rounded">
                <h1 className="bold-52 lg:bold-88">Leuwimalang Tourism</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    Lets Find Interesting Tourist Spot and Create New Memories
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt="star"
                                width={48}
                                height={48}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Visit Attraction"
                        variant="btn_judge_gray"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero