/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */

import { api } from '../api/api';
import { formLogin, formRegistration } from '../components/modal';
import { storage } from './storage';

class Listener {
  open(): void {
    document.addEventListener('click', (e) => {
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
              const userEmail = userEmailInput!.value;
              const userPassword = userPasswordInput!.value;
              e.preventDefault();
              api.userSignIn(userEmail, userPassword)
                .then(() => {
                  closeModal();
                }).catch((err) => {
                  console.log(err);
                });
              closeModal();
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
                  const userEmail = userEmailInput!.value;
                  const userPassword = userPasswordInput!.value;
                  const userName = userNameInput!.value;

                  e.preventDefault();
                  api.createNewUser(userName, userEmail, userPassword)
                    .then(() => {
                      api.userSignIn(userEmail, userPassword);
                      closeModal();
                    }).catch((err) => {
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
    });
  }
}

const listener = new Listener();
export default listener;
