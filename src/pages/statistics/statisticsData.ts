/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { api } from '../../api/api';
import {
  ILongStatisticsStore, IOptionalStatisticGame, IStatistic,
} from '../../types/types';
import StatisticsPage from '.';
import { support } from '../audiocall/utils/supporting-func';

let userId = '';
if (localStorage.getItem('user')) {
  userId = JSON.parse(localStorage.getItem('user')!).userId;
}

function getArrOfLast5Days() {
  let now = Date.now();
  console.log(now, '16');
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
  labels1: getArrOfLast5Days(),
  label1: 'Количество новых слов за день',
  data1: [0],
  label2: 'Количество изученных слов',
  data2: [0],
  label3: 'Количество новых слов все время',
  data3: [0],
};

export const statisticsDataTextbookShortTerm = {
  newWords: 30,
  learnedWords: 10,
  percentOfRightAnswers: 50,
};

const objAudiocallDate: IOptionalStatisticGame = {
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

const longStatisticsStore: ILongStatisticsStore = {
  learnedWords: [0],
  NewWords: [0],
  date: ['0'],
};

for (let i = 0; i < 5; i++) {
  if (longStatisticsStore.NewWords![longStatisticsStore.learnedWords!.length - i]) { statisticsDataLongTerm.data1[i] = longStatisticsStore.NewWords![longStatisticsStore.learnedWords!.length - i]; } else { statisticsDataLongTerm.data1[i] = 0; }
}
statisticsDataLongTerm.data1 = statisticsDataLongTerm.data1.reverse();

const valueStatisticsAudiocall:IStatistic = {
  optional: {
    games: objAudiocallDate,
    long: longStatisticsStore,
  },
};

console.log(valueStatisticsAudiocall, 'valueStatisticsAudiocall');

export const statisticsDataAudiocallShortTerm = {
  newWords: objAudiocallDate.newWords,
  percentOfRightAnswers: objAudiocallDate.percentOfRightAnswers,
  longestSeriesOfRightAnswers: objAudiocallDate.longestSeriesOfRightAnswers,
};

export async function staticGet() : Promise<void> {
  api.GetsStatistics(userId)
    .then((res) => {
      if (objAudiocallDate.date === res?.optional?.games?.date) {
        objAudiocallDate.newWords = res?.optional?.games?.newWords;
        objAudiocallDate.longestSeriesOfRightAnswers = res?.optional?.games?.newWords;

        statisticsDataAudiocallShortTerm.percentOfRightAnswers = objAudiocallDate.percentOfRightAnswers;
        statisticsDataAudiocallShortTerm.newWords = objAudiocallDate.newWords;
        statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = objAudiocallDate.longestSeriesOfRightAnswers;
        // if (res?.optional?.games?.newWords) {
        //   longStatisticsStore.NewWords?.push(res?.optional?.games?.newWords);
        //   statisticsDataLongTerm.data3 = longStatisticsStore.NewWords as number[];
        // }
        // if (res?.optional?.textbook?.learnedWordss) {
        //   longStatisticsStore.learnedWords?.push(res?.optional?.textbook.learnedWordss);
        //   statisticsDataLongTerm.data2 = longStatisticsStore.learnedWords as number[];
        // }
        // if (res?.optional?.games?.date) {
        //   longStatisticsStore.date?.push(res?.optional?.games?.date);
        //   statisticsDataLongTerm.labels1 = longStatisticsStore.date as string[];
        // }
      } else {
        if (res?.optional?.games?.newWords) {
          longStatisticsStore.NewWords?.push(res?.optional?.games?.newWords);
          statisticsDataLongTerm.data3 = longStatisticsStore.NewWords as number[];
        }
        if (res?.optional?.textbook?.learnedWordss) {
          longStatisticsStore.learnedWords?.push(res?.optional?.textbook.learnedWordss);
          statisticsDataLongTerm.data2 = longStatisticsStore.learnedWords as number[];
        }
        if (res?.optional?.games?.date) {
          longStatisticsStore.date?.push(res?.optional?.games?.date);
          statisticsDataLongTerm.labels1 = longStatisticsStore.date as string[];
        }

        api.UpsertsNewStatistics(userId, valueStatisticsAudiocall);
      }
    });
}

export const statisticsDataSprintShortTerm = {
  newWords: 100,
  percentOfRightAnswers: 50,
  longestSeriesOfRightAnswers: 15,
};
