import { IChart } from "@modules/chart/interfaces/chart.interfaces";

export interface ICharts {
  bar: IChart;
  overall: IChart;
  bonus: IChart;
  number: IChart;
  rating: IChart;
}

export interface IPerformanceThreshold {
  name: string;
  department: string;
  rating: string;
}
