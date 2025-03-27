import React from "react";
import "./TestCard.css";
import { useNavigate } from "react-router-dom";

const TestCard = ({ test }) => {
  const navigate = useNavigate();

  const handleTestDetail = (id) => {
    navigate(`/test-detail/${id}`);
  };

  return (
    <div className="test-card">
      <h4 className="test-card-title">{test.name}</h4>
      <p className="test-card-parameters">
        {test.numberofparams} Parameter(s) covered
      </p>

      <div className="test-card-footer">
        <p className="test-card-price">₹{test.price}</p>
        <button
          className="test-card-button"
          onClick={() => handleTestDetail(test._id)}
        >
          Know More
        </button>
      </div>
    </div>
  );
};
export default TestCard;
