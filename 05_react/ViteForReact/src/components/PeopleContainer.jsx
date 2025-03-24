import React from 'react'
import PeopleCard from './PeopleCard'

export default function PeopleContainer() {
  const people = [

    { title: "Schmishtar", name: "Ishtar", image: "src/assets/ishtar.jpg"},
    { title: "dr Melker", name: "net dr Mister", image: "src/assets/enkidu.jpg"},
    { title: "Great King of Kings", name: "Gilgamesh", image: "src/assets/gilgamesh.jpg"},
    { title: "Saggumar", name: "Ea-Nasir", image: "src/assets/ea.jpg"},
    { title: "Kollege", name: "Melkmir", image: "src/assets/hittite.jpg"},
    { title: "Freund der Sonne", name: "Smasha", image: "src/assets/shamash.jpg"}


  ];

  return (
    <>

<div className='flexbox-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {people.map((person, index) => (
        
          <PeopleCard key={index} title={person.title} name={person.name} image={person.image}  />
      ))}
        </div>  

    </>
  )
}
