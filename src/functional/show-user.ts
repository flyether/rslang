/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */

import { storage } from './storage';

<<<<<<< HEAD
const user = storage.name;
const userShow = `<div class="user-show"> ${user} </div>`;
=======
export default function showUser(ret:boolean) :string | undefined {
  let className = 'authorization';
  let context = 'Войти';
  if (storage.user?.token != '') {
    context = 'Выйти';
    className = 'exit_btn';
  }
  const html = `<div class="user-show"> ${storage.user?.name} <button class=${className}>${context}</button> </div>`;
>>>>>>> develop

  const header = document.querySelector('.header__auth') as HTMLElement;
  if (ret) {
    return html;
  }
  header.innerHTML = html;
}
