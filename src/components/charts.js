import React from "react";
import { Chart } from "react-google-charts";
import { graficoOne } from "../data/graficoOne";

const dataChartsOld = graficoOne.filter(grafic => grafic.type === 'Expenses');
const dataChartsNew = graficoOne.filter(grafic => grafic.type === 'Earnings');

const formatChartData = (data) => {
  return [
    ["Name", "Popularity"],
    ...data.map(item => [item.mes, Number(item.data)])
  ];
};

const dataOld = formatChartData(dataChartsOld);
const dataNew = formatChartData(dataChartsNew);

const diffdata = {
  old: dataOld,
  new: dataNew,
};

export function Grafico() {
  return (
    <Chart
      chartType="ColumnChart"
      width="50%"
      height="100px"
      diffdata={diffdata}
    />
  );
}
