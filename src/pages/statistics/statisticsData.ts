/* eslint-disable @typescript-eslint/no-use-before-define */
import { IObjStatisticStorage } from 'types/types';
import StatisticsPage from '.';
import { support } from '../audiocall/utils/supporting-func';

function getArrOfLast5Days() {
  let now = Date.now();
  const oneDay = 86400000;
  const arr = [];
  for (let i = 0; i < 5; i += 1) {
    arr.push(new Date(now));
    now -= oneDay;
  }
  return arr.map((elem) => elem.toLocaleDateString()).reverse();
}

function dataNow(): string {
  const t = new Date();
  const date = (`0${t.getDate()}`).slice(-2);
  const month = (`0${t.getMonth() + 1}`).slice(-2);
  const year = t.getFullYear();
  const dateCurr = `${date}/${month}/${year}`;
  return dateCurr;
}

export const statisticsDataLongTerm = {
  labels: getArrOfLast5Days(),
  label1: 'Количество новых слов за день',
  data1: [13, 19, 32, 2, 11],
  label2: 'Количество изученных слов',
  data2: [130, 150, 175, 200, 215],
};

export const statisticsDataTextbookShortTerm = {
  newWords: 30,
  learnedWords: 10,
  percentOfRightAnswers: 50,
};

let objAudiocallDate: IObjStatisticStorage = {
  date: dataNow(),
  percentOfRightAnswers: 0,
  newWords: 0,
  longestSeriesOfRightAnswers: 0,
};

export function getStatisticsDataAudiocallShortTerm(): void {
  if (localStorage.getItem('dataAudiocall')) {
    if ((objAudiocallDate.date) === JSON.parse(localStorage.getItem('dataAudiocall')!).date) {
      objAudiocallDate = JSON.parse(localStorage.getItem('dataAudiocall')!);
    } else {
      localStorage.setItem('dataAudiocall', JSON.stringify(objAudiocallDate));
    }
  }
}

getStatisticsDataAudiocallShortTerm();
// StatisticsPage.render();
export const statisticsDataAudiocallShortTerm = {
  newWords: objAudiocallDate.newWords,
  percentOfRightAnswers: objAudiocallDate.percentOfRightAnswers,
  longestSeriesOfRightAnswers: objAudiocallDate.longestSeriesOfRightAnswers,
};

export const statisticsDataSprintShortTerm = {
  newWords: 100,
  percentOfRightAnswers: 50,
  longestSeriesOfRightAnswers: 15,
};
