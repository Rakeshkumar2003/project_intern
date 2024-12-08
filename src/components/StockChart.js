import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "../styles/StockChart.css";

const StockChart = ({ stock }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Get the chart context
    const ctx = chartRef.current.getContext("2d");

    // If a chart instance already exists, destroy it before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
        datasets: [
          {
            label: `${stock.name} Price`,
            data: stock.history,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stock]);

  return (
    <div className="stock-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default StockChart;
