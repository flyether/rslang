/* eslint-disable @typescript-eslint/no-use-before-define */
import { api } from '../../api/api';
import { IObjStatisticStorage, IOptionalStatisticGame, IStatistic } from '../../types/types';
import StatisticsPage from '.';
import { support } from '../audiocall/utils/supporting-func';

let userId = '';
if (localStorage.getItem('user')) {
  userId = JSON.parse(localStorage.getItem('user')!).userId;
}

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

let objAudiocallDate: IOptionalStatisticGame = {
  date: dataNow(),
  percentOfRightAnswers: 999,
  newWords: 999,
  longestSeriesOfRightAnswers: 999,
};
const valueStatisticsAudiocall:IStatistic = {
  optional: {
    audiocall: objAudiocallDate,
  },
};

export async function staticGet() : Promise<void> {
  api.GetsStatistics(userId)
    .then((res) => {
      if (objAudiocallDate.date === res?.optional?.audiocall?.date) {
        objAudiocallDate = res?.optional?.audiocall as IOptionalStatisticGame;
        // console.log(res?.optional?.audiocall, 'res?.optional', objAudiocallDate, 'objAudiocallDate');
      } else { api.UpsertsNewStatistics(userId, valueStatisticsAudiocall); }
    });
}

console.log(objAudiocallDate, 'objAudiocallDate');
staticGet();
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
