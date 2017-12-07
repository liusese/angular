import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.loginService.signOut('Sign Out!', false, '');
    this.router.navigate(['login']);
  }

}
