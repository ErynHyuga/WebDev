 import React from 'react'
 
 export default function Card({name, title}) {
   return (
     <div className='bg-green-700 text-white text-center border-2 border-black mt-10 mb-10'>   
        <p>Guten Tag {title} {name}</p>
    </div>
   );
 }
 