import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
selector: 'loginform',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login.style.css']

})
export class LoginFormComponent implements OnInit, OnChanges {

  @Output()
  loginAttemptEmitter: EventEmitter<{username : string,password : string}> = new EventEmitter();

  @Output()
  forgotPasswordEmitter: EventEmitter<any> = new EventEmitter();

  // for forms
  modelUser = {
    username: "",
    password: "",
  };

  constructor() {
  }

  ngOnInit() {
   
  }

  ngOnChanges () {

  }

  handleLoginAttempt(): void {
    let username = this.modelUser.username;
    let password = this.modelUser.password;
    this.loginAttemptEmitter.emit({username,password});
  }

  handleForgotPassword() {
    this.forgotPasswordEmitter.emit();
  }
}
