import React, { useEffect, useState } from "react";
import BookingChart from "../../components/Charts/BookingChart";
import "./Home.css"
import RecordTable from "../../components/RecordTable/RecordTable";

const Home = () => {
  const [totalBookings, setTotalBookings] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://medlab-app-backend-server.vercel.app//booktest");
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from API");
        }

        setTotalBookings(data.length); // ✅ Get total bookings
      } catch (error) {
        console.error("Error fetching total bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="home-container">
      <h1>Home</h1>
      <hr />
      <div className="chart-container">
        <BookingChart />
      </div>
      
      <div className="total-bookings">
        <h2>Total Bookings: {totalBookings !== null ? totalBookings : "Loading..."}</h2>
      </div>

      <div>
        <RecordTable/>
      </div>
    </div>
  );
};

export default Home;
