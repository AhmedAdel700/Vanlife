import { Suspense } from "react"; 
import { Link, useLocation , useLoaderData , defer , Await} from "react-router-dom"
import { getVans } from "../api";

export async function loader({params}) {
    return defer({ vansInfo: getVans(params.id) })
}

export default function VanDetails() {

    const dataPromise = useLoaderData()

    const location = useLocation()

    const arrow = <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M14.59 18.59L13.17 17.17L8.59 12.59C8.21 12.21 8.21 11.58 8.59 11.17L13.17 6.59L14.59 5.17C14.95 4.78 15.54 4.78
                    15.91 5.17C16.28 5.54 16.28 6.13 15.91 6.5L12.41 10H20C20.55 10 21 10.45 21 11V13C21 13.55 20.55 14 20 
                    14H12.41L15.91 17.5C16.2817.87 16.28 18.46 15.91 18.83C15.54 19.22 14.95 19.22 14.59 18.83V18.59Z" />
                    </svg>

    const type = location.state?.type || "All"

    function renderedVans(vansInfo) {
        return (
            <>
                <Link className = "nav-link fw-semibold mb-2 me-2 ms-2" to= {location.state && `..${location.state.search}` || ".."} 
                    relative="path">

                    <div className="text-start">{arrow}
                    Back To {type.charAt(0).toUpperCase() + type.slice(1)} Vans
                    </div>

                </Link>
                {(
                    <div className ="me-3 ms-3">
                    <img className ="van-img img-fluid rounded-3" src={vansInfo.imageUrl} alt={vansInfo.name} />
                    <div className ="a-type">
                        <Link className="btn mb-2 mt-2 pe-3 ps-3" style={
                            {
                                backgroundColor : vansInfo.type === "simple" && "#E17654" ||
                                vansInfo.type === "rugged" && "#115E59" || vansInfo.type === "luxury" && "#161616",
                                color : "#FFEAD0",
                                fontSize: "18px"
                            }
                        }>{vansInfo.type}</Link>
                    </div>

                    <div className ="a-info mt-3 pe-1 ps-1">
                    <h4 className ="fw-bold">{vansInfo.name}</h4>
                    <div className ="text-box">
                        <h5 className ="fw-bold">${vansInfo.price}</h5>
                        <h5>/day</h5>
                    </div>

                </div>
                    <p className ="text-start">{vansInfo.description}</p>
                <Link className ="a-rent btn">Rent This Van</Link>
                </div>
            )}
            </>
        )
    }

    return (
        <div className ="van-details">
        <Suspense fallback={<h1 className="loading fw-semibold">Loading...</h1>}>
            <Await resolve={dataPromise.vansInfo}>
                {renderedVans}
            </Await>
        </Suspense>
        </div>
    )
}
