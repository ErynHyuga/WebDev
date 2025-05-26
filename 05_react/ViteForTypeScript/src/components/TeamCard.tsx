import React from 'react'

type Props = {
  teamId: number,
  name: string,
  shortname?: string,
  icon: string
  onClick: () => void
}

export const TeamCard = (props: Props) => {
  console.log(props);
  let teamIdString: string = String(props.teamId)
  return (
    <div className='border-2 border-black p-4 rounded-lg w-60 hover:bg-gray-200'>
      <img src={props.icon} alt={teamIdString} className='w-full h-32 object-contain mb-2' />
      <h2 className='text-xl font-bold'>{props.name}</h2>
      <p className='text-gray-600'>{props.shortname}</p>

    </div>
  )
}