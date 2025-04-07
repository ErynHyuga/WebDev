import React from 'react'

type Props = {title: string, name: string, imageURL: string}

export const PeopleCard = (props: Props) => {
  return (
    <div className='flex border-2 border-black m-1 p-2 hover:bg-green-700' style={{ flex: '1 1 calc(25% - 10px)', boxSizing: 'border-box' }}>
            <div className='w-25 m-3'>
                <h4>{props.title}</h4>
                <h2 className='font-bold'>{props.name}</h2>
            </div>
            <img src={props.imageURL} alt='img' className='object-cover w-70 h-100'/>
        </div>
  )
}