import { IInfoBlock } from "@modules/info-block/interfaces/info-block.interface";
import { IBreadcrumb } from "@shared/components/title/interfaces/breadcrumbs.interface";

export const ANALYTICS_BREADCRUMBS_LIST: IBreadcrumb[] = [
  { name: 'Payroll', path: '/' },
  { name: 'Analytics' },
];

export const ANALYTICS_INFO: IInfoBlock[] = [
  {
    label: 'Total Employees',
    value: 280,
  },
  {
    label: 'Total cost of employment ',
    value: '$600K',
  },
  {
    label: 'Total Salaries (AGS)',
    value: '$300K',
  },
  {
    label: 'Variable Pay',
    value: '$900K',
  },
  {
    label: 'Total Benefits',
    value: '$1.5M',
    active: true
  },
];

export const CURRENCIES = [
  { value: 'USD', label: '$ USD' }
]