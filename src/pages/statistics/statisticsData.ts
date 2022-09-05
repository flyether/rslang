/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { api } from '../../api/api';
import {
  ILongStatisticsStore, IOptionalStatisticGame, IStatistic, IOptionalStatistic,
} from '../../types/types';

interface IstatisticsDataSprintShortTerm {
  newWords: number;
  percentOfRightAnswers: number;
  longestSeriesOfRightAnswers: number;
}

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
  return arr.map((elem) => elem.toLocaleDateString());
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

let textbookStatistic: IOptionalStatistic = {
  learnedWordss: 0,
  newWords: 0,
  percentOfRightAnswers: 0,
};

export const statisticsDataTextbookShortTerm = {
  newWords: textbookStatistic.newWords,
  learnedWords: textbookStatistic.learnedWordss,
  percentOfRightAnswers: textbookStatistic.percentOfRightAnswers,
};

let objAudiocallDate: IOptionalStatisticGame = {
  date: dataNow(),
  percentOfRightAnswers: 0,
  newWords: 0,
  newWordsSprint: 0,
  longestSeriesOfRightAnswers: 0,
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

function dada1push() {
  for (let i = 0; i < 5; i++) {
    if (longStatisticsStore.NewWords![longStatisticsStore.NewWords!.length - i]) { statisticsDataLongTerm.data1[i] = longStatisticsStore.NewWords![longStatisticsStore.NewWords!.length - i]; } else { statisticsDataLongTerm.data1[i] = 0; }
  }
  statisticsDataLongTerm.data1 = statisticsDataLongTerm.data1.reverse();
}

const valueStatisticsAudiocall:IStatistic = {
  optional: {
    games: objAudiocallDate,
    long: longStatisticsStore,
    textbook: textbookStatistic,
  },
};

export const statisticsDataAudiocallShortTerm = {
  newWords: objAudiocallDate.newWords,
  percentOfRightAnswers: objAudiocallDate.percentOfRightAnswers,
  longestSeriesOfRightAnswers: objAudiocallDate.longestSeriesOfRightAnswers,
};

export const statisticsDataSprintShortTerm: IstatisticsDataSprintShortTerm = {
  newWords: 0,
  percentOfRightAnswers: 0,
  longestSeriesOfRightAnswers: 0,
};
// учебник данные с сервера о изученных словах

export async function getUserWordsStat() : Promise<void> {
  return api.getAllUserWords(userId)
    .then((res) => {
      let countLernwords = 0;
      res!.forEach((element) => {
        if (element.difficulty === 'learned') {
          countLernwords++;
        }
        statisticsDataTextbookShortTerm.learnedWords = countLernwords - longStatisticsStore.learnedWords![longStatisticsStore.learnedWords!.length - 1];
      });
    }).catch((error) => {
      textbookStatistic = {
        learnedWordss: 0,
        newWords: 0,
        percentOfRightAnswers: 0,
      };
    });
}
// учебник и аудиокол данные с сервера

export async function staticGet() : Promise<void> {
  return api.GetsStatistics(userId)
    .then((res) => {
      if (objAudiocallDate.date === res?.optional?.games?.date) {
        if (res?.optional?.games?.percentOfRightAnswers) {
          statisticsDataAudiocallShortTerm.percentOfRightAnswers = res?.optional?.games?.percentOfRightAnswers;
          if (res?.optional?.games?.percentOfRightAnswersSprint) {
            statisticsDataTextbookShortTerm.percentOfRightAnswers = (res?.optional?.games?.percentOfRightAnswers + res?.optional?.games?.percentOfRightAnswersSprint) / 2;
          } else { statisticsDataTextbookShortTerm.percentOfRightAnswers = res?.optional?.games?.percentOfRightAnswers; }
        } else {
          statisticsDataAudiocallShortTerm.percentOfRightAnswers = 0;
          if (res?.optional?.games?.percentOfRightAnswersSprint) {
            statisticsDataTextbookShortTerm.percentOfRightAnswers = res?.optional?.games?.percentOfRightAnswersSprint;
          } else { statisticsDataTextbookShortTerm.percentOfRightAnswers = 0; }
        }
        if (res?.optional?.games?.newWords) {
          statisticsDataAudiocallShortTerm.newWords = res?.optional?.games?.newWords;
          statisticsDataTextbookShortTerm.newWords = res?.optional?.games?.newWords + (res?.optional?.games?.newWordsSprint || 0);
        } else { statisticsDataAudiocallShortTerm.newWords = 0; }
        if (res?.optional?.games?.longestSeriesOfRightAnswers) {
          statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = res?.optional?.games?.longestSeriesOfRightAnswers;
        } else { statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers = 0; }
      } else {
        if (res?.optional?.games?.newWords) {
          longStatisticsStore.NewWords?.push(res?.optional?.games?.newWords + (res?.optional?.games?.newWordsSprint || 0));
          statisticsDataLongTerm.data3 = longStatisticsStore.NewWords as number[];
          dada1push();
          if (res?.optional?.textbook?.learnedWordss) {
            longStatisticsStore.learnedWords?.push(res?.optional?.textbook.learnedWordss);
            statisticsDataLongTerm.data2 = longStatisticsStore.learnedWords as number[];
          } else { longStatisticsStore.learnedWords?.push(0); }
          if (res?.optional?.games?.date) {
            longStatisticsStore.date?.push(res?.optional?.games?.date);
            statisticsDataLongTerm.labels1 = longStatisticsStore.date as string[];
          } else { longStatisticsStore.date?.push('нет даты'); }
        } else { longStatisticsStore.NewWords?.push(0); }
        dada1push();
        if (res?.optional?.textbook?.learnedWordss) {
          longStatisticsStore.learnedWords?.push(res?.optional?.textbook.learnedWordss);
          statisticsDataLongTerm.data2 = longStatisticsStore.learnedWords as number[];
        } else { longStatisticsStore.learnedWords?.push(0); }
        if (res?.optional?.games?.date) {
          longStatisticsStore.date?.push(res?.optional?.games?.date);
          statisticsDataLongTerm.labels1 = longStatisticsStore.date as string[];
        } else { longStatisticsStore.date?.push('нет даты'); }

        api.UpsertsNewStatistics(userId, valueStatisticsAudiocall);
      }
    }).catch((error) => {
      objAudiocallDate = {
        percentOfRightAnswers: 0,
        newWords: 0,
        longestSeriesOfRightAnswers: 0,
        percentOfRightAnswersSprint: 0,
        longestSeriesOfRightAnswersSprint: 0,
        rightAnswersSprint: 0,
        AllAnswersFromGameSprint: 0,
      };
      textbookStatistic = {
        learnedWordss: 0,
        newWords: 0,
        percentOfRightAnswers: 0,
      };
    });
}

export async function staticGetSprint() : Promise<void> {
  return api.GetsStatistics(userId)
    .then((res) => {
      if (objAudiocallDate.date === res?.optional?.games?.date) {
        objAudiocallDate.percentOfRightAnswersSprint = res?.optional?.games?.percentOfRightAnswersSprint;
        objAudiocallDate.newWordsSprint = res?.optional?.games?.newWordsSprint;
        objAudiocallDate.longestSeriesOfRightAnswersSprint = res?.optional?.games?.longestSeriesOfRightAnswersSprint;
        objAudiocallDate.rightAnswersSprint = res?.optional?.games?.rightAnswersSprint;
        objAudiocallDate.AllAnswersFromGameSprint = res?.optional?.games?.AllAnswersFromGameSprint;
      } else { api.UpsertsNewStatistics(userId, valueStatisticsAudiocall); }
    }).catch((error) => {
      objAudiocallDate = {
        percentOfRightAnswers: 0,
        newWords: 0,
        longestSeriesOfRightAnswers: 0,
        percentOfRightAnswersSprint: 0,
        longestSeriesOfRightAnswersSprint: 0,
        rightAnswersSprint: 0,
        AllAnswersFromGameSprint: 0,

      };
      textbookStatistic = {
        learnedWordss: 0,
        newWords: 0,
        percentOfRightAnswers: 0,
      };
    });
}

export async function getSprintDataForRendering() {
  await staticGetSprint();
  return [objAudiocallDate.newWordsSprint, objAudiocallDate.percentOfRightAnswersSprint, objAudiocallDate.longestSeriesOfRightAnswersSprint];
}

export async function getSprintDataArray() {
  await staticGetSprint();
  return objAudiocallDate;
  /* return [objAudiocallDate.newWords, objAudiocallDate.longestSeriesOfRightAnswersSprint,
    objAudiocallDate.AllAnswersFromGameSprint, objAudiocallDate.rightAnswersSprint]; */
}

export async function getSprintDataForRenderingAudio() {
  await staticGet();
  return [statisticsDataAudiocallShortTerm.newWords, statisticsDataAudiocallShortTerm.percentOfRightAnswers, statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers];
}

export async function getSprintDataForRenderingTextbook() {
  await staticGet();
  await getUserWordsStat();
  return [statisticsDataTextbookShortTerm.newWords, statisticsDataTextbookShortTerm.learnedWords, statisticsDataTextbookShortTerm.percentOfRightAnswers];
}
