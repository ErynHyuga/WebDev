import React from 'react'

export default function InfoCard({ image, name, title, information, imgDescription }) {
    return (
        <div className='text-black w-100 text-center border-2 border-black mt-10 mb-10'>
            <img src={image} alt={imgDescription} className='w-100' />
            <div>
                <p className='hover:bg-red-700'>{name}</p>
                <p>{title}</p>
                <p>{information}</p>
            </div>
        </div>

    );
}
