import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from './logger.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private LOGINURL = 'http://localhost:9526/1.0/user/login';
  isLogin: boolean;
  loginUser: any;
  loginMsg: string;

  constructor(private http: HttpClient, private logger: LoggerService, private router: Router) { }

  getLoginUser(account: string, pwd: string): any {
    const user = { 'account': account, 'password': pwd };
    const resp = this.http.post(this.LOGINURL, user);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Login User: ${data['name']}, welcome!`);
          this.loginUser = data;
          this.isLogin = true;
          this.loginMsg = '登录成功！';
          this.router.navigate(['main']);
        } else {
          this.logger.setLoggers('Login Failed!');
          this.loginUser = data;
          this.isLogin = false;
          this.loginMsg = '用户名或密码错误！';
        }
      },
      err => {
        console.log(err);
        this.logger.setLoggers('Login Service Failed!');
        this.isLogin = false;
        this.loginMsg = '登录服务暂时不可用！';
      }
    );
    return this.loginUser;
  }

  signOut(logger: string, isLogin: boolean, msg: string) {
    this.logger.setLoggers(logger);
    this.isLogin = isLogin;
    this.loginMsg = msg;
  }

}
