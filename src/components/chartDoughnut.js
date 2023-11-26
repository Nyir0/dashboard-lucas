import $ from 'jquery';
import React from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

$(document).ready(function() {
    var ctx = document.getElementById("myChart");

    const Options = {
        cutout: '75%',
        responsive: false,
        maintainAspectRatio: false,
        onHover: function (event, legendItem) {
            var legend = this.legend.active;
            console.log(this.legend);
            // if (event.type === 'mousemove') {
            //   legend.active = true;
            // } else if (event.type === 'mouseout') {
            //   legend.active = false;
            // }
            // this.update(); // Atualiza o gráfico para refletir as alterações
        },
        plugins: {
            datalabels: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false, // Configuração para esconder as legendas
            },
        }
    }

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
            datasets: [{
            label: "",
            data: [25, 65, 15, 10],
            backgroundColor: [
                'rgb(152 159 224)',
                'rgb(103 192 135)',
                'rgb(239 214 84)',
                'rgb(221 140 140)'
            ],
            borderWidth: 0.2,
            cutoutPercentage: 80
            }]
        },
        options: Options
    });
})