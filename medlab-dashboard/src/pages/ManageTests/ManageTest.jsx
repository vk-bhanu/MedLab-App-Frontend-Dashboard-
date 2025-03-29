import React, { useEffect, useState } from "react";
import "./ManageTest.css";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const ManageTest = () => {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  const fetchTests = async () => {
    try {
      const response = await axios.get("//record");
      setTests(response.data);
    } catch (error) {
      console.error("Error fetching tests", error);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleEdit = (id) => {
    navigate(`//edit-test/${id}`); // Navigate to EditTest page with the test ID
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`//record/${id}`);
      setTests(tests.filter((test) => test._id !== id));
      console.log("Test deleted successfully");
    } catch (error) {
      console.error("Error deleting test", error);
    }
  };

  return (
    <div className="manage-test-page">
      <h1>Manage Tests</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Test Name</th>
            <th>Test Code</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tests.map((test, index) => (
            <tr key={test._id}>
              <td>{index + 1}</td>
              <td>{test.name}</td>
              <td>{test.code}</td>
              <td>
                {test.categories && test.categories.length > 0
                  ? test.categories.join(", ")
                  : "No categories available"}
              </td>
              <td>{test.price}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(test._id)}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(test._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTest;
