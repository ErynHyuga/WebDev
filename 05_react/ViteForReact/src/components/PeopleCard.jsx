import React from 'react'

export default function PeopleCard({ names, titles, image, imgDescription }) {
    return (
        <div>
            <div className='flexbox-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {names.map((name, index) => (
                    <div className='flex border-2 border-black m-1 p-2' key={index} style={{ flex: '1 1 calc(25% - 10px)', boxSizing: 'border-box' }}>
                        <div className='m-3'>
                            <h4>{titles[index]}</h4>
                            <h2>{name}</h2>
                        </div>
                        <img src={image[index]} alt={imgDescription[index]} className='h-100 w-100' />
                    </div>
                ))}
            </div>
        </div>
    )
}
