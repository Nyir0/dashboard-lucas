import $ from 'jquery';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

$(document).ready(function () {
  // Seletor do elemento canvas (gráfico)
  var canvas = $("#myChart");

  // Criação do elemento do texto
  var tooltipContainer = document.createElement('span');
  canvas.parent().append(tooltipContainer); // Adiciona ao pai do elemento canvas

  var ctx = canvas[0].getContext("2d");

  const options = {
    cutout: '75%',
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    onHover: function (event, elements) {
      const chart = this;

      if (elements && elements.length > 0) {
        const index = elements[0].index;
        const value = chart.data.datasets[0].data[index];
        const labelText = chart.data.labels[index];

        const center_x = (chart.chartArea.left + chart.chartArea.right) / 2;
        const center_y = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        // Atualiza o conteúdo e a posição do span
        tooltipContainer.textContent = `${labelText}: ${value}%`;
        tooltipContainer.style.position = 'absolute';
        tooltipContainer.style.left = center_x + 'px';
        tooltipContainer.style.top = center_y + 'px';
        tooltipContainer.style.transform = 'translate(-50%, -50%)';
        tooltipContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        tooltipContainer.style.padding = '5px';
        tooltipContainer.style.borderRadius = '5px';
        tooltipContainer.style.pointerEvents = 'none';
        tooltipContainer.style.fontFamily = 'Arial';
        tooltipContainer.style.fontSize = '14px';
        tooltipContainer.style.color = 'Black';

        // Torna o span visível
        tooltipContainer.style.display = 'block';
      } else {
        // Se o mouse não estiver sobre uma parte específica, esconde o span
        tooltipContainer.style.display = 'none';
      }
    },
  };

  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Eletronics', 'Women´s', 'Phones', 'Others'],
      datasets: [{
        label: "",
        data: [25, 65, 15, 10],
        backgroundColor: [
          'rgb(152 159 224)',
          'rgb(103 192 135)',
          'rgb(239 214 84)',
          'rgb(221 140 140)',
        ],
        borderWidth: 0.2,
        cutoutPercentage: 80,
      }],
    },
    options: options,
  });
});
