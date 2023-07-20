import Root from "./components/root"
import Pokedex from "./routes/pokedex"
import Pokemon from "./routes/pokemon"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState, useEffect } from "react";

import { PokemonsProps } from "./types/pokemons"

function App() {
  const [pokemons, setPokemons] = useState<PokemonsProps[] | []>([]);
  const [offset, setOffset] = useState(0)

  const getPokemons = async (limit = 50) => {
    const URLbase = 'https://pokeapi.co/api/v2/';

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

  useEffect(() => {
    void getPokemons()
  }, [offset])

  const [pokemon, setPokemon] = useState<any | []>([])

  const getPokemonById = async (identifier: number | string) => {
    const urlBase = 'https://pokeapi.co/api/v2/';

    try {
      const response = await fetch(`${urlBase}pokemon/${identifier}/`);
      const data = await response.json();
      setPokemon(data)

    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <RouterProvider router={createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root pokemons={pokemons} setPokemons={setPokemons} getPokemons={getPokemons} />}>
          <Route path="/" element={<Pokedex pokemons={pokemons} offset={offset} setOffset={setOffset} />} />
          <Route path="/pokemon/:id" element={<Pokemon pokemon={pokemon} getPokemonById={getPokemonById} />} />
        </Route>
      ))} />
    </>
  )
}

export default App
