import React, { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import { useParams, useNavigate } from "react-router-dom";
import "./EditTest.css";

const EditTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [testData, setTestData] = useState({
    name: "",
    description: "",
    duration: "",
    instructions: "",
    parameters: "",
    numberofparams: "",
    category: "",
    price: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await axios.get(`/record/${id}`);
        const fetchData = response.data;

        setTestData({
          name: fetchData.name,
          description: fetchData.description,
          duration: fetchData.duration,
          instructions: fetchData.instructions,
          parameters: fetchData.parameters,
          numberofparams: fetchData.numberofparams,
          category: "",
          price: fetchData.price,
        });
        setCategories(fetchData.categories || []);
      } catch (error) {
        console.error("Error fetching Test Details", error);
      }
    };
    fetchTestDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestData({ ...testData, [name]: value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/record/${id}`, {
        ...testData,
        categories,
      });
      console.log("Test updated successfully");
      navigate("/manage-tests");
    } catch (error) {
      console.log("Error updating test", error);
    }
  };

  return (
    <div className="edit-test-page">
      <h1>Edit Test</h1>
      <hr />
      <form action="edit-test-form" onSubmit={handleSubmit}>
        <div className="edit-form-group">
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

        <div className="edit-form-group">
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

        <div className="edit-form-group">
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

        <div className="edit-form-group">
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

        <div className="edit-form-group">
            <label htmlFor="numberofparams">Number of Parameters Covered</label>
            <input
              id="numberofparams"
              name="numberofparams"
              type="number"
              value={testData.numberofparams}
              onChange={handleInputChange}
              placeholder="Enter Number of parameters covered"
              required
            />
          </div>

        <div className="edit-flex-container">
      
          <div className="edit-form-group">
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

          <div className="edit-form-group">
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
            <div className="edit-category-tags">
              {categories.map((category, index) => (
                <div className="edit-category-tag" key={index}>
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

        <div className="edit-form-group">
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

        <button type="submit">Update Test</button>
      </form>
    </div>
  );
};
export default EditTest;
