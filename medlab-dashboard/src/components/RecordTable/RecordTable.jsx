import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa6";

import "./RecordTable.css";

const RecordTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/booktest");
      if (!response.ok) throw new Error("Failed to fetch bookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const markAsDone = async (id) => {
    try {
      const response = await fetch(`http://localhost:5050/booktest/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Done" }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? { ...booking, status: "Done" } : booking
        )
      );
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5050/booktest/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete booking");

      setBookings((prev) => prev.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error("Error deleting Record:", error);
    }
  };

  return (
    <div className="record-table-container">
      <hr className="record-table-divider" />
      <h2 className="record-table-title">Booking Records</h2>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
      ) : (
        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Test</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="10s" style={{ textAlign: "center", fontSize: "16px" }}>
                  No records found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.name}</td>
                  <td>{booking.age}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.email}</td>
                  <td>{booking.tests}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.appointmentTime}</td>
                  <td>₹{booking.totalPayment}</td>
                  <td>{booking.status}</td>
                  <td className="action-buttons">
                    <button
                      className="mark-done-btn"
                      onClick={() => markAsDone(booking._id)}
                      disabled={booking.status === "Done"}
                    >
                      {booking.status === "Done" ? "Completed" : "Mark as Done"}
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBooking(booking._id)}
                    >
                       <FaIcons.FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecordTable;
