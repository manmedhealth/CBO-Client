import { Bar } from 'react-chartjs-2';

export default function DailySalesChart({ darkMode }) {
  const data = {
    labels: ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: "Today's Medicine Sales ($)",
        data: [250, 420, 380, 510, 320],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#fff' : '#666'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
}