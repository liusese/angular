import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public loginService: LoginService,
    private fb: FormBuilder) {
    // this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
      checkBox: ''
    });
  }

  onSubmit() {
    const formModel = this.loginForm.value;
    console.log(formModel.account, formModel.password, formModel.checkBox);
    this.loginService.getLoginUser(formModel.account, formModel.password);
  }

}
