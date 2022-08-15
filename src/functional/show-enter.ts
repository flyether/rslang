/* eslint-disable linebreak-style */

import { storage } from './storage';

export default function showBtnEnter() {
  const user = storage.user?.name;
  const userShow = document.querySelector('.user-show') as HTMLElement;
  const heder = document.querySelector('.header__auth') as HTMLElement;
  const buttonExit = document.querySelector('.exit_btn') as HTMLElement;
  buttonExit.remove();
  userShow.remove();
  const buttonEnter = document.createElement('button');
  buttonEnter.classList.add('authorization');
  buttonEnter.innerHTML = 'Войти';
  heder.append(buttonEnter);
}
