import React from 'react'
import { HomeButton } from "../HomeButton"; 
import { Link } from'react-router'

import { useState } from "react";
import { useEffect } from "react";
import { TeamContainer } from '../TeamContainer';

type Props = {}

export const Football = (props: Props) => {
  return (
    <>
    
      <HomeButton />
      <div className="text-5xl m-8 ml-10">Football</div>
      <div>
        <TeamContainer />
      </div>
    </>
  )
}