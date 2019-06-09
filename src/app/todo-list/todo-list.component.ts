import { DELETE, TOGGLE } from './../actions';
import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../store';
import { ADD_TODO } from '../actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select('todoList') ourTodos;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input) {
    if (!input.value) { return; }

    this.ngRedux.dispatch({type: ADD_TODO, todo: { description: input.value}});

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE, todo});

  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: DELETE, todo});
  }
}
