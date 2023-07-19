import { useEffect } from "react";
import { useParams } from "react-router-dom"

import "./index.scss"

type PokemonT = {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: [],
    sprites: {
        "front_default": string,
        other: {
            "official-artwork": {
                "front_default": string,
            },
        },
    },
    stats: [],
}

function Pokemon({ pokemon, getPokemonById }: { pokemon: PokemonT, getPokemonById: any }) {
    const { id } = useParams();

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    return (
        <>
            {!pokemon ?
                (
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Loading...</h2>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-12 d-flex flex-md-row justify-content-md-around align-items-md-center">
                                <h2>#{pokemon.id}</h2>
                                <h2 className="text-capitalize">{pokemon.name}</h2>
                                <img src={pokemon.sprites && pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col col-md-6">
                                <img
                                    src={pokemon.sprites && pokemon.sprites.other["official-artwork"].front_default}
                                    alt={`${pokemon.name} image`}
                                    className="w-100"
                                />
                            </div>
                            <div className="col col-md-6 px-md-5">
                                <div className="row">
                                    <div className="col-6">
                                        <h4>Information</h4>
                                        <p>Height: {pokemon.height / 10} m</p>
                                        <p>Weight: {pokemon.weight / 10} kg</p>
                                        {pokemon.types && pokemon.types.map((type: { type: { name: string } }, i) => (
                                            <div key={i}>
                                                <p>{type.type.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-6">
                                        <h4>Status</h4>
                                        {pokemon.stats && pokemon.stats.map((stat: { base_stat: number, stat: { name: string } }, i) => (
                                            <div key={i} className="d-flex justify-content-between">
                                                <p>{stat.stat.name}:</p>
                                                <p>{stat.base_stat}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Pokemon