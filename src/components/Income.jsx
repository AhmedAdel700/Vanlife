import group from "../images/Group.png"
export default function Income() {
    return (
        <div className="income container text-start">
            <h1 className="fw-semibold">Income</h1>
            <p className="fw-semibold">Last 30 Days: $2,260</p>
            <div className="d-flex gap-5 flex-wrap">
                <div className="img-status">
                <img className="w-100" src={group} alt="status" />
            </div>
            <div className="info flex-grow-1 mt-1">
                <div className="d-flex justify-content-between mb-4">
                    <h4 className="fw-semibold">Your Transactions (3)</h4>
                    <span className="fw-semibold">Last 30 Days</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-semibold">$720</h5>
                    <span className="fw-semibold">1/12/22</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-semibold">$560</h5>
                    <span className="fw-semibold">10/11/22</span>
                </div>

                <div className="d-flex justify-content-between">
                    <h5 className="fw-semibold">$980</h5>
                    <span className="fw-semibold">23/11/22</span>
                </div>

            </div>
            </div>
        </div>
    )
}