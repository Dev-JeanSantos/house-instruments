import "./styles.css";
import "@popperjs/core";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md main-navbar">
            <div className="container-fluid">
                <div className="container-image">
                    <Logo />
                </div>
            </div>

        </nav>
    )
}


export default Navbar