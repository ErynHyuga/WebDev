import React from 'react';
import { useState } from 'react';




let count = 0

export default function Button({title, start}) {
  const [amountOfClicks, setAmountOfClicks] = useState(start);
  return (
    
      <div className='w-50 bg-cyan-700 h-50 justifyContent-center' onClick={() => {
        setAmountOfClicks(amountOfClicks + 1);
      }}>{title} <div> {amountOfClicks} </div></div>
    
  )
}
