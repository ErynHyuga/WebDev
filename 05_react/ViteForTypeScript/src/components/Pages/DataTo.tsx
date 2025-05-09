import React from 'react'
import { HomeButton } from "../HomeButton";
import { Link, useLocation } from'react-router';
type Props = {}

export const DataTo = (props: Props) => {
    const location = useLocation()
    console.log(location);
    
    const person = location.state.person;
    
    return (
        <>
            <HomeButton />
            <div className="text-5xl m-8 ml-0">DataTo</div>
            <div className="hover:text-blue-800 text-blue-300 underline">
                <Link to="/dataleecher">Go back</Link>
            </div>
            <div>
                
                <p>Salutation {person.name}</p>
            </div>
        </>
    )
}