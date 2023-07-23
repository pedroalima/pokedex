import { Outlet } from "react-router-dom"

import Header from "../header"

import "./index.scss"

function Root({ setSearchValue }: { setSearchValue: any }) {
    return (
        <div className="container-fluid" id="root">
            <Header setSearchValue={setSearchValue} />
            <div className="container pb-5">
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