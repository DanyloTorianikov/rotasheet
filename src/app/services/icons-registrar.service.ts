import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const SVG_ICONS_PATH = 'assets/images/icons/';

const SVG_ICONS = [
  { name: 'help', path: SVG_ICONS_PATH + 'help.svg' },
  { name: 'bell', path: SVG_ICONS_PATH + 'bell.svg' },
  { name: 'settings', path: SVG_ICONS_PATH + 'settings.svg' },
  { name: 'person', path: SVG_ICONS_PATH + 'person.svg' },
  { name: 'arrow-down', path: SVG_ICONS_PATH + 'arrow-down.svg' },
  { name: 'arrow-down-v2', path: SVG_ICONS_PATH + 'arrow-down-v2.svg' },
  { name: 'dashboard', path: SVG_ICONS_PATH + 'dashboard.svg' },
  { name: 'employee', path: SVG_ICONS_PATH + 'employee.svg' },
  { name: 'bill', path: SVG_ICONS_PATH + 'bill.svg' },
  { name: 'exit', path: SVG_ICONS_PATH + 'exit.svg' },
  { name: 'statement', path: SVG_ICONS_PATH + 'statement.svg' },
  { name: 'copy', path: SVG_ICONS_PATH + 'copy.svg' },
  { name: 'recruitment', path: SVG_ICONS_PATH + 'recruitment.svg' },
  { name: 'speedometer', path: SVG_ICONS_PATH + 'speedometer.svg' },
  { name: 'development', path: SVG_ICONS_PATH + 'development.svg' },
  { name: 'schedule', path: SVG_ICONS_PATH + 'schedule.svg' },
  { name: 'calendar', path: SVG_ICONS_PATH + 'calendar.svg' },
  { name: 'calendar-v2', path: SVG_ICONS_PATH + 'calendar-v2.svg' },
  { name: 'employee-v2', path: SVG_ICONS_PATH + 'employee-v2.svg' },
  { name: 'pie-chart', path: SVG_ICONS_PATH + 'pie-chart.svg' },
  { name: 'search', path: SVG_ICONS_PATH + 'search.svg' },
  { name: 'print', path: SVG_ICONS_PATH + 'print.svg' },
  { name: 'upload', path: SVG_ICONS_PATH + 'upload.svg' },
  { name: 'volume', path: SVG_ICONS_PATH + 'volume.svg' },
  { name: 'round-chart', path: SVG_ICONS_PATH + 'round-chart.svg' },
  { name: 'volume-v2', path: SVG_ICONS_PATH + 'volume-v2.svg' },
];

@Injectable()
export class IconsRegistrarService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  public registerIcons(): Promise<void> {
    SVG_ICONS.forEach(({ name, path }) => {
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path));
    });
    return Promise.resolve();
  }
}