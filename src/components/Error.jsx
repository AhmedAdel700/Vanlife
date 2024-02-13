import { useRouteError } from "react-router-dom"
export default function Error() {
    const error = useRouteError()
    return (
        <div>
            <h1 className="loading text-center mt-5 pt-5 me-2 ms-2 fw-bold">An Error Occurred!</h1>
            <h3 className="loading text-center m-0">{error.message || "Failed To Get The Data" }</h3>
            <h3 className="loading text-center m-0">{error.statusText}</h3>
            <h3 className="loading text-center m-0">{error.status}</h3>
        </div>
    )
}