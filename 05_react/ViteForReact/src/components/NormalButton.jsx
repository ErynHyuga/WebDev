import React from 'react'

export default function NormalButton({title}) {
  return (
    <div className='w-30 bg-cyan-700 h-10 justifyContent-center hover:bg-red-700'>
        <h1>{title}</h1>
    </div>
  )
}
