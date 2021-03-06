import { Component, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent {
  editing = false;

  @Input() todo: ITodo;

  get className() {
    let className = this.todo.completed ? 'completed' : '';
    if (this.editing) {
      className += ' editing';
    }
    return className;
  }

  constructor(private todosService: TodosService) {}

  toggleTodo(id: number) {
    this.todosService.toggleTodo(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  updateTodo(id: number, value: string) {
    this.toggleEditing();
    const label = value.trim();
    if (label) {
      this.todosService.updateTodo(id, label);
    } else {
      this.removeTodo(id);
    }
  }
}
