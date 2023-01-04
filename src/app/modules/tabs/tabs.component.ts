import { Component, Input } from '@angular/core';
import { ITab } from './interfaces/tabs.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() public tabs!: ITab[];
  @Input() public title!: string;
}
