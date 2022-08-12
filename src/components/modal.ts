/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable class-methods-use-this */

import { apiPath, signIn } from '../api/api-path';
import { api } from '../api/api';

const formLogin = ` <form class="form-signin">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-email" class="form-control" name="user-email" placeholder="Email Address" required="" autofocus=""/>
  <input type="password" id="user-password" class="form-control" name="password" placeholder="пароль" required=""/>      
  
  <button class="btn"  id="button-new-user" type ="button"> Регистрация </button> 
  
<button class="btn" id="autoriztionBtn" type="submit">Войти</button>   
</form>`;

const formRegistration = ` <form class="form-signin">       
<h3 class="form-signin-heading">Введите свои данные</h3>

  <input type="text" id="user-name" class="form-control" name="user-name" placeholder="Имя пользователя" required="" autofocus=""/>
  <input type="text" id="user-email" class="form-control" name="user-email" placeholder="Email Address" required=""/>
  <input type="password" id="user-password" class="form-control" name="password" placeholder="пароль" required=""/>  

<button class="btn" id="autoriztionBtn" type="submit">Регистрация и вход</button>   
</form>`;

class Authorization {
//   name: string;

  //   email: string;

  //   password: string;

  // //   constructor() {
  // //     this.email = email;
  // //     this.password = this.password;
  // //     this.name = name;
  // //   }

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
    modalResultWrapper!.style.display = 'none';
    const wrapper = document.querySelector('.wrapper');
    const formSignIn = document.querySelector('.form-signin');
    const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
    const userPasswordInput = document.getElementById('user-password') as HTMLInputElement;
    const userNameInput = document.getElementById('user-name') as HTMLInputElement;

    if (authorizationBtn) {
      authorizationBtn.addEventListener('click', (_e: Event) => {
        wrapper!.innerHTML = formLogin;
        modalResultWrapper!.style.display = 'block';
        if (userEmailInput && userPasswordInput) {
          const userEmail = userEmailInput!.value;
          const userPassword = userPasswordInput!.value;
          authorization.signIn(userPassword, userEmail);
        }
        const buttonNewUser = document.getElementById('button-new-user') as HTMLButtonElement;
        if (buttonNewUser) {
          buttonNewUser.addEventListener('click', (_e: Event) => {
            wrapper!.innerHTML = formRegistration;
            if (userNameInput && userEmailInput && userPasswordInput) {
              const userEmail = userEmailInput!.value;
              const userPassword = userPasswordInput!.value;
              const userName = userNameInput!.value;
              authorization.newUser(userEmail, userPassword, userName);
              authorization.signIn(userPassword, userEmail);
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
