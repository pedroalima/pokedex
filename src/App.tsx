import Root from "./components/root";
import Pokedex from "./routes/pokedex";
import Search from "./routes/search";
import Pokemon from "./routes/pokemon";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState, useEffect } from "react";

import { PokemonsProps, AllPokemons, PokemonT } from "./types/pokemons"

function App() {
  const [allPokemons, setAllPokemons] = useState<AllPokemons[] | []>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  /*
   * Requests all Pokemons.
   * 
   * @returns void
   * 
   */
  const getAllPokemons = async () => {
    const urlBase = 'https://pokeapi.co/api/v2/';

    try {
      const response = await fetch(`${urlBase}pokemon?limit=900&offset=0`);
      const data = await response.json();

      const promises = data.results.map(async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const jsonResponse = await response.json();
        return jsonResponse;
      })

      const results = await Promise.all(promises)
      setAllPokemons(results)

    } catch (error: any) {
      console.log(error.message)
    }
  }

  const [pokemons, setPokemons] = useState<PokemonsProps[] | []>([]);
  const [offset, setOffset] = useState(0)

  /*
   * Requests first fifty Pokemons.
   * 
   * @param limit - Already defined as number
   * @returns void
   * 
   */
  const getFirstFiftyPokemons = async (limit = 30) => {
    const urlBase = 'https://pokeapi.co/api/v2/';

    try {
      const response = await fetch(`${urlBase}pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();

      const promises = data.results.map(async (pokemon: { url: string }) => {
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
    void getFirstFiftyPokemons()
  }, [offset])

  const [pokemon, setPokemon] = useState<PokemonT | Record<string, never>>({})

  /*
   * Requests Pokemon by name or ID.
   * 
   * @param identifier - Input string or number
   * @returns void
   * 
   */
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
        <Route path="/" element={<Root setSearchValue={setSearchValue} />}>
          <Route path="/" element={<Pokedex pokemons={pokemons} offset={offset} setOffset={setOffset} />} />
          <Route path="/search" element={<Search allPokemons={allPokemons} searchValue={searchValue} getAllPokemons={getAllPokemons} />} />
          <Route path="/pokemon/:id" element={<Pokemon pokemon={pokemon} getPokemonById={getPokemonById} />} />
        </Route>
      ))} />
    </>
  )
}

export default App
