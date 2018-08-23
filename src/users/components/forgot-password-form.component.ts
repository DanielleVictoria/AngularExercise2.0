import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  //tyleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit, OnChanges {

  myModel = {
    username: "",
    email: "",
    mobilenum: ""
  }

  @Output()
  infoEmitter: EventEmitter<{username,email,mobile}> = new EventEmitter<{username,email,mobile}>();

  message: string = "Invalid Input";

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges () {

  }

  handleSubmit() {
    let username = this.myModel.username;
    let email = this.myModel.email;
    let mobile = this.myModel.mobilenum;
    this.infoEmitter.emit({username,email,mobile});
  }

}
