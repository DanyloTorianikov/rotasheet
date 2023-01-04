import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { InfoBlockModule } from '@modules/info-block/info-block.module';
import { ChartModule } from '@modules/chart/chart.module';
import { TabsModule } from '@modules/tabs/tabs.module';
import { PerformanceTableComponent } from './components/performance-table/performance-table.component';
import { PerformanceComponent } from './performance.component';
import { PerformanceRoutingModule } from './performance-routing.module';
@NgModule({
  declarations: [PerformanceComponent, PerformanceTableComponent],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule,
    FormElementsModule,
    InfoBlockModule,
    ChartModule,
    MatTableModule,
    TabsModule
  ],
})
export class PerformanceModule { }
