import { Component, Input } from '@angular/core';
import { DISPLAYED_COLUMNS } from '../../constants/analytics-table.constant';
import { IAnalyticsTable } from '../../interfaces/analytics-charts.interfaces';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss']
})
export class AnalyticsTableComponent {
  @Input() public dataSource!: IAnalyticsTable[];
  @Input() public title!: string;
  @Input() public columnName!: string;
  public displayedColumns: string[] = DISPLAYED_COLUMNS;

  public get total(): number {
    return this.dataSource.reduce((acc: number, curr: IAnalyticsTable) => acc + curr.amount, 0);
  }
}
