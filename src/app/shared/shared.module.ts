import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    MatIconModule,
    ButtonComponent,
    TitleComponent,
    ShortNumberPipe
  ]
})
export class SharedModule { }
