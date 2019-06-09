import { Map } from 'immutable';
import { ADD_TODO, DELETE_ALL, DELETE, TOGGLE } from './actions';
import { tassign } from 'tassign';
import { ITodo } from './todo';


export interface IAppState {
    counter: number;
    totalItems: number;
    lastUpdate: Date;
    todoList: ITodo[];
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    totalItems: 0,
    lastUpdate: null,
    todoList: [] as ITodo[]
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todoList.length + 1;
            action.todo.isCompleted = false;
            return tassign(state, {
                counter: state.counter + 1,
                totalItems: state.totalItems + 1,
                lastUpdate: new Date(),
                todoList: state.todoList.concat(Object.assign({}, action.todo))});
        case TOGGLE:
                const toggled = state.todoList.find(f => f.id === action.todo.id);
                toggled.isCompleted = true;
                return tassign(state, {
                    counter: state.counter,
                    totalItems: state.totalItems,
                    lastUpdate: new Date(),
                    todoList: state.todoList});
        case DELETE:
                return tassign(state, {
                    counter: state.counter - 1,
                    totalItems: state.totalItems - 1,
                    lastUpdate: new Date(),
                    todoList: state.todoList.filter(f => f.id !== action.todo.id)});
        case DELETE_ALL:
                return tassign(state, {
                    counter: state.counter - state.counter,
                    totalItems: 0,
                    lastUpdate: new Date(),
                    todoList: []});
    }
    return state;
}
