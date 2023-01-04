import { IChartColor } from "@modules/chart/interfaces/chart.interfaces";
import { ICharts } from "../interfaces/performance.interface";


const DEFAULT_CHART_COLORS: IChartColor[] = [
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
];

const CHART_BAR_LABELS: string[] = [
  'Exceed Expectations',
  'Meet Expectations',
  'Below Expectations',
  'Do Not Meet Expectations',
];

const CHART_OVERALL_LABELS: string[] = [
  'Meet Expectations',
  'Exceed Expectations',
  'Below Expectations',
];

const CHART_BONUS_LABELS: string[] = [
  'Meet Expectations',
  'Exceed Expectations',
  'Below Expectations',
];

const CHART_NUMBER_LABELS: string[] = [
  'Meet Expectations',
  'Exceed Expectations',
  'Below Expectations',
];

const CHART_RATING_LABELS: string[] = [
  'Merit Increases',
  'Promotion',
  'Bonus',
];

const CHART_BONUS_VALUES: number[] = [3573499, 4556349, 1364647];

const CHART_OVERALL_VALUES: number[] = [2573499, 6456349, 5364647];

const CHART_RATING_VALUES: number[] = [2573499, 6456349, 4364647];


const CHART_BAR_VALUES: number[] = [1400, 3700, 980, 470];

const CHART_NUMBER_VALUES: number[] = [4, 3, 2];

export const CHARTS: ICharts = {
  bar: {
    values: CHART_BAR_VALUES,
    labels: CHART_BAR_LABELS,
    colors: DEFAULT_CHART_COLORS
  },
  overall: {
    values: CHART_OVERALL_VALUES,
    labels: CHART_OVERALL_LABELS,
    colors: DEFAULT_CHART_COLORS
  },
  bonus: {
    values: CHART_BONUS_VALUES,
    labels: CHART_BONUS_LABELS,
    colors: DEFAULT_CHART_COLORS
  },
  number: {
    values: CHART_NUMBER_VALUES,
    labels: CHART_NUMBER_LABELS,
    colors: DEFAULT_CHART_COLORS
  },
  rating: {
    values: CHART_RATING_VALUES,
    labels: CHART_RATING_LABELS,
  },
};
