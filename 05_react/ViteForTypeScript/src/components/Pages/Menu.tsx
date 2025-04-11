import { HomeButton } from "../HomeButton";
import { List } from '../List';
type Props = {}

export const Menu = (props: Props) => {
    return (
        <>
            <HomeButton />
            <List items={['Beer', 'Tea', 'Radler', 'Leadlined Water']} />
        </>

    )
}