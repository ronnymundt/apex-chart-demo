import { ApexAxisChartSeries, ApexXAxis, ApexTitleSubtitle, ApexChart, ApexLegend, ApexTooltip } from "ng-apexcharts";

export interface IApexChartState {
    series: ApexAxisChartSeries
}

export interface IChartOptions {
    series?: ApexAxisChartSeries,
    chart?: ApexChart,
    xaxis?: ApexXAxis,
    title?: ApexTitleSubtitle,
    legend?: ApexLegend,
    tooltip?: ApexTooltip
};