import { NavLink, useNavigate } from "react-router-dom"

import logo2 from "../../assets/images/logo2.png"

import "./index.scss"

function Header({ setSearchValue }: { setSearchValue: any }) {
    const navigate = useNavigate()

    const handleChange = (e: { target: { value: string } }) => {
        if (e.target.value !== "") {
            navigate("/search")
            setSearchValue(e.target.value)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='container p-0' id="header">
            <nav className="navbar navbar-light bg-transparent justify-content-center justify-content-md-between px-0">
                <NavLink to="/" className="nav-link f-st-color">
                    <img src={logo2} alt="Logo" className="image-custom" />
                </NavLink>
                <form
                    className="form-inline w-custom"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="form-control w-100"
                        type="search"
                        placeholder="Search for name or ID..."
                        aria-label="Search"
                        onChange={handleChange}
                    />
                </form>
            </nav>
        </div>
    )
}

export default Header