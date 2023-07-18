import { PokemonsProps } from "../../types/pokemons"

function Pokemon({ pokemons }: { pokemons: PokemonsProps[] | [] }) {

    console.log(pokemons)

    return (
        <div>Pokemon</div>
    )
}

export default Pokemon