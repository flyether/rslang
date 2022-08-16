/* eslint-disable import/no-cycle */
import TextbookPage from '../pages/textbook';
import AboutTeamPage from '../pages/team';
import SprintGamePage from '../pages/sprint/index';
import AudiocallGamePage from '../pages/audiocall/index';
import StatisticsPage from '../pages/statistics/index';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import MainPage from '../pages/main';
import AudiocallGame from '../pages/audiocall/main';

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
  audiocall: typeof AudiocallGamePage,
  statistics: typeof StatisticsPage,
  audiocallAction: typeof AudiocallGame
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
  team: HTMLElement,
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
