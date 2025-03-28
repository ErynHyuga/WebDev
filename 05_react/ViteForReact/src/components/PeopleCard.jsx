import React from 'react'

const rando = Math.floor(Math.random() * 1000)
export default function PeopleCard({ name, title, imageURL }) {
    return (
        <div className='flex border-2 border-black m-1 p-2 hover:bg-green-700' style={{ flex: '1 1 calc(25% - 10px)', boxSizing: 'border-box' }}>
            <div className='w-25 m-3'>
                <h4>{title}</h4>
                <h2 className='font-bold'>{name}</h2>
            </div>
            <img src={imageURL} alt='img' className='object-cover w-70 h-100'/>
        </div>

    )
}
