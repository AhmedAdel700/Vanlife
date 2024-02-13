import { useOutletContext } from "react-router-dom"
export default function Photos () {

    const { details } = useOutletContext()

    const imgStyle = {
        width: "200px",
        margin: "0 1rem",
        borderRadius: "10px"
    }

    return (
        <>
            <img style={imgStyle} src={details.imageUrl} alt="van-pic" key={details.id} />
        </>
    )
}