import React, { useEffect, useState } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TestCard from "../../components/TestCard/TestCard";
import Search from "../../components/Search/Search";
import axios from "axios";

const Services = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5050/record?name=${searchQuery}`)
      .then((response) => {
        setTests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchQuery]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const totalPages = Math.ceil(tests.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCard = tests.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Search onSearch={setSearchQuery} />

      <div className="services-page">
        <div className="content">
          <div className="test-cards-container">
            {currentCard.map((test) => (
              <TestCard key={test._id} test={test} />
            ))}
          </div>
          <nav aria-label="Page navigation" className="pagination-container">
            <ul className="pagination justify-content-center">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Services;
