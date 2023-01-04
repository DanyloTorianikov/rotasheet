import { IMainMenuItem, ISubMenu, ISubMenuItem } from '../interfaces/menu-items.interface';

export const MAIN_MENU: IMainMenuItem[] = [
  {
    label: 'General',
    icon: 'dashboard',
    name: 'general',
    route: '/',
  },
  {
    label: 'Employees',
    icon: 'employee',
    name: 'employees',
    route: '/employees',
  },
  {
    label: 'Payroll',
    icon: 'bill',
    name: 'payroll',
    route: '/payroll',
  },
  {
    label: 'Leave',
    icon: 'exit',
    name: 'leave',
    route: '/',
  },
  {
    label: 'Payment',
    icon: 'statement',
    name: 'payment',
    route: '/',
  },
  {
    label: 'Documents',
    icon: 'copy',
    name: 'documents',
    route: '/',
  },
  {
    label: 'Recruitments',
    icon: 'recruitment',
    name: 'recruitments',
    route: '/',
  },
  {
    label: 'Learnings',
    icon: 'development',
    name: 'learnings',
    route: '/',
  },
  {
    label: 'Timesheet',
    icon: 'schedule',
    name: 'timesheet',
    route: '/',
  },
  {
    label: 'Scheduling',
    icon: 'calendar',
    name: 'scheduling',
    route: '/',
  },
  {
    label: 'Engagement',
    icon: 'employee-v2',
    name: 'engagement',
    route: '/',
  },
  {
    label: 'Reports & Analytics',
    name: 'reports',
    icon: 'pie-chart',
    route: '/',
  },
];


const employees: ISubMenuItem[] = [
  {
    label: 'Employees',
    route: '/',
    name: 'employees'
  },
  {
    label: 'Directory',
    route: '/',
    name: 'directory'
  },
  {
    label: 'Onboarding',
    route: '/',
    name: 'onboarding'
  },
  {
    label: 'Offboarding',
    route: '/',
    name: 'offboarding',
  },
  {
    label: 'Dashboard',
    route: '/',
    name: 'dashboard'
  },
  {
    label: 'Performance',
    route: '/employees/performance',
    name: 'performance',
  },
];

const payroll: ISubMenuItem[] = [
  {
    label: 'Process Payroll',
    route: '/',
    name: 'process-payroll'
  },
  {
    label: 'Payslip',
    route: '/',
    name: 'payslip'
  },
  {
    label: 'Pension',
    route: '/',
    name: 'pension'
  },
  {
    label: 'Tax',
    route: '/',
    name: 'tax'
  },
  {
    label: 'Benefits',
    route: '/',
    name: 'benefits'
  },
  {
    label: 'Approval',
    route: '/',
    name: 'approval'
  },
  {
    label: 'Status',
    route: '/',
    name: 'status',

  },
  {
    label: 'Analytics',
    route: '/payroll/analytics',
    name: 'analytics'
  },
]

export const SUB_MENU: ISubMenu = {
  employees,
  payroll
};


