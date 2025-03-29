import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BookingChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://vercel.com/vk-bhanus-projects/med-lab-app-frontend-dashboard/7BWctgxqRRYoNLk2eyQXKYqnkbyi/booktest");
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from API");
        }

        const monthlyCount = Array(12).fill(0);

        data.forEach((booking) => {
          if (booking.createdAt) {
            const bookingDate = new Date(booking.createdAt);
            const monthIndex = bookingDate.getMonth();
            monthlyCount[monthIndex]++;
          }
        });

        const monthNames = [
          "Jan", "Feb", "Mar", "Apr", "May", "June",
          "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        setChartData({
          labels: monthNames,
          datasets: [
            {
              label: "Bookings per Month",
              data: monthlyCount,
              borderColor: "rgb(46, 204, 64)",
              backgroundColor: "rgba(46, 204, 64, 0.56)",
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: "rgb(18, 32, 35)", 
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching bookings data: ", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Monthly Bookings Trend</h2>
      <div className="w-full h-[200px] md:h-[250px] lg:h-[300px]">
        {chartData ? (
          <Line 
            data={chartData} 
            options={{ maintainAspectRatio: false }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default BookingChart;
