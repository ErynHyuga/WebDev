import React from 'react'
import PeopleCard from './PeopleCard'

export default function PeopleContainer() {

  const people = [
    { title: "Mag.", name: "Müller", image: "https://picsum.photos/200/300" },
    { title: "Dr.", name: "Schmidt", image: "https://picsum.photos/200/301" },
    { title: "Prof.", name: "Meier", image: "https://picsum.photos/200/302" },
    { title: "Ing.", name: "Weber", image: "https://picsum.photos/200/303" },
    { title: "Dipl.-Ing.", name: "Fischer", image: "https://picsum.photos/200/304" },
    { title: "Dr.", name: "Becker", image: "https://picsum.photos/200/305" },
    { title: "Mag.", name: "Hoffmann", image: "https://picsum.photos/200/306" },
    { title: "Prof.", name: "Schneider", image: "https://picsum.photos/200/307" },
    { title: "Ing.", name: "Koch", image: "https://picsum.photos/200/308" },
    { title: "Dipl.-Ing.", name: "Bauer", image: "https://picsum.photos/200/309" }
  ];
  return (
    <>
    {people.map((person, index) => (
      <PeopleCard key={index} title={person.title} name={person.name} image={person.image} />
    ))}
    </>
  )
}
