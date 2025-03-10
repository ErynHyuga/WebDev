 import React from 'react'
 
 export default function Card({name, title}) {
   return (
     <div className='bg-green-700 text-white text-center border-2 border-black'>   
        <p>Guten Tag {title} {name}</p>
    </div>
   );
 }
 