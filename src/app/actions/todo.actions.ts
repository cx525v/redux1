import {Action} from '@ngrx/store';
import { ToDoActionTypes} from '../shared/enum/todo-action-types.enum';
import { Todo } from '../models/Todo';
export class ActionParent implements Action {
  type: any;
  payload: any;
}
export class TodoAdd implements ActionParent {
  type = ToDoActionTypes.Add;
  constructor(public payload: any) {  }
}
export class TodoRemove implements ActionParent {
  type = ToDoActionTypes.Remove;
  constructor(public payload: any) {  }
}
