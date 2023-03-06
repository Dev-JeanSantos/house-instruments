import "./styles.css";
import "@popperjs/core";
import Select from "react-select";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const options = [
    { value: 'violao', label: 'Violão'},
    { value: 'violino', label: 'Violino'},
    { value: 'violocelo', label: 'Violocelo'},
    { value: 'viola', label: 'Viola'}
]

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md main-navbar">
            <div className="container-fluid">
                <div className="container-navbar">
                    <Logo className="container-image" />
                    <Select className="container-select" options={options} placeholder="Buscar"/>
                </div>
            </div>

        </nav>
    )
}


export default Navbar