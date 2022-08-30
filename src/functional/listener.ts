/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */

import { api } from '../api/api';
import { formLogin, formRegistration } from '../components/modal';
import showUser from './show-user';
import { storage } from './storage';

class Listener {
  open(): void {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('burger')) {
        const burgerMenu = document.querySelector('.wrapper-burger');
        burgerMenu?.classList.add('show');
      }
      if ((e.target as HTMLElement).classList.contains('wrapper-burger')) {
        const burgerMenu = document.querySelector('.wrapper-burger');
        burgerMenu?.classList.remove('show');
      }
      if ((e.target as HTMLElement).classList.contains('authorization')) {
        const btnCloseModal = document.getElementById('btn-close');
        const overlay = document.getElementById('overlay');
        const modalResultWrapper = document.getElementById('modal-result-wrapper');
        const wrapper = document.querySelector('.wrapper') as HTMLElement;

        wrapper!.innerHTML = formLogin;
        modalResultWrapper!.style.display = 'block';
        const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
        const userPasswordInput = document.getElementById('user-password') as HTMLInputElement;
        if (userEmailInput && userPasswordInput) {
          const authForm = document.getElementById('auth') as HTMLButtonElement;
          if (authForm) {
            authForm.addEventListener('submit', (e: Event) => {
              const errForm = document.querySelector('.form-signin-error') as HTMLElement;
              errForm.innerHTML = '';
              const userEmail = userEmailInput!.value;
              const userPassword = userPasswordInput!.value;
              e.preventDefault();
              api.userSignIn(userEmail, userPassword)
                .then((value) => {
                  storage.user = value;
                  localStorage.setItem('user', JSON.stringify(value));
                  showUser(false);
                  closeModal();
                }).catch((err) => {
                  errForm.innerHTML = 'Пользователь не найден, проверьте свои данные или зарегистрируйтесь';
                  console.log(err);
                });
            });
          }
        }
        const buttonNewUser = document.getElementById('button-new-user') as HTMLButtonElement;
        if (buttonNewUser) {
          buttonNewUser.addEventListener('click', (_e: Event) => {
            wrapper!.innerHTML = formRegistration;
            const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
            const userPasswordInput = document.getElementById('user-password') as HTMLInputElement;
            const userNameInput = document.getElementById('user-name') as HTMLInputElement;
            if (userNameInput && userEmailInput && userPasswordInput) {
              const registrationForm = document.getElementById('reg') as HTMLButtonElement;
              if (registrationForm) {
                registrationForm.addEventListener('submit', (e: Event) => {
                  const errForm = document.querySelector('.form-reg-error') as HTMLElement;
                  errForm.innerHTML = '';
                  const userEmail = userEmailInput!.value;
                  const userPassword = userPasswordInput!.value;
                  const userName = userNameInput!.value;
                  e.preventDefault();
                  api.createNewUser(userName, userEmail, userPassword)
                    .then(() => {
                      api.userSignIn(userEmail, userPassword)
                        .then((value) => {
                          storage.user = value;
                          localStorage.setItem('user', JSON.stringify(value));
                          showUser(false);
                          closeModal();
                        });
                    })
                    .catch((err) => {
                      errForm.innerHTML = 'Возможно этот e-mail уже занят, попробуйте другой';
                      console.log(err);
                    });
                });
              }
            }
          });
        }

        const closeModal = () => {
          modalResultWrapper!.style.display = 'none';
        };
        overlay!.addEventListener('click', closeModal);
        btnCloseModal!.addEventListener('click', closeModal);
      }

      if ((e.target as HTMLElement).classList.contains('exit_btn')) {
        localStorage.removeItem('user');
        storage.user = {
          message: '', token: '', refreshToken: '', userId: '', name: '',
        };
        showUser(false);
      }
    });
  }
}

const listener = new Listener();
export default listener;
