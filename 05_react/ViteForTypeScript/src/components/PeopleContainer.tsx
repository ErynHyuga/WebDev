import React from 'react'
import { useState, useEffect } from "react";
import { PeopleCard } from "./PeopleCard";

interface Person {
    title: string;
    jobtitle: string;
    image: string;
}

type Props = {}

export const PeopleContainer: React.FC<Props> = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);

    useEffect(() => {
        const fetchPeople = async (): Promise<void> => {
            const response = await fetch('https://67b848f6699a8a7baef36c05.mockapi.io/People');
            const data: Person[] = await response.json();
            setPeople(data);
            setFilteredPeople(data);
        };

        fetchPeople();
    }, []);

    const filterPeople = (searchString: string): void => {
        const filtered = people.filter(person =>
            person.title.toLowerCase().includes(searchString.toLowerCase())
        );
        setFilteredPeople(filtered);
    };

    return (
        <>
            <div className='mb-2'>
                <div className='border-2 border-black p-2'>
                    <h1>People Search</h1>
                    <input
                        className='p-2 border-2'
                        type="text"
                        placeholder='Search'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            console.log(e.target.value);
                            filterPeople(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className='ml-15 flexbox-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {filteredPeople.map((person: Person, index: number) => (
                    <div key={index} className='w-110'>
                        <PeopleCard
                            name={person.title}
                            title={person.jobtitle}
                            imageURL={person.image}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
