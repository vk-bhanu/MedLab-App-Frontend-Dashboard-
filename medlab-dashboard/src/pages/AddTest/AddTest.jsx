import React, { useState } from "react";
import "./AddTest.css";
import axios from "../../axiosConfig";

const AddTest = () => {
  const [testData, setTestData] = useState({
    name: "",
    code: "",
    description: "",
    duration: "",
    instructions: "",
    parameters: "",
    numberofparams: "",
    category: "",
    price: "",
  });

  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    if (e.key === "Enter" && testData.category.trim()) {
      setCategories([...categories, testData.category.trim()]);
      setTestData({ ...testData, category: "" });
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestData({ ...testData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/record", {
        ...testData,
        categories,
      });
      console.log("Test added successfully", response.data);

      setTestData({
        name: "",
        code: "",
        description: "",
        duration: "",
        instructions: "",
        parameters: "",
        numberofparams: "",
        category: "",
        price: "",
      });
      setCategories([]);
    } catch (error) {
      console.log("Error adding test", error);
    }
  };

  return (
    <div className="add-test-page">
      <h1>Add New Test</h1>
      <hr />
      <form className="add-test-page" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Test Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={testData.name}
            onChange={handleInputChange}
            placeholder="Enter Name of the Test"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="code">Test Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={testData.code}
            onChange={handleInputChange}
            placeholder="Enter Test Code"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Test Description</label>
          <textarea
            name="description"
            id="description"
            value={testData.description}
            onChange={handleInputChange}
            placeholder="Description of the Test"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Test Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            value={testData.instructions}
            onChange={handleInputChange}
            placeholder="Instructions for the Test"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="parameters">Test Parameters</label>
          <textarea
            name="parameters"
            id="parameters"
            value={testData.parameters}
            onChange={handleInputChange}
            placeholder="Parameters of Test"
            required
          />
        </div>

        <div className="form-group">
            <label htmlFor="numberofparams">Number of Parameters Covered</label>
            <input
              id="numberofparams"
              name="numberofparams"
              type="numberofparams"
              value={testData.numberofparams}
              onChange={handleInputChange}
              placeholder="Enter number of Parameterd covered"
              required
            />
          </div>

        <div className="flex-container">
          {/* Duration */}
          <div className="form-group">
            <label htmlFor="duration">Test Duration (in minutes)</label>
            <input
              id="duration"
              name="duration"
              type="number"
              value={testData.duration}
              onChange={handleInputChange}
              placeholder="Enter test duration"
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Test Category</label>
            <input
              id="category"
              name="category"
              type="text"
              value={testData.category}
              placeholder="Enter test category"
              onChange={handleInputChange}
              onKeyDown={handleCategoryChange}
            />
            <div className="category-tags">
              {categories.map((category, index) => (
                <div className="category-tag" key={index}>
                  {category}
                  <button
                    type="button"
                    onClick={() => removeCategory(category)}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="price">Test Price (₹)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={testData.price}
            onChange={handleInputChange}
            style={{ width: "38.5%" }}
            placeholder="Price of the Test"
            required
          />
        </div>

        <button type="submit">Add Test</button>
      </form>
    </div>
  );
};

export default AddTest;
