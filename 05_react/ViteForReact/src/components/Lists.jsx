import React from 'react'

export default function Lists({ items }) {
    return (
        <>
            <div className='w-50 ml-20' >
                <ul>
                    {items.map((item, index) => (
                        <li className='bg-purple-600 text-white border-2 border-black pl-10' key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </>
    )

}
