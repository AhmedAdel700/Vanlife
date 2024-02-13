import { Suspense } from "react" 
import { Link, useLoaderData , defer , Await } from "react-router-dom"
import { getHostVansDetails } from "../api"
// import { requireAuth } from "../utils"

export async function loader({request}) {
    // await requireAuth(request)
    return defer({ vans: getHostVansDetails() })
}

export default function HostVans(){

    const dataPromise = useLoaderData()

    function renderedVans(vans) {
        const hostInfo = vans.map(van => {
            return (
                <div className="host-box container md-rounded-3" key={van.id}>
                    <Link className="host-box link" to={van.id}>
                        <img className="rounded-2 me-3" src={van.imageUrl} alt="van-pic" />
                        <div className="a-text">
                            <h4 className="fw-semibold">{van.name}</h4>
                            <span className="fw-semibold">${van.price}/day</span>
                        </div>
                    </Link>
                </div>
            )
        })
        return (
            <>
                <h1 className="container mb-0 mt-2 fw-bold text-start">Your Listed Vans</h1>
                {hostInfo}
            </>
        )
    }

    return (
        <div className="host-vans">
        <Suspense fallback={<h1 className="loading fw-semibold">Loading...</h1>}>
            <Await resolve={dataPromise.vans}>
                {renderedVans}
            </Await>
        </Suspense>
        </div>
    )
}
