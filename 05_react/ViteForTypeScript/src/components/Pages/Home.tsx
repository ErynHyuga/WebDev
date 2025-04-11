import { Link } from "react-router";
import { HomeButton } from "../HomeButton";

type Props = {}

export const Home = (props: Props) => {
  return (
    <>
      <div>
        <HomeButton/>
        <h1>Home</h1>
        <p>yeah buddy</p>
        
        <div><Link to="/OurMembers">People</Link></div>
        <div><Link to="/Menu">Menu</Link></div>
        <div><Link to="/about">About</Link></div>
        
      </div>
    </>
  )
}