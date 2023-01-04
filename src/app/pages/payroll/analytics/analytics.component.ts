import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelect } from '@modules/form-elements/components/select/interfaces/select.interface';
import { IInfoBlock } from '@modules/info-block/interfaces/info-block.interface';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumbs.interface';
import { ANALYTICS_CHARTS } from './constants/analytics-charts.constant';
import { TOTAL_BENEFITS, TOTAL_SALARIES } from './constants/analytics-table.constant';
import { ANALYTICS_BREADCRUMBS_LIST, ANALYTICS_INFO, CURRENCIES } from './constants/analytics.constant';
import { IAnalyticsCharts, IAnalyticsTable } from './interfaces/analytics-charts.interfaces';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public breadcrumbsList: IBreadcrumb[] = ANALYTICS_BREADCRUMBS_LIST;
  public analyticsInfo: IInfoBlock[] = ANALYTICS_INFO;
  public charts: IAnalyticsCharts = ANALYTICS_CHARTS;
  public totalSalaries: IAnalyticsTable[] = TOTAL_SALARIES;
  public totalBenefits: IAnalyticsTable[] = TOTAL_BENEFITS;
  public currencies: ISelect[] = CURRENCIES;
  public analyticsForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.analyticsForm = this.formBuilder.group({
      from: [new Date()],
      to: [new Date()],
      currency: [{ value: 'USD', label: '$ USD' }]
    })
  }
}
