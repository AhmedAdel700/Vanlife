import { Link } from "react-router-dom";
import homepage from "../images/vanlife_homePage.png";

export default function Home() {
    const styles = {
        backgroundImage: `url(${homepage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    return (

        <div className="home">
        <div className="img-box">
            <div className="img-home" style={styles}>
            </div>
        </div>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.<br/>
                Rent the perfect van to make your perfect road trip.</p>
            <Link className="a-find btn fw-bold " to="/vans">Find Your Van</Link>
        </div>
    );
}