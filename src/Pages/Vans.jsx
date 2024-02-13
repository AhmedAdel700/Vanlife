import { Suspense } from "react";
import { Link , useSearchParams , useLoaderData , defer , Await } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
    return defer({ vans: getVans() })
}

export default function Vans() {

    const dataPromise = useLoaderData()

    const [searchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");

    function genNewSearchParamsString(key ,value) {
        const sp = new URLSearchParams(useSearchParams)
        if(value === null) {
            sp.delete(key)
        } else {
            sp.set(key , value)
        }
        return `?${sp.toString()}`
    }

    function renderedVans(vans) {

        const displayedVan = typeFilter ? vans.filter( van => van.type.toLowerCase() === typeFilter ) : vans

        const vanInfo = displayedVan.map(van => {
            const btnStyle = {
                backgroundColor : van.type === "simple" && "#E17654" || van.type === "rugged" && "#115E59" || van.type === "luxury" && "#161616",
                color : "#FFEAD0",
                fontSize: "18px"
            }
            return (
            <div className="vans-info col-md-6 col-lg-4 mb-4 pe-4 ps-4" key={van.id}>
                <Link className="link" to={`${van.id}`} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
                state={{ search: `?${searchParams.toString() }` , type : typeFilter}} >
                    <img className="van-img img-fluid rounded-3" src={van.imageUrl} alt={van.name} />
                    <div className="a-info mt-3 pe-1 ps-1">
                    <h4 className="fw-bold">{van.name}</h4>
                    <div className="text-box">
                        <h5 className="fw-bold">${van.price}</h5>
                        <h5>/day</h5>
                    </div>
                </div>
                <div className="a-type">
                    <span className="btn mb-2 mt-2 pe-3 ps-3" style={btnStyle}>{van.type}</span>
                </div>
                </Link>
            </div>
            )
        })

        return (
            <>
            <h1 className="mb-4">Explore Our Van Options</h1>
            <div className="buttons mb-4">

                <Link to={genNewSearchParamsString("type" , "simple")} className="btn mb-3 simple">Simple</Link>
                <Link to={genNewSearchParamsString("type" , "rugged")} className="btn mb-3 rugged">Rugged</Link>
                <Link to={genNewSearchParamsString("type" , "luxury")} className="btn mb-3 luxury">Luxury</Link>
                { typeFilter && <Link to={genNewSearchParamsString("type" , null)} className="mb-3 a-clear">Clear Filters</Link>}

            </div>
            <div className="row">{vanInfo}</div>
            </>
        )
    }

    return (
    <div className="vans container text-center">
        <Suspense fallback={<h1 className="loading fw-semibold">Loading...</h1>}>
            <Await resolve={dataPromise.vans}>
                {renderedVans}
            </Await>
        </Suspense>
    </div>
    );
}


