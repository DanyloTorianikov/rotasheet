import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CHARTS } from './constants/chart.constant';
import {
  IChart,
  IChartColor,
  IChartsConfig,
} from './interfaces/chart.interfaces';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() public id!: number;
  @Input() public type!: string;
  @Input() public chart!: IChart;
  @Input() public title!: string;
  @Input() public icon!: string;
  @Input() public subtitle!: string;
  @Input() public totalTitle?: string;

  public ngAfterViewInit(): void {
    if (this.type === 'number') return;

    const chart = CHARTS[this.type as keyof IChartsConfig];

    if (this.chart.colors) {
      chart.options.plugins.datalabels.color = this.colors;
      chart.data.datasets[0].backgroundColor = this.colors;
    }

    if (this.type === 'horizontal_bar') {
      chart.options.scales.y.ticks.callback = (value: number, index: number) => {
        return this.chart.labels[index]
      }
    }

    chart.data.labels = this.chart.labels;
    chart.data.datasets[0].data = this.chart.values;
    new Chart(this.chartId, chart);
  }

  public get chartId(): string {
    return `chart-${this.id}`;
  }

  public get total(): number {
    return this.chart.values?.reduce(
      (acc: number, curr: number) => acc + curr,
      0
    );
  }

  private get colors(): CanvasGradient[] {
    return this.chart?.colors?.map(
      ({ firstColor, secondColor }: IChartColor) =>
        this.createGradient(firstColor, secondColor)
    )!;
  }

  private createGradient(firstColor: string, secondColor: string): CanvasGradient {
    const ctx = (document.getElementById(this.chartId) as HTMLCanvasElement).getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, firstColor);
    gradient.addColorStop(1, secondColor);
    return gradient;
  }
}
