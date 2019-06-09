import { Component } from '@angular/core';
import { dispatch, select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { DELETE_ALL } from '../actions';
import { IAppState } from '../store';


@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select('totalItems') totalItems;
  @select('lastUpdate') lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }


  clearTodos() {
    this.ngRedux.dispatch({type: DELETE_ALL});
  }
}
