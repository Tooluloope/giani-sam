import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { EmailValidator } from '../email-validator.directive';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    EmailValidator,
    EmailValidator,
    ],
  exports: [
    MDBBootstrapModule.forRoot().ngModule,

    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    EmailValidator,
    EmailValidator,

  ],
  providers: [UserService, AuthService]
})
export class SharedModule { }
