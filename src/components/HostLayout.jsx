import {NavLink , Outlet } from "react-router-dom";

export default function HostLayout() {

    return (
        <div className="host">
            <div className="a-host-nav mb-3">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="."
                            end> Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="income"> Income
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="vans"> Vans
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="reviews"> Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}