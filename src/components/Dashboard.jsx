import star from "../images/Star 3.png"
import { Suspense } from "react" 
import { Link, useLoaderData ,defer ,Await } from "react-router-dom" 
import { getHostVansDetails } from "../api"
// import { requireAuth } from "../utils"
export async function loader ({ request }) {
    // await requireAuth(request )
    return defer({ vans: getHostVansDetails() })
}

export default function Dashboard() {

    const dataPromise = useLoaderData()



    function renderedVans(vans) {
        const vanDetails = vans.map(van => {
            return (
                <div className="dashboard" style={{width:"240px"}} key={van.id}>
                    <img className="w-100 rounded-2" src={van.imageUrl} />
                    <h5 className="fw-semibold mt-2">{van.name}</h5>
                </div>
            )
        })
        return(
            <>
                <h2 className="text-center fw-semibold mb-4">Welcome To Your Dashboard</h2>
                <div className="a-background p-3 rounded-2">
                    <h4 className="fw-semibold">Details</h4>
                    <div className="d-flex gap-2">
                        <h5 className="fw-semibold">Income Last 30 Days:</h5>
                        <h5 className="fw-bold login">$2,260</h5>
                    </div>
                    <div>
                        <h5 className="fw-semibold">Review score:
                            <span className="ms-1">
                            <img className="ms-2 me-1" src={star} alt="star" />5.0</span></h5>
                    </div>
                </div>
                <h4 className="fw-semibold mt-4 p-1">Your Listed Vans</h4>
                <Link to="/host/vans" className="text-decoration-none text-dark">
                    <div className="d-flex gap-4 flex-wrap justify-content-center justify-content-sm-start a-background-2 p-3 rounded-2">
                        {vanDetails}
                    </div>
                </Link>
            </>
        )
    }

    return (
        <div className="dashboard container text-start">
        <Suspense fallback={<h1 className="loading fw-semibold text-center">Loading...</h1>}>
            <Await resolve={dataPromise.vans}>
                {renderedVans}
            </Await>
        </Suspense>
        </div>
    )
}
