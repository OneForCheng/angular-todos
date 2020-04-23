import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  onKeyUpEnter(value: string) {
    const label = value.trim()
    if (label) {
      this.todosService.addTodo(label)
      this.value = '';
    }
  }
}
