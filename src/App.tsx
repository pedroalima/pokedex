import "./App.scss"

import Root from "./components/root"
import Home from "./routes/home"
import Pokedex from "./routes/pokedex"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="/pokedex" element={<Pokedex />} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
