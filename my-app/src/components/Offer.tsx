import React from 'react';
import Image from 'next/image';

const Offer = () => {
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row'>
            <div className='text-white flex-1 text-xl uppercase flex flex-col items-center justify-center text-center gap-8 p-6'>
                <h1 className="text-5xl font-bold xl:text-6xl">Delicious Vegetarian & Vegan Dishes</h1>
                <p className="xl:text-xl">Whether you're looking for fresh, flavorful salads, hearty plant-based meals, or indulgent vegetarian treats, we have something for every taste. Limited Time Only!</p>
                <button className="bg-red-500 text-white px-6 py-4 rounded-md">Order Now</button>
            </div>
            <div className="flex-1 w-full relative">
                <Image src="/assets/leavyPlate.jpg" alt="offer" fill className='object-contain' />
            </div>
            
        </div>
    )
}

export default Offer;