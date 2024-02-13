import { Link } from "react-router-dom";
import aboutpage from "../images/about.png";
export default function About(){

    return(
        <div className="about">
            <div className="img-about">
                <img src={aboutpage} alt="aboutPage"/>
                        <div className="a-text-holder me-auto ms-auto">
                            <p className="text text-start fw-semibold m-0 mt-4">Do not squeeze in a sedan when you could relax in a van.</p>
                            <p className="p-text text-start">Our mission is to enliven your road trip with the perfect travel van rental.
                            Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                            (Hitch costs extra 😉)</p>
                            <p className="p-text text-start">Our team is full of vanlife enthusiasts who know firsthand the 
                            magic of touring the world on 4 wheels.</p>
                        </div>
                    <div className="box mt-5 fw-bold">
                        <p className="mt-5">Your destination is waiting.<br/>
                            Your van is ready.</p>
                            <Link to="/vans" className="cursor-pointer z-3 mb-5 btn btn-dark">Explore our vans</Link>
                    </div>
            </div>
        </div>
    )
}