import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from '@shared/shared.module';
import { SwitchComponent } from './components/switch/switch.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

const COMPONENTS = [
  InputComponent,
  SwitchComponent,
  SelectComponent,
  DatepickerComponent,
];

@NgModule({
  declarations: [...COMPONENTS, DatepickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  exports: [...COMPONENTS, FormsModule, ReactiveFormsModule],
})
export class FormElementsModule {}
