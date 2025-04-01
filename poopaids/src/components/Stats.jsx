import React from 'react';
import './Stats.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  // Chart Data
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Anxiety Level Over Time',
        data: [10, 20, 30, 25],
        fill: false,
        borderColor: 'rgb(32, 44, 44)',
        tension: 0.1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Anxiety Levels Over Time',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div id="stat">
      <h2>Current Patient Stats</h2>
      <div className="stat-item">
        <strong>Heart Rate:</strong> 78 bpm
      </div>
      <div className="stat-item">
        <strong>Blood Pressure:</strong> 120/80 mmHg
      </div>
      <div className="stat-item">
        <strong>Temperature:</strong> 98.6°F (37°C)
      </div>
      <div className="stat-item">
        <strong>Oxygen Level:</strong> 97%
      </div>
      <div className="stat-item">
        <strong>Steps Today:</strong> 5,000 steps
      </div>

      {/* Line Chart Section */}
      <section id="visual-graph">
        <h2>Visual Graph of Anxiety Levels</h2>
        <div className="graph-container">
          <Line data={data} options={options} />
        </div>
      </section>
    </div>
  );
};

export default Stats;
