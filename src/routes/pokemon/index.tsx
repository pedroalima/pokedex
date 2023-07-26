import { useEffect } from "react";
import { useParams } from "react-router-dom"

import { PokemonT } from "../../types/pokemons";

import "./index.scss"

function Pokemon({ pokemon, getPokemonById }: { pokemon: PokemonT | Record<string, never>, getPokemonById: any }) {
    const { id } = useParams();

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    return (
        <div className="container" id="pokemon">
            <div className="row">
                <div className="col-12 p-0 py-md-3 d-flex flex-row justify-content-between justify-content-md-around align-items-center">
                    <h2>#{pokemon.id}</h2>
                    <h2 className="text-capitalize">{pokemon.name}</h2>
                    <img src={pokemon.sprites && pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
                </div>
            </div>
            <div className="row flex-column flex-md-row justify-content-md-around align-items-center">
                <div className="col col-md-5 text-center">
                    <img
                        src={pokemon.sprites && pokemon.sprites.other["official-artwork"].front_default}
                        alt={`${pokemon.name} image`}
                        className="w-100"
                    />
                </div>
                <div className="col col-md-6">
                    <div className="row flex-column flex-md-row justify-content-md-around align-items-center align-items-md-start text-center">
                        <div className="col-12 col-md-5 bg-nd-color border rounded p-3 my-3 my-md-0">
                            <h4>Information</h4>
                            <div>
                                <p>Height: {pokemon.height / 10} m</p>
                                <p>Weight: {pokemon.weight / 10} kg</p>
                                <div className="d-flex flex-row justify-content-around">
                                    {pokemon.types && pokemon.types.map((type: { type: { name: string } }, i) => (
                                        <div
                                            className={
                                                type.type.name === "grass" ? "bg-grass rounded" :
                                                    type.type.name === "poison" ? "bg-poison rounded" :
                                                        type.type.name === "fire" ? "bg-fire rounded" :
                                                            type.type.name === "water" ? "bg-water rounded" :
                                                                type.type.name === "rock" ? "bg-rock rounded" :
                                                                    type.type.name === "flying" ? "bg-flying rounded" :
                                                                        type.type.name === "bug" ? "bg-bug rounded" :
                                                                            type.type.name === "normal" ? "bg-normal rounded" :
                                                                                type.type.name === "electric" ? "bg-electric rounded" :
                                                                                    type.type.name === "ground" ? "bg-ground rounded" :
                                                                                        type.type.name === "fairy" ? "bg-fairy rounded" :
                                                                                            type.type.name === "fighting" ? "bg-fighting rounded" :
                                                                                                type.type.name === "psychic" ? "bg-psychic rounded" :
                                                                                                    type.type.name === "steel" ? "bg-steel rounded" :
                                                                                                        type.type.name === "ice" ? "bg-ice rounded" :
                                                                                                            type.type.name === "ghost" ? "bg-ghost rounded" :
                                                                                                                type.type.name === "dark" ? "bg-dark rounded" :
                                                                                                                    type.type.name === "dragon" ? "bg-dragon rounded" : "rounded"}
                                            key={i}
                                        >
                                            <p className="m-0 px-2 py-1 text-light">{type.type.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg-nd-color border rounded p-3 my-3 mb-4 my-md-0">
                            <h4 className="text-center">Status</h4>
                            <div>
                                {pokemon.stats && pokemon.stats.map((stat: { base_stat: number, stat: { name: string } }, i) => (
                                    <div key={i} className="d-flex justify-content-between">
                                        <p>{stat.stat.name}:</p>
                                        <p>{stat.base_stat} / 255</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon