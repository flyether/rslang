/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import { api } from '../api/api';
import { storage } from './storage';

const user = storage.name;
const userShow = `<div class="user-show"> ${user} </div>`;

export default function showUser() {
  const heder = document.querySelector('.header__auth') as HTMLElement;
  const buttonEnter = document.querySelector('.authorization') as HTMLElement;
  buttonEnter.remove();
  const UserPic = document.createElement('div');
  UserPic.classList.add('user-pic');
  UserPic.innerHTML = userShow;
  heder.append(UserPic);
}
