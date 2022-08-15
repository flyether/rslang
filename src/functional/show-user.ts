/* eslint-disable linebreak-style */

import { storage } from './storage';

export default function showUser() {
  if (storage.user?.token !== '') {
    const user = storage.user?.name;
    const userShow = `<div class="user-show"> ${user} <button class="exit_btn">Выйти</button> </div>`;
    const header = document.querySelector('.header__auth') as HTMLElement;
    const buttonEnter = document.querySelector('.authorization') as HTMLElement;
    if (userShow && buttonEnter) {
      buttonEnter.remove();
      const UserPic = document.createElement('div');
      UserPic.classList.add('user-pic');
      UserPic.innerHTML = userShow;
      header.append(UserPic);
    }
  } else {
    const userShow = document.querySelector('.user-show') as HTMLElement;
    const header = document.querySelector('.header__auth') as HTMLElement;
    const buttonExit = document.querySelector('.exit_btn') as HTMLElement;
    if (userShow && buttonExit) {
      userShow.remove();
      buttonExit.remove();
      const buttonEnter = document.createElement('button');
      buttonEnter.classList.add('authorization');
      buttonEnter.innerHTML = 'Войти';
      header.append(buttonEnter);
    }
  }
}
