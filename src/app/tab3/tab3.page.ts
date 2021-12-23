import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState, OptionsState } from "../app.reducers";

import * as actionsCounter from "../actions/counter.actions";
import * as actionsOptions from "../actions/options.actions";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  counter: any;
  form = {
    text: "",
    select: "",
    checkbox: {
        jonSnow: false,
        daenerysTargaryen: false,
        tyrionLannister: false
    },
    radio: "",
    datetime: ""
  }

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.select("counter").subscribe((state) => {
      this.counter = state;
    });
  }

  increaseCounter() {
    this.store.dispatch(actionsCounter.increase());
  }

  decreaseCounter() {
    this.store.dispatch(actionsCounter.decrease());
  }

  resetCounter() {
    this.store.dispatch(actionsCounter.reset());
  }

  changeOptions() {
    let options: OptionsState = {
      text: this.form.text,
      select: this.form.select,
      checkbox: {
          jonSnow: this.form.checkbox.jonSnow,
          daenerysTargaryen: this.form.checkbox.daenerysTargaryen,
          tyrionLannister: this.form.checkbox.tyrionLannister
      },
      radio: this.form.radio,
      datetime: this.form.datetime
    }
    this.store.dispatch(actionsOptions.setOptions({ options }));
  }

}
