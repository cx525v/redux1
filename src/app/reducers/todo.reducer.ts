import { ToDoActionTypes} from '../shared/enum/todo-action-types.enum';
import {ActionParent} from '../actions/todo.actions';
import {Todo} from '../models/Todo';

export const initialState: Todo[] = [
  {title: 'Todo 1'},
  {title: 'Todo 2'},
  {title: 'Todo 3'},
];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case ToDoActionTypes.Add:
      return [...state, action.payload];
    case ToDoActionTypes.Remove:
      [...state.splice(action.payload, 1)];
      return [...state];
    default: return state;
  }
}
