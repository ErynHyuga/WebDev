import React from 'react'

export default function PeopleCard({ names, titles }) {
    return (
        <div>
            <div>
                {names.map((names, index) => (
                    <div>
                        <h2>{names}</h2>
                        <h4>{titles}</h4>
                    </div>
                ))}

            </div>
        </div>
    )
}
