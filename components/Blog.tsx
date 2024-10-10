import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <section className="flex items-center justify-center flex-col">
            <div className="flex flex-col mx-auto max-w-[1440px] relative w-full p-6">
                <Image
                    src="/blog-banner2.png"
                    alt="blog-banner"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl shadow-lg"
                />
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-[36px] font-[700] leading-[120%]
                    lg:text-[52px] lg:font-[700] lg:leading-[120%] pb-4">
                        Relaxing on the Riverbank of Leuwimalang Village
                    </a>
                    <a href="#" className="pb-6">
                        In the middle of trekking, we found a small river with a clear flow. We stopped for a moment to rest, soaking our feet in the cool water. The surrounding scenery was very calming, with.....
                    </a>
                    <p className="text-lg pb-3">
                        By <a href="#" className="font-semibold hover:text-gray-800">Luzika</a> - April 17, 2023
                    </p>
                </div>
            </div>

            <div className="w-[90%] my-4">
                <hr className="border-t border-judgeGray" />
            </div>

            {/* Blog Content Section */}
            <div className="container mx-auto flex flex-wrap py-6">
                {/* Posts Section */}
                <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
                        <article key={''} className=" md:flex md:w-full shadow-lg my-4">
                            {/* Article Image */}
                            <a href="#" className="hover:opacity-75 flex justify-center items-center">
                                <Image
                                    src={'/blog-post1.png'}
                                    alt={'blog-post1'}
                                    width={300}
                                    height={300}
                                    className="w-full rounded"
                                />
                            </a>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                                The Farming Process in Leuwimalang Village
                                </a>
                                <a href="#" className="pb-6">
                                During our visit to Leuwimalang Village, we were invited by the locals to see the farming process in the rice fields. They showed us how to plant rice.....
                                </a>
                                <p className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">Urney</a> - December 14, 2022
                                </p>
                            </div>
                        </article>
                        <article key={''} className=" md:flex md:w-full shadow-lg my-4">
                            {/* Article Image */}
                            <a href="#" className="hover:opacity-75 flex justify-center items-center">
                                <Image
                                    src={'/blog-post2.png'}
                                    alt={'blog-post2'}
                                    width={300}
                                    height={300}
                                    className="w-full rounded"
                                />
                            </a>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                                Enjoying the Cool Air While Trekking in Leuwimalang
                                </a>
                                <a href="#" className="pb-6">
                                Early in the morning we set off for trekking around Leuwimalang Village. The path was quite challenging, but the beautiful natural scenery an.....
                                </a>
                                <p className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">Hoseki</a> - July 12, 2022
                                </p>
                            </div>
                        </article>
                        <article key={''} className=" md:flex md:w-full shadow-lg my-4">
                            {/* Article Image */}
                            <a href="#" className="hover:opacity-75 flex justify-center items-center">
                                <Image
                                    src={'/blog-post3.png'}
                                    alt={'blog-post3'}
                                    width={300}
                                    height={300}
                                    className="w-full rounded"
                                />
                            </a>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                                Typical Culinary in Leuwimalang
                                </a>
                                <a href="#" className="pb-6">
                                Leuwimalang Village cuisine is not just about food, but also part of its rich tradition and culture. Visiting this village provides an opportunity to.....
                                </a>
                                <p className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">Lyca</a> - October 20, 2021
                                </p>
                            </div>
                        </article>
                        <article key={''} className=" md:flex md:w-full shadow-lg my-4">
                            {/* Article Image */}
                            <a href="#" className="hover:opacity-75 flex justify-center items-center">
                                <Image
                                    src={'/blog-post4.png'}
                                    alt={'blog-post4'}
                                    width={300}
                                    height={300}
                                    className="w-full rounded"
                                />
                            </a>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                                Educational Tour in Leuwimalang
                                </a>
                                <a href="#" className="pb-6">
                                Experience in Leuwimalang Village, such as visiting an organic vegetable garden and learning about environmentally friendly farming methods.....
                                </a>
                                <p className="text-sm pb-3">
                                By <a href="#" className="font-semibold hover:text-gray-800">Olla</a> - January 13, 2021
                                </p>
                            </div>
                        </article>

                    {/* Pagination */}
                    <div className="flex justify-center items-center py-8 gap-1">
                        <a href="#" className="rounded h-10 w-10 bg-olivine hover:opacity-80 font-semibold text-white text-sm flex items-center justify-center">
                            1
                        </a>
                        <a href="#" className="rounded h-10 w-10 font-semibold text-black hover:bg-olivine hover:opacity-80  hover:text-white text-sm flex items-center justify-center">
                            2
                        </a>
                        <a href="#" className="rounded h-10 w-10 font-semibold text-black hover:text-olivinetext-sm flex items-center justify-center ml-3">
                            Next <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
