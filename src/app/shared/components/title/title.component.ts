import { Component, Input } from '@angular/core';
import { IBreadcrumb } from './interfaces/breadcrumbs.interface';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() public title?: string;
  @Input() public breadcrumbList: IBreadcrumb[] = [{ name: 'Home', path: '/' }, { name: 'Register' }];
}
