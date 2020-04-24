import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  value = '';

  constructor(private todosService: TodosService) { }

  onKeyUpEnter(value: string) {
    const label = value.trim();
    if (label) {
      this.todosService.addTodo(label);
      this.value = '';
    }
  }
}
