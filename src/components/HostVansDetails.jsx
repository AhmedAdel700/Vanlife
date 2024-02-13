import { Suspense } from "react"; 
import { Link , NavLink , Outlet , useLoaderData , defer , Await} from "react-router-dom"
import { getHostVansDetails } from "../api"
// import { requireAuth } from "../utils"
export async function loader({ params ,request }) {
    // await requireAuth(request)
    return defer({ details: getHostVansDetails(params.id)})
}

export default function HostVansDetails() {

    const dataPromise = useLoaderData()

    function renderedVansDetails(details) {
            const btnStyle = {
            backgroundColor : details.type === "simple" && "#E17654" || details.type === "rugged" && "#115E59" || details.type === "luxury" && "#161616",
            color : "#FFEAD0",
            fontSize: "18px"
}
        return(
            <>
                <Link className="nav-link fw-semibold" to=".." relative="path">
                <div className="text-start"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M14.59 18.59L13.17 17.17L8.59 12.59C8.21 12.21 8.21 11.58 8.59 11.17L13.17 6.59L14.59 5.17C14.95 4.78 15.54 4.78
                    15.91 5.17C16.28 5.54 16.28 6.13 15.91 6.5L12.41 10H20C20.55 10 21 10.45 21 11V13C21 13.55 20.55 14 20 
                    14H12.41L15.91 17.5C16.2817.87 16.28 18.46 15.91 18.83C15.54 19.22 14.95 19.22 14.59 18.83V18.59Z" />
                    </svg>Back To All Vans
                </div>
            </Link>

                <div className="host-box-delails ms-4 me-4 rounded-3" key={details.id}>
                    <img className="rounded-2 w-100" src={details.imageUrl} alt="van-pic"/>
                    <div className="a-text mt-3">
                        <span style={btnStyle} className="btn mb-3 pe-4 ps-4">{details.type}</span>
                        <h2 className="fw-semibold">{details.name}</h2>
                        <span className="fw-semibold">$<span className="fw-bold fs-4">{details.price}</span>/day</span>
                    </div>
                </div>

                <ul className="nav nav-underline me-4 ms-4">
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="."
                            end> Detalis
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="pricing"> Pricing
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link a-link active" : "link nav-link"}
                            to="photos"> Photos
                        </NavLink>
                    </li>
                </ul>
                <Outlet context={{details}} />
            </>
        )
    }
    return (
        <div className="host-vans-details container">
            <Suspense fallback={<h1 className="loading fw-semibold">Loading...</h1>}>
                <Await resolve={dataPromise.details}>
                    {renderedVansDetails}
                </Await>
            </Suspense>
        </div>
    )
}