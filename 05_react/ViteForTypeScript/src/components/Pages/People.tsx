import React from 'react'
import { PeopleContainer } from '../PeopleContainer'
import { HomeButton } from "../HomeButton";
type Props = {}

export const People = (props: Props) => {
  return (
    <>
        <HomeButton/>
        <PeopleContainer/>
    </>
  )
}