import { IChart } from "@modules/chart/interfaces/chart.interfaces";

export interface IAnalyticsCharts {
  variable: IChart;
  cost: IChart;
}

export interface IAnalyticsTable {
  text: string;
  amount: number;
}