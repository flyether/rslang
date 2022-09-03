/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Chart from 'chart.js/auto';
import { Routes } from '../types/types';
import { statisticsDataLongTerm, getSprintDataForRendering } from '../pages/statistics/statisticsData';
import {
  StatisticsPageTextbookShortTeam, StatisticsPageAudiocallShortTeam,
  StatisticsPageSprintShortTeam,
} from '../pages/statistics/statisticsShortTerm';
import StatisticsPageLongTerm from '../pages/statistics/statisticsLongTerm';

export class ModuleView {
  myModuleContainer!:HTMLElement;

  contentContainer!:HTMLElement;

  routesObj!:Routes;

  statisticsDiv !: HTMLElement;

  chart1 !: Chart;

  chart2 !: Chart;

  init(container: HTMLElement):void {
    this.myModuleContainer = container;
  }

  renderBarChart(chart1: HTMLCanvasElement):void {
    if (this.chart1) { this.chart1.destroy(); }
    const ctx1 = chart1.getContext('2d') as CanvasRenderingContext2D;
    ctx1.clearRect(0, 0, chart1.width, chart1.height);
    this.chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: statisticsDataLongTerm.labels,
        datasets: [{
          label: statisticsDataLongTerm.label1,
          data: statisticsDataLongTerm.data1,
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
          ],
        }],
      },
    });
  }

  renderLineChart(chart2: HTMLCanvasElement): void {
    if (this.chart2) { this.chart2.destroy(); }
    const ctx1 = chart2.getContext('2d') as CanvasRenderingContext2D;
    ctx1.clearRect(0, 0, chart2.width, chart2.height);
    this.chart2 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: statisticsDataLongTerm.labels,
        datasets: [{
          data: statisticsDataLongTerm.data2,
          label: statisticsDataLongTerm.label2,
          borderColor: '#3e95cd',
          fill: false,
        }],
      },
    });
  }

  highlightStatistics(str:string): void {
    const objStatiscticsItems:HTMLElement[] = Array.from(document.querySelectorAll('.statistics__item'));
    objStatiscticsItems.forEach((element) => {
      if (element.classList.contains('statistics__item_active')) {
        element.classList.remove('statistics__item_active');
      }
    });
    switch (str) {
      case 'textbook':
        objStatiscticsItems[0].classList.add('statistics__item_active');
        break;
      case 'audiocall':
        objStatiscticsItems[1].classList.add('statistics__item_active');
        break;
      case 'sprint':
        objStatiscticsItems[2].classList.add('statistics__item_active');
        break;
      default:
        break;
    }
  }

  highlightStatisticsKind(str: string): void {
    const objStatiscticsKindsItems:HTMLElement[] = Array.from(document.querySelectorAll('.statistics__kind'));
    const statisticsList = document.querySelector('.statistics__list') as HTMLElement;
    objStatiscticsKindsItems.forEach((element) => {
      if (element.classList.contains('statistics__kind_active')) {
        element.classList.remove('statistics__kind_active');
      }
    });
    if (str === 'day') {
      objStatiscticsKindsItems[0].classList.add('statistics__kind_active');
      statisticsList.style.display = 'flex';
    }
    if (str === 'alltime') {
      objStatiscticsKindsItems[1].classList.add('statistics__kind_active');
      statisticsList.style.display = 'none';
    }
  }

  async renderDayStatistics(str:string): Promise<void> {
    this.statisticsDiv = this.myModuleContainer.querySelector('.statistics__div') as HTMLElement;
    const arr = await getSprintDataForRendering() as number[];
    console.log(arr);
    switch (str) {
      case 'textbook':
        this.statisticsDiv.innerHTML = StatisticsPageTextbookShortTeam.render();
        break;
      case 'audiocall':
        this.statisticsDiv.innerHTML = StatisticsPageAudiocallShortTeam.render();
        break;
      case 'sprint':
        this.statisticsDiv.innerHTML = StatisticsPageSprintShortTeam.render(arr);
        break;
      default:
        break;
    }
  }

  renderAlltimeStatistics(): void {
    this.statisticsDiv = this.myModuleContainer.querySelector('.statistics__div') as HTMLElement;
    this.statisticsDiv.innerHTML = StatisticsPageLongTerm.render();
    const chartCanvas1 = document.getElementById('chart1') as HTMLCanvasElement;
    this.renderBarChart(chartCanvas1);
    const chartCanvas2 = document.getElementById('chart2') as HTMLCanvasElement;
    this.renderLineChart(chartCanvas2);
  }
}
