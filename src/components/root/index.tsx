import { Outlet } from "react-router-dom"
import Header from "../header"

import "./index.scss"

function Root() {
    return (
        <div className="container-fluid" id="root">
            <Header />
            <div className="row bg-custom">
                <div className="col">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Root