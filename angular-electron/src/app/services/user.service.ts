import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from './login.service';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {

  private GETALLUSERSURL = 'http://localhost:9526/1.0/user/all';
  private GETUSERDETAILSURL = 'http://localhost:9526/1.0/user/';
  private UPDATEUSERURL = 'http://localhost:9526/1.0/user/update';

  private GETALLUSERTYPESURL = 'http://localhost:9526/1.0/usertype/all';

  userList: any;
  user: any;
  userTypeList: any;

  constructor(private http: HttpClient, private logger: LoggerService, private loginService: LoginService) { }

  getAllUsers() {
    const resp = this.http.get(this.GETALLUSERSURL);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Get Users Success, ${data['length']} count!`);
          this.userList = data;
        } else {
          this.logger.setLoggers('Get Users Failed!');
          this.userList = data;
        }
      },
      err => {
        this.logger.setLoggers('Get Users Service Failed!');
      }
    );
  }

  getUserDetails(userId) {
    const url = `${this.GETUSERDETAILSURL}${userId}`;
    console.log(url);
    const resp = this.http.get(url);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Get User ${data['name']} Success!`);
          this.user = data;
        } else {
          this.logger.setLoggers('Get User Failed!');
          this.user = data;
        }
      },
      err => {
        this.logger.setLoggers('Get Users Service Failed!');
      }
    );
  }

  updateUser(userId: string, name: string, phone: string, type: string, typeName: string) {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'text/html' })
    // };

    console.log(userId, name, phone, type, typeName);
    const newUser = { 'id': userId, 'name': name, 'phone': phone, 'type': type };
    const resp = this.http.put(this.UPDATEUSERURL, newUser);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        this.logger.setLoggers('User Update Success!');
        this.getAllUsers();
        if (userId === this.loginService.loginUser['id']) {
          this.loginService.loginUser['type'] = typeName;
        }
      },
      err => {
        if (200 === err.status) { // update返回格式不是json的简单处理
          this.logger.setLoggers('User Update Success!');
          this.getAllUsers();
          if (userId === this.loginService.loginUser['id']) {
            this.loginService.loginUser['type'] = typeName;
          }
        } else {
          this.logger.setLoggers('Get User Update Service Failed!');
        }
      }
    );
  }

  getAllUserTypes() {
    const resp = this.http.get(this.GETALLUSERTYPESURL);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Get UserTypes Success, ${data['length']} count!`);
          this.userTypeList = data;
        } else {
          this.logger.setLoggers('Get UserTypes Failed!');
          this.userTypeList = data;
        }
      },
      err => {
        this.logger.setLoggers('Get UserTypes Service Failed!');
      }
    );
  }
}
