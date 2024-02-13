import { useOutletContext } from "react-router-dom"

export default function Detalis () {
    const { details } = useOutletContext()
    
    return (
        <div className="text-start me-4 ms-4 text-capitalize" key={details.id}>

            <h5><span className="fw-bold">Name: </span>{details.name}</h5>
            <h5><span className="fw-bold">Category: </span>{details.type}</h5>
            <h5><span className="fw-bold">Description: </span>{details.description}</h5>
            <h5><span className="fw-bold">Visibility: </span>Public</h5>

        </div>
    )
}