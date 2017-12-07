import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  userForm: FormGroup;

  constructor(public userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private router: Router) {
    // this.getUserDetails();
    // this.createForm();
  }

  ngOnInit() {
    this.getUserDetails();
    this.createForm();
  }

  ngOnChanges() {
    this.userForm.reset();
  }

  createForm() {
    this.userForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      phone: '',
      type: ''
    });
  }

  onSubmit() {
    const formModel = this.userForm.value;
    const type = this.userService.userTypeList.find(data => data['utName'] === formModel.type);
    this.userService.updateUser(formModel.id, formModel.name, formModel.phone, type['utId'], formModel.type);
    this.ngOnChanges();
    this.router.navigate(['user']);
  }

  revert() {
    this.ngOnChanges();
  }

  getUserDetails() {
    this.userService.getAllUserTypes();
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserDetails(userId);
  }

  goBack() {
    this.location.back();
  }
}
