import { Link } from "react-router";
import { HomeButton } from "../HomeButton";
import { defineConfig } from 'vite';

type Props = {}

export const Home = (props: Props) => {
  return (
    <>
      <HomeButton />
      <div className="ml-8">
        <div className="text-5xl m-8 ml-0">

          <h1>Home</h1>
        </div>
        <p>yeah buddy</p>
        <div>
          <div className="ml-5">
            <div className="hover:text-blue-800 text-blue-300 underline"><Link to="/OurMembers">People</Link></div>
            <div className="hover:text-blue-800 text-blue-300 underline"><Link to="/Menu">Menu</Link></div>
            <div className="hover:text-blue-800 text-blue-300 underline"><Link to="/about">About</Link></div>
            <div className="hover:text-blue-800 text-blue-300 underline"><Link to="/dataleecher">Data Give-away</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}