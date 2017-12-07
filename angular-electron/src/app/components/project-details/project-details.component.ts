import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './../../services/login.service';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(public projectService: ProjectService,
    public loginService: LoginService,
    private route: ActivatedRoute) {
    // this.getProjectDetails();
  }

  ngOnInit() {
    this.getProjectDetails();
  }

  getProjectDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectDetails(id);
  }

}
