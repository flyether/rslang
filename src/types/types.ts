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
