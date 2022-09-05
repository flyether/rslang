import { checkUserAuthorization } from '../../utils/func';
import { api } from '../../api/api';
import { IObjStatisticStorage, IOptionalStatisticGame, IStatistic } from '../../types/types';
import { getSprintDataArray } from '../statistics/statisticsData';

function dataNow(): string {
  const t = new Date();
  const date = (`0${t.getDate()}`).slice(-2);
  const month = (`0${t.getMonth() + 1}`).slice(-2);
  const year = t.getFullYear();
  const dateCurr = `${date}/${month}/${year}`;
  return dateCurr;
}

export const objSprintDate:IOptionalStatisticGame = {
  date: dataNow(),
  newWords: 0,
  percentOfRightAnswersSprint: 0,
  longestSeriesOfRightAnswersSprint: 0,
  rightAnswersSprint: 0,
  AllAnswersFromGameSprint: 0,
};

const valueStatisticsAudiocall = {
  optional: {
    games: objSprintDate,
  },
};

export const sprintData: SprintData = {
  userID: 'no',
  longestSeries: 0,
  seriesArr: [],
  allAnswers: [],
  rightAnswers: [],
  newWords: [],
  amountOfNewWords: 0,
  amountOfAllAnswers: 0,
  amountOfRightAnswers: 0,
  updateLongestSeries() {
    if (this.seriesArr.length > this.longestSeries) {
      this.longestSeries = this.seriesArr.length;
    }
    console.log(this.longestSeries);
    this.seriesArr = [];
  },
  countAnswers() {
    this.amountOfAllAnswers = this.allAnswers.length;
    this.amountOfRightAnswers = this.allAnswers.filter((item) => item).length;
  },
  async writeSprintDataToStatistics() {
    console.log(this.rightAnswers);
    this.userID = checkUserAuthorization() as string;
    if (this.userID !== 'no') {
      // проанализировать правильные ответы
      this.updateLongestSeries();
      this.countAnswers();
      const arr = await getSprintDataArray() as number[];
      this.updateobjSprintDate(arr);
      this.setDataToStatistics();
      // write then clean
      this.cleanData();
    } else {
      this.cleanData();
    }
  },
  cleanData() {
    this.longestSeries = 0;
    this.seriesArr = [];
    this.allAnswers = [];
    this.rightAnswers = [];
    this.newWords = [];
    this.amountOfNewWords = 0;
    this.amountOfAllAnswers = 0;
    this.amountOfRightAnswers = 0;
  },
  updateobjSprintDate(arr: number[]): void {
    // console.log(arr);
    // objSprintDate.newWordsSprint = arr[0] + word
    objSprintDate.longestSeriesOfRightAnswersSprint = (arr[1] > this.longestSeries)
      ? arr[1] : this.longestSeries;

    objSprintDate.AllAnswersFromGameSprint = arr[2] + this.amountOfAllAnswers;

    objSprintDate.rightAnswersSprint = arr[3] + this.amountOfRightAnswers;

    objSprintDate.percentOfRightAnswersSprint = Math.round((objSprintDate.rightAnswersSprint * 100) / objSprintDate.AllAnswersFromGameSprint);
  },
  async setDataToStatistics(): Promise<void> {
    api.UpsertsNewStatistics(sprintData.userID, valueStatisticsAudiocall)
      .then((res) => console.log('update', res));
  },
};

interface SprintData {
  userID: string,
  longestSeries:number,
  seriesArr: number[],
  allAnswers: boolean[],
  rightAnswers: string[],
  newWords: string[],
  amountOfNewWords: number,
  amountOfAllAnswers: number,
  amountOfRightAnswers: number,
  updateLongestSeries():void,
  countAnswers(): void,
  writeSprintDataToStatistics(): void,
  cleanData(): void,
  updateobjSprintDate(arr: number[]): void,
  setDataToStatistics(): Promise<void>,
}
