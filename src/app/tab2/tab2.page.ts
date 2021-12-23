import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState, UserState } from "../app.reducers";

import * as actionsUser from "../actions/user.actions";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user: any;

  form = {
    email: '',
    password: ''
  }

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.select("user").subscribe((state) => {
      this.user = state;
    });
  }

  login() {
    let token = this.randomToken();
    let user: UserState = { email: this.form.email, token: token}
    this.store.dispatch(actionsUser.login({ user }));
    this.form = {
      email: '',
      password: ''
    }
  }

  logout() {
    this.store.dispatch(actionsUser.logout());
  }

  randomToken() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
