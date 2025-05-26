import React, { useEffect, useState } from 'react'

interface Team {
  teamId: number,
  name: string,
  shortname?: string,
  icon: string
}
type Props = {
  team?: Team | null
}

export const teamDetail = (props: Props) => {
  useEffect(() => { }, [])
  return (
    <>
      <div>
        <img src={props.team?.icon} alt={props.team?.name + "'s Logo"} />
        <h2>{props.team?.name}</h2>
        <p>{props.team?.shortname}</p>
        <p>{props.team?.teamId}</p>
      </div>
    </>
  )
}