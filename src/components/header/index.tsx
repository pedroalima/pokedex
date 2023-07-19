import { NavLink } from "react-router-dom"

import logo2 from "../../assets/images/logo2.png"

import "./index.scss"

function Header() {
    return (
        <div className='container p-0' id="header">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link f-st-color">
                        <img src={logo2} alt="Logo" className="image-custom" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header