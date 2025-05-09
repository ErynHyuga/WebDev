import React from 'react'
import { HomeButton } from "../HomeButton";
import { Link } from 'react-router';
type Props = {}

export const GiveData = (props: Props) => {
    const person = { titel: 'Dei', name: 'Ishtar' }
    return (
        <>
            <HomeButton />
            <div className="text-5xl m-8 ml-0">GiveData</div>
            <div className="hover:text-blue-800 text-blue-300 underline">
                <Link to="/dataleecher/leech"
                state={{person:person, title:"test"}}>Give Data To</Link>
            </div>
        </>
    )
}