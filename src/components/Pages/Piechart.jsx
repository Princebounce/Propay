import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [40, 28.2, 31.8],
          backgroundColor: ['red', 'green', 'blue'],
        }],
      },
    });

    return () => {
      // Cleanup function to destroy the chart when the component unmounts
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} className='w-28 h-28'></canvas>
    </div>
  );
};

export default PieChart;
