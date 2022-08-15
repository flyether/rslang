/* eslint-disable linebreak-style */

import { storage } from './storage';

export default function showUser() {
  const user = storage.user?.name;
  const userShow = `<div class="user-show"> ${user} <button class="exit_btn">Выйти</button> </div>`;
  const heder = document.querySelector('.header__auth') as HTMLElement;
  const buttonEnter = document.querySelector('.authorization') as HTMLElement;
  buttonEnter.remove();
  const UserPic = document.createElement('div');
  UserPic.classList.add('user-pic');
  UserPic.innerHTML = userShow;
  heder.append(UserPic);
}
