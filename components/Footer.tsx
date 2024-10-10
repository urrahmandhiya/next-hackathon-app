import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="flexCenter p-12 bg-judgeGray text-white">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image src={'/temp-logo.svg'}
                            alt='logo' width={100}
                            height={10} />
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>

                        {/* Learn More Column */}
                        <FooterColumn title="Learn More">
                            <ul className="regular-14 flex flex-col gap-4 text-white">
                                <Link href="/">About Leuwimalang</Link>
                                <Link href="/">Jobs</Link>
                                <Link href="/">Privacy Policy</Link>
                                <Link href="/">Contact Us</Link>
                            </ul>
                        </FooterColumn>

                        {/* Our Community Column */}
                        <FooterColumn title="Our Community">
                            <ul className="regular-14 flex flex-col gap-4 text-white">
                                <Link href="/">Blog</Link>
                            </ul>
                        </FooterColumn>

                        {/* Contact Us Column */}
                        <FooterColumn title="Contact Us">
                            <Link href="/" className="flex gap-4 md:flex-col lg:flex-row">
                                <p className="whitespace-nowrap">Admin Officer:</p>
                                <p className="medium-14 whitespace-nowrap text-white">
                                    123-456-7890
                                </p>
                            </Link>
                            <Link href="/" className="flex gap-4 md:flex-col lg:flex-row">
                                <p className="whitespace-nowrap">Email Officer:</p>
                                <p className="medium-14 whitespace-nowrap text-white">
                                    Officer@email.com
                                </p>
                            </Link>
                        </FooterColumn>

                        {/* Social Column */}
                        <FooterColumn title="Social">
                            <ul className="regular-14 flex gap-4 text-white">
                                <Link href="/">
                                    <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                                </Link>
                                <Link href="/">
                                    <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                                </Link>
                                <Link href="/">
                                    <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                                </Link>
                                <Link href="/">
                                    <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
                                </Link>
                            </ul>
                        </FooterColumn>

                    </div>
                </div>
                <div className="border bg-white" />
                <p className="regular-14 w-full text-center text-white">2024 Leuwimalang | All rights reserved</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer