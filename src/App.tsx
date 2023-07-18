import Root from "./components/root"
import Home from "./routes/home"
import Pokedex from "./routes/pokedex"
import Pokemon from "./routes/pokemon"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState, useEffect } from "react";

import { PokemonsProps } from "./types/pokemons"

function App() {
  const [pokemons, setPokemons] = useState<PokemonsProps[] | []>([]);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
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

    void getPokemons()
  }, [offset])

  return (
    <>
      <RouterProvider router={createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex pokemons={pokemons} offset={offset} setOffset={setOffset} />} />
          <Route path="/pokemon/:id" element={<Pokemon pokemons={pokemons} />} />
        </Route>
      ))} />
    </>
  )
}

export default App
