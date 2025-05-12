import React, { useEffect, useState } from 'react'
import { TeamCard } from './TeamCard'; 

interface Team {
    teamId: number,
    name: string,
    shortname?: string,
    teamIconUrl: string 
}
type Props = {}

export const TeamContainer = (props: Props) => {
    const [teams, setTeams] = useState<Team[]>([])
    
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2024")
            .then((res) => res.json())
            .then((data) => {
                setTeams(data);
            })
    }, [])

    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center p-4">
                {teams.map((team: Team) => (
                    <TeamCard 
                        key={team.teamId} 
                        teamId={team.teamId} 
                        name={team.name} 
                        shortname={team.shortname} 
                        icon={team.teamIconUrl}
                    />
                ))}
            </div>
        </>
    )
}