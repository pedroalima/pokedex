import { NavLink, useNavigate } from "react-router-dom"

import logo2 from "../../assets/images/logo2.png"

import "./index.scss"

function Header({ setSearchValue }: { setSearchValue: any }) {
    const navigate = useNavigate()

    const handleChange = (e: { target: { value: string | number } }) => {
        if (e.target.value === "") {
            navigate("/")
        } else {
            navigate("/search")
            setSearchValue(e.target.value)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='container p-0' id="header">
            <nav className="navbar navbar-light bg-transparent">
                <NavLink to="/" className="nav-link f-st-color">
                    <img src={logo2} alt="Logo" className="image-custom" />
                </NavLink>
                <form
                    className="form-inline"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        onChange={handleChange}
                    />
                </form>
            </nav>


        </div>
    )
}

export default Header