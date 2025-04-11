import React from 'react'

type Props = { items: string[] }

export const List = (props: Props) => {
    return (
        <>
            <div className="w-1/2 ml-20 border-2 bg-green-200">
                <ul>
                    {props.items.map((item, index) => (
                        <li className='bg-purple-600 text-white border-2 border-black pl-10' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}