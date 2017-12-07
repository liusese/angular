import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from './logger.service';

@Injectable()
export class ProjectService {

  private GETALLPROJECTURL = 'http://localhost:9526/1.0/project/all';
  private GETPROJECTURL = 'http://localhost:9526/1.0/project/';

  projectList: any;
  projectInfo: any;

  constructor(private http: HttpClient, private logger: LoggerService) { }

  getAllProjectInfo() {
    const resp = this.http.get(this.GETALLPROJECTURL);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Get ProjectList Success, ${data['length']} count!`);
          this.projectList = data;
        } else {
          this.logger.setLoggers('Get ProjectList Failed!');
          this.projectList = data;
        }
      },
      err => {
        this.logger.setLoggers('Get ProjectList Service Failed!');
      }
    );
  }

  getProjectDetails(id) {
    const url = `${this.GETPROJECTURL}${id}`;
    const resp = this.http.get(url);
    const rs = resp.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.logger.setLoggers(`Get projectInfo ${data['name']} Success!`);
          this.projectInfo = data;
        } else {
          this.logger.setLoggers('Get projectInfo Failed!');
          this.projectInfo = data;
        }
      },
      err => {
        this.logger.setLoggers('Get projectInfo Service Failed!');
      }
    );
  }
}
