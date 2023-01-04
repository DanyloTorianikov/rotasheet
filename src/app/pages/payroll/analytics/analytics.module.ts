import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { InfoBlockModule } from '@modules/info-block/info-block.module';
import { ChartModule } from '@modules/chart/chart.module';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
  declarations: [
    AnalyticsComponent,
    AnalyticsTableComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule,
    FormElementsModule,
    InfoBlockModule,
    ChartModule,
    MatTableModule,
  ]
})
export class AnalyticsModule { }
