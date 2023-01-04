import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { EIconPosition } from '../../form-elements/enums/controls.enum';
import { MAIN_MENU, SUB_MENU } from './constants/menu-items.constant';
import { IMainMenuItem, ISubMenu, ISubMenuItem } from './interfaces/menu-items.interface';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnDestroy {
  public mainMenuItems: IMainMenuItem[] = MAIN_MENU;
  public selectedSubMenu: ISubMenuItem[] = SUB_MENU.employees;
  public iconPosition: EIconPosition = EIconPosition.left;
  public activeMainItem!: string;
  public activeSubItem!: string;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private router: Router) { }

  public changeMainMenu(name: string): void {
    this.selectedSubMenu = SUB_MENU[name as keyof ISubMenu];
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
    ).subscribe((event) => {
      const url = (event as NavigationEnd).urlAfterRedirects.split('/');
      this.activeMainItem = url[1];
      this.selectedSubMenu = SUB_MENU[this.activeMainItem as keyof ISubMenu];
      this.activeSubItem = url[2];
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
