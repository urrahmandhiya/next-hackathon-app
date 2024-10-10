import React from 'react';
import Button from './Button';
import Link from 'next/link';

const SuggestionForm = () => {
    return (
        <main className="w-full my-4 flex-grow">
            <section className="lg:max-w-[785px] mx-auto bg-olivine rounded-2xl drop-shadow-lg p-12 m-12 font-bold text-black">
                <div className="mx-auto max-w-2xl lg:mx-0 p-8">
                    <h2 className="text-5xl font-bold tracking-tight text-white">Suggestion Form</h2>
                </div>
                <form className="max-w-md mx-auto" method="POST" action="/api/suggestions">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            id="floating_name"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_name"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-white peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea
                            name="suggestion"
                            id="floating_suggestion"
                            className="block p-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            required
                        ></textarea>
                        <label
                            htmlFor="floating_suggestion"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Suggestion
                        </label>
                    </div>
                    <Link href={'/'} >
                        <Button
                            type="button"
                            title="Send"
                            variant="btn_judge_gray"
                        />
                    </Link>
                </form>
            </section>
        </main>
    );
};

export default SuggestionForm;
