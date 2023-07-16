import { Pokemons } from "../../types/pokemons";

import Card from "../../components/card";

import axios from "axios";
import { useState, useEffect } from "react";

function Pokedex() {
    const [pokemons, setPokemons] = useState<Pokemons[] | []>([]);

    useEffect(() => {
        void getPokemons()
    }, [])

    const getPokemons = async () => {
        const endpoints = [];
        for (let i = 1; i <= 10; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        try {
            await axios.all(endpoints.map((endpoint: any) => axios.get(endpoint))).then((res: any) => setPokemons(res))

        } catch (error: any) {
            console.log(error.message)
        }
    }

    console.log(pokemons)

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
                {
                    pokemons.map((pokemon: Pokemons) => (
                        <div key={pokemon.data.id} className="col-10 px-5 col-md-4">
                            <Card image={pokemon.data.sprites.front_default} register={pokemon.data.id} name={pokemon.data.name} type1={pokemon.data.types[0].type.name} type2={pokemon.data.types[1] && pokemon.data.types[1].type.name} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Pokedex