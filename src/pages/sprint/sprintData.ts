/* eslint-disable import/no-mutable-exports */
import { dataNow } from '../statistics/statisticsData';
import { IOptionalStatisticGame, IStatistic } from '../../types/types';
import { api } from '../../api/api';

let sprintDataAnswers:boolean[] = [];
let seriesOfRightAnswers = 0;
let userID = '';

export let sprintData: IOptionalStatisticGame = {
  date: dataNow(),
  newWords: 0,
  percentOfRightAnswers: 0,
  longestSeriesOfRightAnswers: 0,
  rightAnswers: 0,
  AllAnswersFromGame: 0,
};

export function increaseSeriesOfRightAnswers(): void {
  seriesOfRightAnswers += 1;
}
export function resetSeriesOfRightAnswers(): void {
  sprintData.longestSeriesOfRightAnswers = sprintData.longestSeriesOfRightAnswers || 0;
  if (seriesOfRightAnswers > sprintData.longestSeriesOfRightAnswers) {
    sprintData.longestSeriesOfRightAnswers = seriesOfRightAnswers;
  }
}

export async function setSprintData(userId: string): Promise<void> {
  const value = {
    learnedWords: 0,
    optional: { sprint: sprintData },
  };
  const stat = await api.UpsertsNewStatistics(userId, value);
  // console.log(stat);
}

export async function getSprintDataFromStatistics(userId: string) {
  try {
    userID = userId;
    console.log('date', sprintData.date);
    const res = await api.GetsStatistics(userId);
    // console.log(res);
    if (res?.optional?.sprint?.date === sprintData.date) {
      sprintData = res?.optional?.sprint as IOptionalStatisticGame;
      console.log(sprintData);
    }
  } catch (err) {
    setSprintData(userId);
  }
}

export function setAnswerToSprintData(answer:boolean): void {
  sprintDataAnswers.push(answer);
  console.log(sprintDataAnswers);
}

function countPercentOfRightAnswers(): void {
  sprintData.AllAnswersFromGame = sprintData.AllAnswersFromGame || 0;
  sprintData.rightAnswers = sprintData.rightAnswers || 0;
  sprintData.AllAnswersFromGame += sprintDataAnswers.length;
  sprintData.rightAnswers += sprintDataAnswers.filter((item) => item).length;
  sprintData.percentOfRightAnswers = Math.round((sprintData.rightAnswers * 100) / sprintData.AllAnswersFromGame);
}

export function setSprintDataToStatistics() {
  countPercentOfRightAnswers();
  setSprintData(userID);
  sprintDataAnswers = [];
}
