import $ from "jquery";
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

$(document).ready(function(){

    var ctx = document.getElementById("myLineChart");


    var options = {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales: {
            x: {
                display: false, // Remove as etiquetas do eixo x
            },
            y: {
                display: false, // Remove as etiquetas do eixo y
            }
        },
        plugins: {
            legend: {
                display: false // Remove a legenda
            }
        }
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2020", "2021", "2022", "2023"],
            datasets: [{
                label: 'Series 1', // Name the series
                data: [745, 468, 976, 1176], // Specify the data values array
                fill: false,
                borderColor: 'rgba(96, 138, 208, 0.85)', // Add custom color border (Line)
                backgroundColor: 'rgba(96, 138, 208, 0.85)', // Add custom color background (Points and Fill)
                borderWidth: 4, // Specify bar border width
                cubicInterpolationMode: 'monotone',
            }]},
        options: options
    });

})