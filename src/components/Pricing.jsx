import { useOutletContext } from "react-router-dom"
export default function Pricing () {
    const { details } = useOutletContext()

    return (
        <>
            <h4 className="text-start me-4 ms-4 fw-bold" key={details.id}>The Price Is: ${details.price}.00 /day</h4>
        </>
    )
}