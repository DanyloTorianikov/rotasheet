import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IChartsConfig } from '../interfaces/chart.interfaces';

const BAR_CHART = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderRadius: 10,
      },
    ],
  },
  options: {
    tooltips: {
      enabled: true,
    },
    scales: {
      y: {
        ticks: {
          callback: (label: number) =>
            label > 999 ? `${label / 1000}k` : label,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        padding: 10,
        clamp: true,
        backgroundColor: '#f5f6f8',
        borderRadius: 10,
        formatter: (context: number) => {
          return context / 1000 + 'k';
        },
        color: [],
      },
    },
  },
  plugins: [ChartDataLabels],
};

const DOUGHNUT_CHART = {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderAlign: 'center',
        borderRadius: 100,
        spacing: 20,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    layout: {
      padding: 55
    },
    cutout: 150,
    tooltips: {
      enabled: true,
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        padding: 10,
        clamp: true,
        borderRadius: 10,
        font: {
          size: 14,
        },
        formatter: (value: number, context: any) => {
          const sum = context.dataset.data.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
          return `${Math.floor((value * 100) / sum)}%\n$ ${value
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        },
        color: [],
      },
    },
  },
  plugins: [ChartDataLabels],
}

const COMMON_DOUGHNUT_CHART = {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#4857a5', '#ff9300', '#05bd9b'],
        borderAlign: 'center',
        hoverOffset: 4,
      },
    ],
  },
  options: {
    cutout: 200,
    tooltips: {
      enabled: true,
    },
    layout: {
      padding: {
        left: 20,
      }
    },
    plugins: {
      legend: {
        padding: 20,
        position: 'right',
        title: {
          text: 'Legend',
          color: '#000000',
          font: {
            size: 32,
          },
          display: true,
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        clamp: true,
        borderRadius: 10,
        font: {
          size: 20,
        },
        formatter: (value: number, context: any) => {
          const sum = context.dataset.data.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
          return `${Math.floor((value * 100) / sum)}%`;
        },
        color: ['#05bd9b', '#4857a5', '#ff9300'],
      },
    },
  },
  plugins: [ChartDataLabels],
}

const POLAR_AREA_CHART = {
  type: 'polarArea',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderAlign: 'center',
      },
    ],
  },
  options: {
    tooltips: {
      enabled: true,
    },
    layout: {
      padding: {
        left: 50
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 14,
        },
        formatter: (value: number, context: any) => {
          const sum = context.dataset.data.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
          return `${Math.floor((value * 100) / sum)}%\n$ ${value
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        },
        color: [],
      },
    },
  },
  plugins: [ChartDataLabels],
}

const HORIZONTAL_CHART = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderRadius: 10,
      },
    ],
  },
  options: {
    indexAxis: 'y',
    tooltips: {
      enabled: true,
    },
    scales: {
      y: {
        ticks: {},
      },
    },
    layout: {
      padding: {
        right: 50
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        padding: 10,
        clamp: true,
        backgroundColor: '#f5f6f8',
        borderRadius: 10,
        formatter: (context: number) => {
          return context / 1000 + 'k';
        },
        color: [],
      },
    },
  },
  plugins: [ChartDataLabels],
};

export const CHARTS: IChartsConfig = {
  bar: BAR_CHART,
  doughnut: DOUGHNUT_CHART,
  common_doughnut: COMMON_DOUGHNUT_CHART,
  polarArea: POLAR_AREA_CHART,
  horizontal_bar: HORIZONTAL_CHART,
};
