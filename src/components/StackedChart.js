import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarCharts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [
        {
          label: 'Earning',
          data: [291, 249, 187, 220, 98, 82, 106, 143, 212, 296, 276, 343],
          backgroundColor: 'rgba(96, 138, 208, 0.85)',
          borderRadius: 5,
        },
        {
          label: 'Expenses',
          data: [-59, -194, -54, -22, -56, -117, -125, -76, -153, -187, -156, -128],
          backgroundColor: '#b0c6e3',
          borderRadius: 5,
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false, // Define como falso para ocultar as linhas de grade no eixo x
          },
        },
        y: {
          stacked: true,
          grid: {
            display: false, // Define como falso para ocultar as linhas de grade no eixo x
          },
        },
      },
      barThickness: 5,
    };

    // Destrói o gráfico existente se ele já existir
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Cria um novo gráfico
    chartRef.current.chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default StackedBarCharts;
