export interface IMainMenuItem extends ISubMenuItem {
  icon: string;
}

export interface ISubMenuItem {
  label: string;
  route: string;
  name: string;
}

export interface ISubMenu {
  employees: ISubMenuItem[];
  payroll: ISubMenuItem[]
}
