import { PokemonsProps } from "../../types/pokemons";

import Card from "../../components/card";

import { useState, useEffect } from "react";

function Pokedex() {
    const [pokemons, setPokemons] = useState<PokemonsProps[] | []>([]);
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        void getPokemons()
    }, [offset])

    const getPokemons = async (limit = 50) => {
        const URLbase = 'https://pokeapi.co/api/v2/'

        try {
            const response = await fetch(`${URLbase}pokemon?limit=${limit}&offset=${offset}`);
            const data = await response.json();

            const promises = data.results.map(async (pokemon: any) => {
                const response = await fetch(pokemon.url);
                const jsonResponse = await response.json();
                return jsonResponse;
            })

            const results = await Promise.all(promises)
            setPokemons([...pokemons, ...results])
        } catch (error: any) {
            console.log(error.message)
        }
    }


    return (
        <>
            <div className="row">
                <div className="col jumbotron bg-transparent px-5 py-2">
                    <h1 className="display-4">Pokedex</h1>
                    <hr className="my-4" />
                </div>
            </div>
            <div className="row">
                <form className="col px-5">
                    <label htmlFor=""></label>
                    <input type="search" name="" id="" />
                </form>
            </div>
            <div className="row justify-content-center">
                {pokemons.map((pokemon: PokemonsProps) => (
                    <div key={pokemon.id} className="col-10 px-5 col-md-3 px-md-1">
                        <Card
                            id={pokemon.id}
                            image={pokemon.sprites.other["official-artwork"].front_default}
                            name={pokemon.name}
                            type1={pokemon.types[0].type.name}
                            type2={pokemon.types[1] && pokemon.types[1].type.name}
                        />
                    </div>
                ))}
                <div className="col-12 text-center">
                    <button onClick={() => setOffset(offset + 50)}>Show More</button>
                </div>
            </div>
        </>
    )
}

export default Pokedex