import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from "../app.reducers";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  counter: any;
  user: any;
  options: any;

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.select("counter").subscribe((state) => {
      this.counter = state;
    });
    this.store.select("user").subscribe((state) => {
      this.user = state;
    });
    this.store.select("options").subscribe((state) => {
      this.options = state;
    });
  }

}
