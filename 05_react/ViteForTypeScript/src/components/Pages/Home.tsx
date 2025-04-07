import React from 'react'
import { Link } from "react-router";

type Props = {}

export const Home = (props: Props) => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <p>yeah buddy</p>
        <Link to="/about">About</Link>
      </div>
    </>
  )
}