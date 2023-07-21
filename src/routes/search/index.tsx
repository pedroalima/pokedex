import { AllPokemons } from "../../types/pokemons"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../components/card"

function Search({ allPokemons, searchValue, getAllPokemons }: { allPokemons: any, searchValue: string | number, getAllPokemons: any }) {
    useEffect(() => {
        getAllPokemons()
    }, [searchValue])

    let filterPokemons = [];

    if (typeof searchValue === "string") {
        filterPokemons = allPokemons.filter((pokemon: AllPokemons) => pokemon.name.includes(searchValue))
    }

    if (typeof searchValue === "number") {
        console.log(searchValue)
        filterPokemons = allPokemons.filter((pokemon: AllPokemons) => pokemon.id == searchValue)
    }

    return (
        <div id="pokedex">
            <div className="row">
                <div className="col jumbotron bg-transparent px-5 py-2">
                    <h1 className="display-4">Pokedex</h1>
                    <hr className="my-4" />
                </div>
            </div>
            <div className="row justify-content-center">
                {filterPokemons.map((pokemon: AllPokemons) => (
                    <Link
                        to={`/pokemon/${pokemon.id}`} key={pokemon.id}
                        className="col-10 mx-1 col-md-2 m-md-2 px-md-0 rounded link-custom">
                        <Card
                            id={pokemon.id}
                            image={pokemon.sprites.other["official-artwork"].front_default}
                            name={pokemon.name}
                            type1={pokemon.types[0].type.name}
                            type2={pokemon.types[1] && pokemon.types[1].type.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Search