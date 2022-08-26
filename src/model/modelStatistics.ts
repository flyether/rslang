/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ModuleView } from '../view/viewStatistics';

export class ModuleModel {
  myModuleView!: ModuleView;

  statistics = 'textbook';

  statisticsKind = 'day';

  init(view: ModuleView): void {
    this.myModuleView = view;
  }

  switchStatictics(str:string): void {
    this.statistics = str;
    switch (str) {
      case 'textbook':
        this.myModuleView.highlightStatistics('textbook');
        break;
      case 'audiocall':
        this.myModuleView.highlightStatistics('audiocall');
        break;
      case 'sprint':
        this.myModuleView.highlightStatistics('sprint');
        break;
      default:
    }
    this.prepareStatistics();
  }

  switchStaticticsKind(str:string): void {
    this.statisticsKind = str;
    this.myModuleView.highlightStatisticsKind(str);
    this.prepareStatistics();
  }

  prepareStatistics(): void {
    if (this.statisticsKind === 'day') {
      switch (this.statistics) {
        case 'textbook':
          this.myModuleView.renderDayStatistics('textbook');
          break;
        case 'audiocall':
          this.myModuleView.renderDayStatistics('audiocall');
          break;
        case 'sprint':
          this.myModuleView.renderDayStatistics('sprint');
          break;
        default:
      }
    } else if (this.statisticsKind === 'alltime') {
      this.myModuleView.renderAlltimeStatistics();
    }
  }
}
