import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router";


type Props = {}

export const HomeButton = (props: Props) => {
    return (
        <>
            <div className="text-2xs ">
                <Link to="/">🏠</Link>
            </div>
            
        </>
    )
}