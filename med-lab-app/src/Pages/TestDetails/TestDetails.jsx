import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TestDetails.css";
import ModalPop from "../../components/ModalPop/ModalPop";

const TestDetails = () => {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/record/${id}`)
      .then((response) => {
        setTest(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching test details", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!test) {
    return <p>Test Not Found!</p>;
  }

  const handleBookTest = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="test-details-container">
      <div className="test-details-card">
        <h2 className="test-detail-title">{test.name}</h2>
        <p className="test-info">
          <strong>Special Instruction:</strong> {test.instructions || "None"}
        </p>
        <p className="test-info">
          <strong>Parameters Covered:</strong> {test.numberofparams}
        </p>
        <div className="test-price-container">
          <p className="test-price">₹ {test.price}</p>
          <div className="test-buttons">
            <button className="book-test-btn" onClick={handleBookTest}>
              Book Test
            </button>
          </div>
        </div>
      </div>

      <div className="test-overview-card">
        <h3 className="overview-title">Overview</h3>
        <p>
          <strong>What is {test.name}?</strong>
        </p>
        <p className="overview-description">{test.description}</p>
      </div>

      <div className="test-overview-card">
        <h3 className="overview-parameter">Parameters</h3>
        <p className="overview-description">{test.parameters}</p>
      </div>

      {isModalOpen && (
        <ModalPop
          isOpen={isModalOpen}
          onClose={closeModal}
          preselectedTests={test.name}
          testPrice={test.price}
        />
      )}
    </div>
  );
};

export default TestDetails;
