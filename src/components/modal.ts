/* eslint-disable linebreak-style */
/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable class-methods-use-this */

import { apiPath, signIn } from '../api/api-path';
import { api } from '../api/api';

const formLogin = ` <form class="form-signin" id="auth">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required autofocus=""/>
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required/>      
  
  <button class="btn"  id="button-new-user" type ="button"> Регистрация </button> 
  
<button class="btn" id="autoriztionBtn" type="submit">Войти</button>   
</form>`;

const formRegistration = ` <form class="form-signin" id="reg">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" autofocus=""/>
  <input type="email" id="user-email" class="form-control" name="email" placeholder="Email Address" required />
  <input type="password" minlength="8" id="user-password" class="form-control" name="password" placeholder="пароль" required />  

<button class="btn" id="registration_btn" type="submit">Регистрация и вход</button>   
</form>`;

class Authorization {
  newUser(name:string, password:string, email:string): void {
    api.createNewUser(name, email, password);
  }

  signIn(password:string, email:string): void {
    api.userSignIn(email, password);
  }
}

const authorization = new Authorization();

const modalAuthorization = {
  open(): void {
    const authorizationBtn = document.querySelector('.authorization');
    const btnCloseModal = document.getElementById('btn-close');
    const overlay = document.getElementById('overlay');
    const modalResultWrapper = document.getElementById('modal-result-wrapper');
    const wrapper = document.querySelector('.wrapper') as HTMLElement;

    if (authorizationBtn) {
      authorizationBtn.addEventListener('click', (_e: Event) => {
        console.log('вот тут работает модальное окно1');
        wrapper!.innerHTML = formLogin;
        modalResultWrapper!.style.display = 'block';
        const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
        const userPasswordInput = document.getElementById('user-password') as HTMLInputElement;
        const userNameInput = document.getElementById('user-name') as HTMLInputElement;
        if (userEmailInput && userPasswordInput) {
          const registratiForm = document.getElementById('auth') as HTMLButtonElement;
          if (registratiForm) {
            registratiForm.addEventListener('submit', (e: Event) => {
              const userEmail = userEmailInput!.value;
              const userPassword = userPasswordInput!.value;
              e.preventDefault();
              authorization.signIn(userPassword, userEmail);
            });
          }
        }
        const buttonNewUser = document.getElementById('button-new-user') as HTMLButtonElement;
        if (buttonNewUser) {
          buttonNewUser.addEventListener('click', (_e: Event) => {
            console.log(']thz до иннера');
            wrapper!.innerHTML = formRegistration;
            const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
            const userPasswordInput = document.getElementById('user-password') as HTMLInputElement;
            const userNameInput = document.getElementById('user-name') as HTMLInputElement;
            // eslint-disable-next-line no-debugger
            // debugger;
            if (userNameInput && userEmailInput && userPasswordInput) {
              const registratiForm = document.getElementById('reg') as HTMLButtonElement;
              if (registratiForm) {
                registratiForm.addEventListener('submit', (e: Event) => {
                  const userEmail = userEmailInput!.value;
                  const userPassword = userPasswordInput!.value;
                  const userName = userNameInput!.value;
                  console.log(userName, userEmail, userPassword, 'userName, userEmail, userPassword ');
                  e.preventDefault();
                  authorization.newUser(userName, userPassword, userEmail);
                });
              }
            }
          });
        }
      });
    }

    const closeModal = () => {
      modalResultWrapper!.style.display = 'none';
    };
    overlay!.addEventListener('click', closeModal);
    btnCloseModal!.addEventListener('click', closeModal);
  },
};

export default modalAuthorization;
