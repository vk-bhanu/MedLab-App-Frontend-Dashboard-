import {useNavigate} from "react-router-dom"
import "./Body.css";
const Body = () => {
    const navigate = useNavigate();
    const handleLearn = ()=>{
        navigate("/services")
    }

    const handleBook = ()=>{
        navigate("/contact-us")
    }
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <h4 className="text-muted">Introducing All new Lab Test Facility</h4>
          <h1 className="display-4 fw-bold" style={{ color: "#122023" }}>
            Discover Acurrate
          </h1>
          <h1 className="display-4 fw-bold" style={{ color: "#122023" }}>
            Diagnostics & Reliable
          </h1>
          <h1 className="display-4 fw-bold" style={{ color: "#2ECC40" }}>
            Testing Services.
          </h1>

          <div className="d-flex gap-3 flex-wrap justify-content-cneter btn-container">
            <button className="btn btn-primary px-4 py-2" onClick={handleBook}>
              Book an Appointment
            </button>
            <button className="btn btn-secondary px-4 py-2" onClick={handleLearn}>
              Learn More
            </button>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 text-center order-first order-lg-last image-column">
          <img
            src="doc.png"
            alt="Introduction"
            className="img-fluid rounded"
            style={{ maxHeight: "550px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
