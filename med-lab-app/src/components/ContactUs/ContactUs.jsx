import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const preselectedSubject = location.state?.preselectedSubject || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzuvfY_AZvGdOo2FtWS_C6vVRDO4Fh3gNkkIHT8sUdh8ZtJonopj1BsLnZQqmYSTdIoZA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch {
      setResponseMessage("Message Sent SuccessFully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <i class="fi fi-sr-phone-call" style={{ color: "#2ECC40" }} /> +91
            9695777747 
          </li>
          <li>
            <i className="fi fi-sr-envelope" style={{ color: "#2ECC40" }}></i>
            support@newvindiagnostics.com
          </li>
          <li>
            <i className="fi fi-sr-marker" style={{ color: "#2ECC40" }}></i> New
            Delhi, Delhi
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Get In Touch With Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Test Packages">Test Packages</option>
              <option value="Help & Support">Help & Support</option>
              <option value="Appointment">Appointment</option>
              <option value="Report">Report</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
