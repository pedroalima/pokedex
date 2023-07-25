import { AllPokemons } from "../../types/pokemons"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../components/card"

function Search({ allPokemons, searchValue, getAllPokemons }: { allPokemons: AllPokemons[] | [], searchValue: any, getAllPokemons: any }) {

    useEffect(() => {
        void getAllPokemons()
    }, []);

    let filteredPokemons: AllPokemons[] | [] = [];

    if (isNaN(searchValue)) {
        filteredPokemons = allPokemons.filter((pokemon: AllPokemons) => pokemon.name.includes(searchValue));
    } else {
        const searchNumber = parseInt(searchValue, 10)
        filteredPokemons = allPokemons.filter((pokemon: AllPokemons) => pokemon.id === searchNumber);
    }

    return (
        <div id="pokedex">
            {filteredPokemons.length === 0 ? (
                <div className="row">
                    <div className="col jumbotron bg-transparent px-md-5 py-md-4">
                        <h2>Searching results...</h2>
                        <hr className="my-4" />
                    </div>
                </div>
            ) : (
                <>
                    <div className="row">
                        <div className="col jumbotron bg-transparent px-md-5 py-md-4">
                            <h2>About {filteredPokemons.length} results</h2>
                            <hr className="my-4" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {filteredPokemons.map((pokemon: AllPokemons) => (
                            <Link
                                to={`/pokemon/${pokemon.id}`} key={pokemon.id}
                                className="col-10 mx-1 col-md-3 m-md-2 px-md-0 rounded link-custom">
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
                </>
            )}
        </div>
    )
}

export default Search