import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EControlColor } from '../../form-elements/enums/controls.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public controlColor: EControlColor = EControlColor.green;
  public company: FormControl = new FormControl('Upwork USA Incorporation');
}
