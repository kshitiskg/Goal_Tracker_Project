import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { login } from 'src/app/core/model/classes/login';
import { user } from 'src/app/core/model/classes/user';
import { GlobalService } from 'src/app/core/services/global.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isActiveLogin = false;
  isActiveSignUp = false;

  createUserObj:user= new user;

  loginObj:login=new login;

  constructor(private userSrv:UserService,private loginSrv:LoginService,private router:Router){}

  ngOnInit() {}

  cambiar_login() {
    this.isActiveLogin = true;
    this.isActiveSignUp = false;

    setTimeout(() => {
      (<HTMLElement> document.querySelector('.cont_forms')).className = 'cont_forms cont_forms_active_login';
       
      // document.querySelector('.cont_form_login')?.computedStyleMap.display = 'block';
      // document.querySelector('.cont_form_sign_up').style.opacity = '0';
      (<HTMLElement>document.querySelector('.cont_form_login')).style.display = 'block';
      (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.opacity = '0';
      
    }, 0);

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_form_login')).style.opacity = '1';
    }, 400);

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.display = 'none';
    }, 200);

      this.loginSrv.login(this.loginObj).subscribe((res:any)=>{
        if(res.result){
          localStorage.setItem('login',JSON.stringify(this.loginObj));
          this.router.navigateByUrl('/home')
        }
      })
  }

  cambiar_sign_up() {
    this.isActiveLogin = false;
    this.isActiveSignUp = true;

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_forms')).className =
        'cont_forms cont_forms_active_sign_up';
        (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.display = 'block';
        (<HTMLElement>document.querySelector('.cont_form_login')).style.opacity = '0';
    }, 0);

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.opacity = '1';
    }, 100);

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_form_login')).style.display = 'none';
    }, 400);

    this.userSrv.createNewUser(this.createUserObj).subscribe((res:any)=>{
     
      if(res.result){
       alert("User Created successfully...! please login Your account...")
       }
       else{
        alert(res.message)
       }
     })
  }

  
  ocultar_login_sign_up() {
    this.isActiveLogin = false;
    this.isActiveSignUp = false;

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_forms')).className = 'cont_forms';
      (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.opacity = '0';
      (<HTMLElement>document.querySelector('.cont_form_login')).style.opacity = '0';
    }, 0);

    setTimeout(() => {
      (<HTMLElement>document.querySelector('.cont_form_sign_up')).style.display = 'none';
      (<HTMLElement>document.querySelector('.cont_form_login')).style.display = 'none';
    }, 500);
  }
}
