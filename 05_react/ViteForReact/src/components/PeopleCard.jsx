import React from 'react'

export default function PeopleCard({ name, title, image}) {
    return (
        <div>
            <div className='flexbox-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              
                    <div className='flex border-2 border-black m-1 p-2' style={{ flex: '1 1 calc(25% - 10px)', boxSizing: 'border-box' }}>
                        <div className='m-3'>
                            <h4>{title}</h4>
                            <h2>{name}</h2>
                        </div>
                        <img src={image}  className='h-100 w-100' />
                    </div>
              
            </div>
        </div>
    )
}
