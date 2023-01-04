import { Component, Input } from '@angular/core';
import { IInfoBlock } from './interfaces/info-block.interface';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent {
  @Input() public items!: IInfoBlock[];
}
