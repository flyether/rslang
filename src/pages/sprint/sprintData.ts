import { checkUserAuthorization } from '../../utils/func';
import { api } from '../../api/api';
import {
  IObjStatisticStorage, IOptionalStatisticGame, IStatistic, IUserWord,
} from '../../types/types';
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
  percentOfRightAnswers: 0,
  newWords: 0,
  longestSeriesOfRightAnswers: 0,
  newWordsSprint: 0,
  percentOfRightAnswersSprint: 0,
  longestSeriesOfRightAnswersSprint: 0,
  rightAnswersSprint: 0,
  AllAnswersFromGameSprint: 0,
};

const valueStatisticsAudiocall = {
  optional: {
    games: objSprintDate,
    long: {
      learnedWords: [0],
      NewWords: [0],
      date: ['0'],
    },
  },
};

export const sprintData: SprintData = {
  userID: 'no',
  longestSeries: 0,
  seriesArr: [],
  allAnswers: [],
  allAnswersId: [],
  newWords: [],
  amountOfNewWords: 0,
  amountOfAllAnswers: 0,
  amountOfRightAnswers: 0,
  updateLongestSeries():void {
    if (this.seriesArr.length > this.longestSeries) {
      this.longestSeries = this.seriesArr.length;
    }
    this.seriesArr = [];
  },
  countAnswers():void {
    this.amountOfAllAnswers = this.allAnswers.length;
    this.amountOfRightAnswers = this.allAnswers.filter((item) => item).length;
  },
  async writeSprintDataToStatistics(): Promise<void> {
    this.userID = checkUserAuthorization() as string;
    if (this.userID !== 'no') {
      await this.checkLearnedWordsInAnswers();
      // проанализировать ответы
      this.updateLongestSeries();
      this.countAnswers();
      const obj = await getSprintDataArray() as IOptionalStatisticGame;
      this.updateobjSprintDate(obj);
      this.setDataToStatistics();
      // write then clean
      this.cleanData();
    } else {
      this.cleanData();
    }
  },
  async checkLearnedWordsInAnswers(): Promise<void> {
    const res = await api.getAllUserWords(this.userID) as IUserWord[];
  },
  cleanData() {
    this.longestSeries = 0;
    this.seriesArr = [];
    this.allAnswers = [];
    this.allAnswersId = [];
    this.newWords = [];
    this.amountOfNewWords = 0;
    this.amountOfAllAnswers = 0;
    this.amountOfRightAnswers = 0;
  },
  updateobjSprintDate(obj: IOptionalStatisticGame): void {
    console.log(obj);
    objSprintDate.newWords = obj.newWords;
    objSprintDate.longestSeriesOfRightAnswers = obj.longestSeriesOfRightAnswers;
    objSprintDate.percentOfRightAnswers = obj.percentOfRightAnswers;

    objSprintDate.newWordsSprint = obj.newWordsSprint;
    objSprintDate.longestSeriesOfRightAnswersSprint = (obj.longestSeriesOfRightAnswersSprint! > this.longestSeries)
      ? obj.longestSeriesOfRightAnswersSprint : this.longestSeries;

    objSprintDate.AllAnswersFromGameSprint = obj.AllAnswersFromGameSprint! + this.amountOfAllAnswers;

    objSprintDate.rightAnswersSprint = obj.rightAnswersSprint! + this.amountOfRightAnswers;

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
  allAnswersId: string[],
  newWords: string[],
  amountOfNewWords: number,
  amountOfAllAnswers: number,
  amountOfRightAnswers: number,
  updateLongestSeries():void,
  countAnswers(): void,
  writeSprintDataToStatistics(): void,
  checkLearnedWordsInAnswers(): Promise<void>,
  cleanData(): void,
  updateobjSprintDate(obj: IOptionalStatisticGame): void,
  setDataToStatistics(): Promise<void>,
}
