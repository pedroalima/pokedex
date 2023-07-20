import { PokemonsProps } from "../../types/pokemons";
import { Link } from "react-router-dom";

import Card from "../../components/card";

import "./index.scss"

function Pokedex({ pokemons, offset, setOffset }: { pokemons: PokemonsProps[] | [], offset: number, setOffset: any }) {

    const handleClick = () => {
        setOffset(offset + 50)
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
                {pokemons.map((pokemon: PokemonsProps) => (
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
                <div className="col-12 text-center">
                    <button onClick={handleClick}>Show More</button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex