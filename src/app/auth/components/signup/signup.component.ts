import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: {name: string, message: string} = {name: '', message: ''};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    const displayName = form.value.username;

    this.auth.signUp(email, password, displayName)
    .catch(_error => {
      this.error = _error;
    });


  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }
}
