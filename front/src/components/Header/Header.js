import { connect } from "react-redux";
import PrimarySearchAppBar from "../Nav/Nav"

const Header = (props) => {

    return (
        <header>
            <PrimarySearchAppBar />
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);