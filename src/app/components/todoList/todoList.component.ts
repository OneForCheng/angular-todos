import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import store from '../../../store';
import { getFilterTodos } from '../../../utils/transform';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  allCompleted = false;

  filterTodos: ITodo[] = [];

  private readonly unsubscribe: any;

  constructor(private todosService: TodosService) {
    this.unsubscribe = store.subscribe(this.updateState);
  }

  private updateState = () => {
    const state = store.getState();
    const todos = state.todos;
    const filters = state.filters;
    this.allCompleted = todos.every(todo => todo.completed);
    this.filterTodos = getFilterTodos(todos, filters);
  }

  ngOnInit() {
    this.updateState();
  }

  toggleAll(checked: boolean) {
    this.todosService.toggleAll(checked);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
