export interface IChartColor {
  firstColor: string;
  secondColor: string;
}

export interface IChartsConfig {
  bar: any;
  doughnut: any;
  common_doughnut: any;
  polarArea: any;
  horizontal_bar: any;
}

export interface IChart {
  values: number[];
  labels: string[];
  colors?: IChartColor[];
}