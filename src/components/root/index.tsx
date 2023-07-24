import { Outlet } from "react-router-dom"

import { AllPokemons } from "../../types/pokemons"

import Header from "../header"

import "./index.scss"

function Root({ setSearchValue, allPokemons, searchValue, filteredPokemons }: { setSearchValue: any, allPokemons: AllPokemons[] | [], searchValue: string, filteredPokemons: AllPokemons[] | [] }) {
    return (
        <div className="container-fluid" id="root">
            <Header setSearchValue={setSearchValue} allPokemons={allPokemons} searchValue={searchValue} filteredPokemons={filteredPokemons} />
            <div className="container pb-3">
                <div className="row bg-custom">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Root