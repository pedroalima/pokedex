import Card from "../../components/card";

// import { useState, useEffect } from "react";

function Pokedex() {
    // const [pokemons, setPokemons] = useState([]);

    // async function getAPI() {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=150&limit=150");

    //     if (response.ok) {
    //         const jsonResponse: Promise = await response.json();
    //         console.log(jsonResponse);
    //     }

    // }

    // useEffect(() => {
    //     void getAPI()
    // }, [])

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
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Pokedex