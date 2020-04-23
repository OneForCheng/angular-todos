import { Injectable } from '@angular/core';
import store from '../../store';
import { addTodo } from '../../actions/headerActions';
import { clearCompleted } from '../../actions/footerActions';
import { removeTodo, toggleTodo, updateTodo } from '../../actions/todoActions';
import { toggleAll } from '../../actions/todoListActions';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor() {}

  addTodo(label: string) {
    store.dispatch(addTodo(label));
  }

  clearCompleted() {
    store.dispatch(clearCompleted());
  }

  toggleTodo(id: number) {
    store.dispatch(toggleTodo(id));
  }

  removeTodo(id: number) {
    store.dispatch(removeTodo(id));
  }

  updateTodo(id: number, label: string) {
    store.dispatch(updateTodo(id, label));
  }

  toggleAll(checked: boolean) {
    store.dispatch(toggleAll(checked));
  }
}
