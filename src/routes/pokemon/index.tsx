import { useEffect } from "react";
import { useParams } from "react-router-dom"

import { PokemonsProps } from "../../types/pokemons";

function Pokemon({ getPokemonById, pokemon }: { getPokemonById: any, pokemon: PokemonsProps[] | [] }) {
    const { id } = useParams();

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    return (
        <div>{id}</div>
    )
}

export default Pokemon