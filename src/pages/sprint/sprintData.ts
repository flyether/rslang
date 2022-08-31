/* eslint-disable import/no-mutable-exports */
import { dataNow } from '../statistics/statisticsData';
import { SprintDataType } from '../../types/types';

export let sprintData: SprintDataType = {
  date: dataNow(),
  allAnswers: 0,
  rightAnswers: 0,
  percentOfRightAnswers: 0,
  newWords: 0,
  longestSeriesOfRightAnswers: 0,
  seriesOfRightAnswers: 0,
};

let sprintDataAnswers:boolean[] = [];

export function increaseSeriesOfRightAnswers(): void {
  sprintData.seriesOfRightAnswers += 1;
}
export function resetSeriesOfRightAnswers(): void {
  if (sprintData.longestSeriesOfRightAnswers < sprintData.seriesOfRightAnswers) {
    sprintData.longestSeriesOfRightAnswers = sprintData.seriesOfRightAnswers;
  }
  sprintData.seriesOfRightAnswers = 0;
}

export function getSprintData(): void {
  console.log('date', sprintData.date);
  console.log('storage', localStorage.getItem('$sprintData'));
  if (localStorage.getItem('$sprintData')) {
    if ((sprintData.date) === JSON.parse(localStorage.getItem('$sprintData')!).date) {
      console.log('this day');
      sprintData = JSON.parse(localStorage.getItem('$sprintData')!);
    } else {
      localStorage.setItem('$sprintData', JSON.stringify(sprintData));
      sprintDataAnswers = [];
    }
  } else {
    localStorage.setItem('$sprintData', JSON.stringify(sprintData));
  }
}

function countPercentOfRightAnswers(): number {
  const allAnswers = sprintDataAnswers.length;
  const trueAnswers = sprintDataAnswers.filter((item) => item).length;
  console.log(allAnswers, trueAnswers, Math.round((trueAnswers * 100) / allAnswers));
  return Math.round((trueAnswers * 100) / allAnswers);
}

export function setSprintData(): void {
  sprintData.seriesOfRightAnswers = 0;
  countPercentOfRightAnswers();
  console.log(sprintData);
  localStorage.setItem('$sprintData', JSON.stringify(sprintData));
}

export function setAnswerToSprintData(answer:boolean): void {
  sprintDataAnswers.push(answer);
  console.log(sprintDataAnswers);
}
