import { Outlet } from "react-router-dom"
import { PokemonsProps } from "../../types/pokemons"

import Header from "../header"

import "./index.scss"

function Root({ pokemons, setPokemons, getPokemons }: { pokemons: PokemonsProps[] | [], setPokemons: any, getPokemons: any }) {

    const pokemonFilter = (identifier: string) => {
        let arrayFiltered = [];

        if (identifier === "") {
            arrayFiltered = [];
            getPokemons();
        } else {
            for (const i in pokemons) {
                if (pokemons[i].name.includes(identifier)) {
                    arrayFiltered.push(pokemons[i])
                }
            }

            setPokemons(arrayFiltered)
        }
    }

    return (
        <div className="container-fluid" id="root">
            <Header pokemonFilter={pokemonFilter} />
            <div className="container pb-5">
                <div className="row bg-custom">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Root