import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import MainPage from '../pages/main';


export interface Components {
  header: typeof Header,
  content: typeof Content,
  footer: typeof Footer,
}
export interface Routes {
  main: typeof MainPage,
  default: typeof MainPage
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
