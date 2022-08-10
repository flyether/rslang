/* eslint-disable linebreak-style */

const htmlAutorization = /* html */ `<div class="wrapper">
<form class="form-signin">       
  <h2 class="form-signin-heading">Please login</h2>
  <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
  <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
  <label class="checkbox">
    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
  </label>
  <button class="btn" id="autoriztionBtn" type="submit">Login</button>   
</form>
</div> `;
class Renderer {
  divAutorization: HTMLElement;

  constructor() {
    this.divAutorization = document.querySelector('.autoriztion') as HTMLElement;
  }

  renderView(): void {
    this.divAutorization.innerHTML = htmlAutorization;
  }

  // async autoriztion(): Promise<void> {
  //   const autoriztionBtn = document.querySelector('#autoriztionBtn') as HTMLButtonElement;
  //   const form = document.querySelector('.form-signin') as HTMLFormElement;
  // }
}
export const render = new Renderer();
