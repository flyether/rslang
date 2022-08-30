/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import TextbookPage from '../pages/textbook';
import AboutTeamPage from '../pages/team';
import SprintGamePage from '../pages/sprint/index';
import AboutSprintGamePage from '../pages/aboutsprint';
import AudiocallGamePage from '../pages/audiocall/index';
import StatisticsPage from '../pages/statistics/index';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import MainPage from '../pages/main';
import { AudiocallGame } from '../pages/audiocall/main';

export interface Components {
  header: typeof Header,
  content: typeof Content,
  footer: typeof Footer,
}
export interface Routes {
  main: typeof MainPage,
  default: typeof MainPage,
  textbook: typeof TextbookPage,
  team: typeof AboutTeamPage,
  sprint: typeof SprintGamePage,
  aboutsprint: typeof AboutSprintGamePage,
  audiocall: typeof AudiocallGamePage,
  statistics: typeof StatisticsPage,
  audiocallgame: typeof AudiocallGame
}

export interface InitialObj {
  container: string,
  routes: Routes,
  components: Components
}

export interface CarType {
  name: string,
  color: string,
  id: number
}

export interface MenuItems {
  main: HTMLElement,
  textbook: HTMLElement,
  statistics: HTMLElement,
  audiocall: HTMLElement,
  sprint: HTMLElement,
  aboutsprint: HTMLElement,
  team: HTMLElement,
}

export interface IUserWord {
  id: string,
  wordId: string,
  difficulty: string,
}

export interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IWordGame {
  translate: string;
  id: string;
  word: string;
  image: string;
  audio: string;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserData {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IGroupPageObj {
  group: number;
  page: number;
}

export interface IOptionalUserWords {
  wordsLearned: string;
}
export interface IUserWords {
  difficulty: string;
  optional?: IOptionalUserWords; // надо потом написать верный тип для optional
}

export interface ISettings {
  wordsPerDay?: number;
  optional?: IWord; // надо потом написать верный
}

export interface IStorageAudiocall {
  group?: number;
  page?: number;
  level?: number;
  noRepeat?: string[];
  round?: number;
  arrayWrongWords?: string[];
  score?: number;
  textbook?: boolean;
  arrayLevel?: number[];
  words?: IWord[];
}

export interface ILearnedPages {
  unit: number;
  page: number;
}

export interface ITextbookPage {
  learnedPages: ILearnedPages[];
  isAuth: boolean;
  classname: string;
  wordlist: string;
  unitDifficultWords: number;
  render(): string;
  renderPages(unit: number): string;
  getCards(unit: number, page: number): void;
}
export interface IObjStatisticStorage {
  date?: string;
  percentOfRightAnswers: number;
  newWords?: number;
  longestSeriesOfRightAnswers: number;
  answer?: string[];
}
