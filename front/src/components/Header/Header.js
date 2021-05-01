import PrimarySearchAppBar from "../Nav/Nav"

export const Header = () => {

    const authenticated = true;

    return (
        <header>
             {authenticated && <PrimarySearchAppBar/>}
        </header>
    )
}