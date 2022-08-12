/* eslint-disable linebreak-style */

import { storage } from './storage';

const userShow = `<div class="user-show"> ${storage.user!.name}</div>`;

export default function showUser() {
  const heder = document.querySelector('.header__auth') as HTMLElement;
  const buttonEnter = document.querySelector('.authorization') as HTMLElement;
  buttonEnter.remove();
  const UserPic = document.createElement('div');
  UserPic.classList.add('user-pic');
  UserPic.innerHTML = userShow;
  heder.append(UserPic);
}
