import { NavLink, useNavigate } from "react-router-dom"
import { AllPokemons } from "../../types/pokemons"

import logo2 from "../../assets/images/logo2.png"

import "./index.scss"

function Header({ setSearchValue, allPokemons, searchValue, filteredPokemons }: { setSearchValue: any, allPokemons: AllPokemons[] | [], searchValue: string, filteredPokemons: AllPokemons[] | [] }) {
    const navigate = useNavigate()

    const handleChange = (e: { target: { value: string | number } }) => {
        if (e.target.value === "") {
            navigate("/");
        } else {
            navigate("/search");
            setSearchValue(e.target.value);
            filteredPokemons = allPokemons.filter((pokemon: AllPokemons) => pokemon.name.includes(searchValue));
            console.log(filteredPokemons);
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