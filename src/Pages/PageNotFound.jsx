import { Link } from "react-router-dom";

export default function PageNotFound () {
    return (
        <div className="text-center mt-5 pt-5 fw-bold">
            <span className="loading">404 !</span>
            <h1 className="fw-bold mt-2 me-1 ms-1">Sorry, The Page You Were Looking For Was Not Found.</h1>
            <Link to="/" className="btn mt-4 fw-bold fs-5 a-return p-2 me-auto ms-auto" >Return To Home</Link>
        </div>
    )
}