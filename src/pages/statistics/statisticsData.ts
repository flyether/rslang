/* eslint-disable @typescript-eslint/no-use-before-define */
import { IObjStatisticStorage } from 'types/types';
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
const dateCurrent: string = dataNow();

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
  date: 'dateCurrGame',
  percentOfRightAnswers: 0,
  newWords: 0,
  longestSeriesOfRightAnswers: 0,
};

if (localStorage.getItem('dataAudiocall')) {
  objAudiocallDate = JSON.parse(localStorage.getItem('dataAudiocall')!);
}

export const statisticsDataAudiocallShortTerm = {
  newWords: 0,
  percentOfRightAnswers: 0,
  longestSeriesOfRightAnswers: 0,
};

getstatisticsDataAudiocallShortTerm();

function getstatisticsDataAudiocallShortTerm(): void {
  if ((dateCurrent as string) !== (objAudiocallDate.date)) {
    statisticsDataAudiocallShortTerm.newWords = 0;
    statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = 0;
    statisticsDataAudiocallShortTerm.percentOfRightAnswers = 0;
    objAudiocallDate = {
      date: 'dateCurrGame',
      percentOfRightAnswers: 0,
      newWords: 0,
      longestSeriesOfRightAnswers: 0,
    };
    localStorage.setItem('dataAudiocall', JSON.stringify(objAudiocallDate));
  } else {
    statisticsDataAudiocallShortTerm.newWords += objAudiocallDate.newWords;
    statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers += objAudiocallDate.longestSeriesOfRightAnswers;
    statisticsDataAudiocallShortTerm.percentOfRightAnswers += objAudiocallDate.percentOfRightAnswers;
  }
}

export const statisticsDataSprintShortTerm = {
  newWords: 100,
  percentOfRightAnswers: 50,
  longestSeriesOfRightAnswers: 15,
};
