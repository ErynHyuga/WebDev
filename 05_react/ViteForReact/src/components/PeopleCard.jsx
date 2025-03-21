import React from 'react'

export default function PeopleCard({ names, titles }) {
    return (
        <div>
            <div className='flex'>
                {names.map((name, index) => (
                    <div className='p-2' key={index}>
                        <h2>{name}</h2>
                        <h4>{titles[index]}</h4>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
