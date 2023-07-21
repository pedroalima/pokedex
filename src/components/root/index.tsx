import { Outlet } from "react-router-dom"

import Header from "../header"

import "./index.scss"

function Root({ searchValue, setSearchValue }: { searchValue: string | number, setSearchValue: any }) {
    return (
        <div className="container-fluid" id="root">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
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