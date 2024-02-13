import star from "../images/Star 3.png"
import reviews from "../images/reviews.png"
export default function Reveiws() {
    return (
        <div className="reveiws container text-start">
            <div className="d-flex gap-3 align-items-center">
                <h2 className="fw-semibold">Your Reviews</h2>
                <span className="fw-semibold text-secondary">Last 30 Days</span>
            </div>

            <div className="d-flex gap-4 flex-wrap">
                <div className="img-status mt-2">
                    <img className="w-100" src={reviews} alt="reveiws" />
                </div>

                <div className="flex-grow-1">
                    <h5 className="fw-semibold">Reviews (3)</h5>
                    <div className="box">
                        <div className="d-flex gap-1 align-items-center pe-2 ps-2">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p className="fw-bold pe-2 ps-2 mt-2 mb-1">Elliot <span className="fw-normal ms-1 text-secondary">December 1, 2023</span></p>
                        <p className="pe-2 ps-2">The beach bum is such as awesome van! Such as comfortable trip.
                            We had it for 2 weeks and there was not a single issue.
                            Super clean when we picked it up and the host is very comfortable and understanding.
                            Highly recommend!</p>
                    </div>
                    <hr/>
                    <div className="box">
                        <div className="d-flex gap-1 align-items-center pe-2 ps-2">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p className="fw-bold pe-2 ps-2 mt-2 mb-1">Sandy <span className="fw-normal ms-1 text-secondary">November 23, 2023</span></p>
                        <p className="pe-2 ps-2">This is our third time using the Modest Explorer for our travels and we love it!
                        No complaints, absolutely perfect!</p>
                    </div>
                    <hr/>
                    <div className="box">
                        <div className="d-flex gap-1 align-items-center pe-2 ps-2">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p className="fw-bold pe-2 ps-2 mt-2 mb-1">Yousef <span className="fw-normal ms-1 text-secondary">November 11 , 2023</span></p>
                        <p className="pe-2 ps-2">Loved it , absolutely perfect!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}