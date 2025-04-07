import React from 'react'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="./about">About us</Link>
    </>
  )
}
