import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ModalPop.css";

const ModalPop = ({ isOpen, onClose, preselectedTests, testPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    tests: preselectedTests,
    appointmentDate: null,
    appointmentTime: null,
    paymentOption: "pay-at-center",
    totalPayment: testPrice,
    status: "pending",
  });
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    axios
      .get("https://medlab-app-backend-server.vercel.app/record")
      .then((response) => {
        setTests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching test data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      tests: preselectedTests,
    }));
  }, [preselectedTests]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    axios
      .post("https://medlab-app-backend-server.vercel.app/booktest", formData)
      .then((response) => {
        console.log("Booking successful:", response.data);
        setBookingConfirmed(true);

        setTimeout(() => {
          setBookingConfirmed(false);
          onClose();
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting booking:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      <div className="modal-container">
        {!bookingConfirmed ? (
          <>
            <h2 className="modal-title">Book a Test</h2>
            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="modal-form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="modal-form-input"
                />
              </div>
              <div className="modal-form-group">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="modal-form-input"
                />
              </div>
              <div className="modal-form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="modal-form-input"
                />
              </div>
              <div className="modal-form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="modal-form-input"
                />
              </div>
              <div className="modal-form-group">
                <label>Selected Test:</label>
                <div className="selected-test">{preselectedTests}</div>
              </div>
              <div className="modal-form-group">
                <label>Total Payment:</label>
                <p className="test-price">₹{testPrice}</p>
              </div>

              <div className="modal-form-group">
                <label>Date & Time</label>
                <div className="date-time-wrapper">
                  <DatePicker
                    selected={formData.appointmentDate}
                    onChange={(date) =>
                      setFormData((prev) => ({
                        ...prev,
                        appointmentDate: date,
                      }))
                    }
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    className="modal-form-input"
                    placeholderText="Select date"
                  />
                  
                  <input
                    type="text"
                    name="appointmentTime"
                    value={formData.appointmentTime || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        appointmentTime: e.target.value,
                      }))
                    }
                    className="modal-time-input"
                    placeholder="HH:MM AM/PM"
                  />
                </div>
              </div>
              <div className="modal-form-group">
                <label>Payment Option:</label>
                <div className="payment-option">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="pay-at-center"
                    checked={formData.paymentOption === "pay-at-center"}
                    readOnly
                  />
                  Pay at Center
                </div>
              </div>
              <div className="form-actions">
                <button type="button" onClick={handleSubmit}>
                  Confirm Booking
                </button>
                <button type="button" onClick={onClose}>
                  Close
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="booking-confirmation">
            <h2>🎉 Booking Confirmed!</h2>
            <p>Your appointment has been scheduled.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalPop;
