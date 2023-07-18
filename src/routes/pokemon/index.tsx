import { useEffect } from "react";
import { useParams } from "react-router-dom"

// import { PokemonsProps } from "../../types/pokemons";

import "./index.scss"

function Pokemon({ pokemon, getPokemonById }: { pokemon: { name: string }, getPokemonById: any }) {
    const { id } = useParams();

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    console.log(pokemon)

    return (
        <div className="rol">
            <h2 className="text-capitalize">{pokemon.name}</h2>
            <div className="col">
            </div>
        </div>
    )
}

export default Pokemon