import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { LoggerComponent } from './components/logger/logger.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { UserComponent } from './components/user/user.component';

import { AppRoutingModule } from './/app-routing.module';

import { LoginService } from './services/login.service';
import { LoggerService } from './services/logger.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LoggerComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    LoggerService,
    ProjectService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
