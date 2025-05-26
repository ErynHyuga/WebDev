import React, { useEffect, useState } from 'react'
import { TeamCard } from './TeamCard';
import { TeamDetail } from './TeamDetail';

interface Team {
    teamId: number,
    teamName: string,
    shortName?: string,
    teamIconUrl: string
}
type Props = {}

export const TeamContainer = (props: Props) => {
    const [teams, setTeams] = useState<Team[]>([])
    const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    useEffect(() => {
        const fetchTeam = async (): Promise<void> => {
            const response = fetch("https://api.openligadb.de/getavailableteams/bl1/2024");
            const data: Team[] = await (await response).json()
            setTeams(data);
            setFilteredTeams(data);
        }
        fetchTeam()
    }, []);

    const filterTeams = (searchString: string): void => {
        const filtered = teams.filter(team =>
            team.teamName.toLowerCase().includes(searchString.toLowerCase())
        );
        setFilteredTeams(filtered);
    };
    

    return (
        <>

            <div className='flex'>
                <div>
                    <div className='border-2 border-black p-2'>
                        <h1>Club Search</h1>
                        <input
                            className='p-2 border-2'
                            type="text"
                            placeholder='Search'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                console.log(e.target.value);
                                filterTeams(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center p-4">
                        {filteredTeams.map((team: Team) => (
                            <TeamCard
                                teamId={team.teamId}
                                name={team.teamName}
                                shortname={team.shortName}
                                icon={team.teamIconUrl}
                                onClick={() => setSelectedTeam(team)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <TeamDetail />
                </div>
            </div>


        </>
    )
}