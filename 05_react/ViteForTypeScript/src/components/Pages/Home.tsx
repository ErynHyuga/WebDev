import { Link } from "react-router";
import { HomeButton } from "../HomeButton";

type Props = {}

export const Home = (props: Props) => {
  return (
    <>
      <div className="ml-8">
        <div className="text-5xl m-8 ml-0">
        <HomeButton/>
        </div>
        
        <p>yeah buddy</p>
        
        <div><Link to="/OurMembers">People</Link></div>
        <div><Link to="/Menu">Menu</Link></div>
        <div><Link to="/about">About</Link></div>
        
      </div>
    </>
  )
}