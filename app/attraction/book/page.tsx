'use client'

import Button from '@/components/Button';
import Link from 'next/link';
import React, { useState } from 'react';

const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        leavingFrom: '',
        goingTo: '',
        schedule: '',
        people: '',
        paymentMethod: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="w-full my-4 flex-grow">
            <section className="lg:max-w-[785px] mx-auto p-3 bg-white rounded-2xl drop-shadow-md mb-12 mt-12 font-bold text-black">
                <div>
                    <div>
                        <div className="mx-auto max-w-2xl lg:mx-0 p-8">
                            <h2 className="text-5xl font-bold tracking-tight text-black">Booking Form</h2>
                        </div>
                    </div>
                    <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-xl font-extrabold text-black">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="pl-4 bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-xl font-extrabold text-black">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="pl-4 bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="leavingFrom" className="block mb-2 text-xl font-extrabold text-black">Leaving From</label>
                            <input
                                type="text"
                                id="leavingFrom"
                                name="leavingFrom"
                                className="pl-4 bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter departure location"
                                value={formData.leavingFrom}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="goingTo" className="block mb-2 text-xl font-extrabold text-black">Going To</label>
                            <input
                                type="text"
                                id="goingTo"
                                name="goingTo"
                                className="pl-4 bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter destination"
                                value={formData.goingTo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="schedule" className="block mb-2 text-xl font-extrabold text-black">Schedule</label>
                            <input
                                type="date"
                                id="schedule"
                                name="schedule"
                                className="pl-4 bg-white border border-black text-black block w-full text-sm rounded-lg p-2.5 placeholder-gray-400"
                                value={formData.schedule}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="people" className="block mb-2 text-xl font-extrabold text-black">Number of People</label>
                            <input
                                type="number"
                                id="people"
                                name="people"
                                className="pl-4 bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                placeholder="Enter number of people"
                                value={formData.people}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="paymentMethod" className="block mb-2 text-xl font-extrabold text-black">Payment Method</label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                className="pl-4 bg-white border border-black text-gray-400 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select payment method...</option>
                                <option value="credit_card">Credit Card</option>
                                <option value="bank_transfer">Bank Transfer</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>

                        <div className="flex justify-center mb-5">
                            <Link href={'/'} >
                                <Button
                                    type="button"
                                    title="Book Now"
                                    variant="btn_judge_gray"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Book;
