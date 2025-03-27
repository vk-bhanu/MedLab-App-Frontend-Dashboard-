import "./Stats.css"
const Stats = () => {
    return (
        <div className="text-light py-4">
        <div className="container statistics-container">
            <div className="de-flex dark-flex">
                <div className="stat-item">
                    <h4 className="fw-bold">3000+</h4>
                    <p>Tests Performed</p>
                </div>
                <div className="stat-item">
                    <h4 className="fw-bold">5+</h4>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h4 className="fw-bold">Delhi NCR</h4>
                    <p>Location</p>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Stats;
