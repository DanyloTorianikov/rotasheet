import { Component } from '@angular/core';
import { IInfoBlock } from '@modules/info-block/interfaces/info-block.interface';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumbs.interface';
import { ITab } from '@modules/tabs/interfaces/tabs.interface';
import { CHARTS } from './constants/performance-charts.constant';
import { PERFORMANCE_ABOVE, PERFORMANCE_BELOW } from './constants/performance-table.constant';
import {
  PERFORMANCE_BREADCRUMBS_LIST,
  PERFORMANCE_INFO,
  PERFORMANCE_TABS,
} from './constants/performance.constant';
import { ICharts, IPerformanceThreshold } from './interfaces/performance.interface';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent {
  public breadcrumbsList: IBreadcrumb[] = PERFORMANCE_BREADCRUMBS_LIST;
  public performanceInfo: IInfoBlock[] = PERFORMANCE_INFO;
  public charts: ICharts = CHARTS;
  public performanceAbove: IPerformanceThreshold[] = PERFORMANCE_ABOVE;
  public performanceBelow: IPerformanceThreshold[] = PERFORMANCE_BELOW;
  public tabs: ITab[] = PERFORMANCE_TABS;
}
