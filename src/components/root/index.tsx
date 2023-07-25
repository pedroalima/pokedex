import { Outlet } from "react-router-dom"

import { BsArrow90DegUp } from 'react-icons/bs';

import Header from "../header"

import "./index.scss"

function Root({ setSearchValue }: { setSearchValue: any }) {
    return (
        <div className="container-fluid" id="root">
            <Header setSearchValue={setSearchValue} />
            <div className="container pb-3">
                <div className="row bg-custom">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
            <a href={"#header"}>
                <button className="button-custom">
                    <BsArrow90DegUp />
                </button>
            </a>
        </div>
    )
}

export default Root