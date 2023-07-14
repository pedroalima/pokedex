import { NavLink } from "react-router-dom"

import "./index.scss"

function Header() {
    return (
        <div className='container'>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link f-st-color">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pokedex" className="nav-link f-st-color">Pokedex</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header