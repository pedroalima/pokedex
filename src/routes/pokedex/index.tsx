import { Pokemons } from "../../types/pokemons";

import Card from "../../components/card";

import { useState, useEffect } from "react";

function Pokedex() {
    const [pokemons, setPokemons] = useState<[Pokemons] | []>([]);

    const getPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse)
                setPokemons(jsonResponse.results);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

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
                {pokemons.map((pokemon: Pokemons, i: number) => (
                    <div key={i} className="col-10 px-5 col-md-4">
                        <Card name={pokemon.name} />
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Pokedex