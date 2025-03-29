import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; 
import "./Search.css"

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); 
  };

  return (
    <form onSubmit={handleSearch} className="search-container">
      <input
        type="text"
        placeholder="Search tests by name, category, or symptoms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <FaTimes className="clear-icon" onClick={clearSearch} />
      )}
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
};

export default Search;
