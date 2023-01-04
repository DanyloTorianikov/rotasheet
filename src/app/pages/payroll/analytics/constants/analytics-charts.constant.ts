import { IChartColor } from "@modules/chart/interfaces/chart.interfaces";
import { IAnalyticsCharts } from "../interfaces/analytics-charts.interfaces";

const CHART_VARIABLE_COLORS: IChartColor[] = [
  {
    firstColor: '#5d9eff',
    secondColor: '#0066ff',
  },
  {
    firstColor: '#f55399',
    secondColor: '#da5bec',
  },
  {
    firstColor: '#00d5c8',
    secondColor: '#00b2bf',
  },
  {
    firstColor: '#ff88a2',
    secondColor: '#f55454',
  },
  {
    firstColor: '#614a72',
    secondColor: '#4659aa',
  },
];

const CHART_COST_COLORS: IChartColor[] = [
  {
    firstColor: '#5d9eff',
    secondColor: '#0066ff',
  },
  {
    firstColor: '#f55399',
    secondColor: '#da5bec',
  },
  {
    firstColor: '#00d5c8',
    secondColor: '#00b2bf',
  },
  {
    firstColor: '#ff88a2',
    secondColor: '#f55454',
  },
  {
    firstColor: '#614a72',
    secondColor: '#4659aa',
  },
  {
    firstColor: '#53f578',
    secondColor: '#60d4ff'
  },
  {
    firstColor: '#ffdb65',
    secondColor: '#ffa700'
  },
  {
    firstColor: '#5d9eff',
    secondColor: '#0066ff'
  }
];

const CHART_VARIABLE_LABELS: string[] = [
  'Performance Bonus',
  'Factory Incentive',
  'Incentive',
  'Overtime',
  'Shift Allowance'
];

const CHART_COST_LABELS: string[] = [
  'Finance',
  'HR',
  'Engineering',
  'Marketing',
  'Accounts',
  'Operations',
  'Sales',
  'IT'
];

const CHART_VARIABLE_VALUES: number[] = [765000, 430000, 755000, 830000, 789000];


const CHART_COST_VALUES: number[] = [876, 200, 400, 600, 579, 250, 1376, 900];

export const ANALYTICS_CHARTS: IAnalyticsCharts = {
  variable: {
    labels: CHART_VARIABLE_LABELS,
    values: CHART_VARIABLE_VALUES,
    colors: CHART_VARIABLE_COLORS
  },
  cost: {
    labels: CHART_COST_LABELS,
    values: CHART_COST_VALUES,
    colors: CHART_COST_COLORS
  }
}