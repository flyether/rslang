/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */

import Header from '../components/header';
import { storage } from './storage';

export default function showUser(ret:boolean) :string | undefined {
  let className = 'authorization';
  let context = 'Войти';
  if (storage.user?.token != '') {
    context = 'Выйти';
    className = 'exit_btn';
  }
  const html = `<div class="user-show"> ${storage.user?.name} <button class=${className}>${context}</button> </div>`;

  const header = document.querySelector('.header__auth') as HTMLElement;
  if (ret) {
    return html;
  }
  Header.render();
  header.innerHTML = html;
}
