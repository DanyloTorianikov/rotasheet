import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@shared/shared.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormElementsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class LayoutsModule { }
