import { Component, Input } from '@angular/core';
import { DISPLAYED_COLUMNS } from '../../constants/performance-table.constant';
import { IPerformanceThreshold } from '../../interfaces/performance.interface';

@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.scss'],
})
export class PerformanceTableComponent {
  @Input() public dataSource!: IPerformanceThreshold[];
  @Input() public title!: string;
  public displayedColumns: string[] = DISPLAYED_COLUMNS;
}
