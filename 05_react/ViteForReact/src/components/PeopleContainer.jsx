import React, { useEffect, useState } from 'react'
import PeopleCard from './PeopleCard'


export default function PeopleContainer() {
  const manualPeople = [

    { title: "Schmishtar", name: "Ishtar", image: "src/assets/ishtar.jpg" },
    { title: "dr Melker", name: "net dr Mister", image: "src/assets/enkidu.jpg" },
    { title: "Great King of Kings", name: "Gilgamesh", image: "src/assets/gilgamesh.jpg" },
    { title: "Saggumar", name: "Ea-Nasir", image: "src/assets/ea.jpg" },
    { title: "Kollege", name: "Melkmir", image: "src/assets/hittite.jpg" },
    { title: "Freund der Sonne", name: "Smasha", image: "src/assets/shamash.jpg" }
  ];
  const [people, setPeople] = useState([])
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(() => {
    fetch('https://67b848f6699a8a7baef36c05.mockapi.io/People').then(
      (res) => res.json().then((data) => {
        setPeople(data)
        setFilteredPeople(data)
      })
    );
  }, [])


  const filterPeople = (searchString) => {
    let filteredPeople = people.filter(person => person.title.includes(searchString));
    setFilteredPeople(filteredPeople)
  }
  return (
    <>
      <div className='mb-2 '>
        <div className='border-2 border-black p-2 '>
          <h1>People Search</h1>
          <input className='p-2 border-2' type="text" placeholder='Search' onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
          />
        </div>

      </div>

      <div className=' ml-15 flexbox-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {filteredPeople.map((person) => (
          <div className='w-110 '>
            <PeopleCard name={person.title} title={person.jobtitle} imageURL={person.image} />
          </div>
        ))}
      </div>
    </>
  );
}