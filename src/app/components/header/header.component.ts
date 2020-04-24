import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  value = '';

  @ViewChild('input', { read: ElementRef }) inputEl: ElementRef;

  constructor(private todosService: TodosService) { }

  onKeyUpEnter(value: string) {
    const label = value.trim();
    if (label) {
      this.todosService.addTodo(label);
      this.value = '';

      // set focus for input again
      setTimeout(() => {
        this.inputEl.nativeElement.focus();
      }, 500);
    }
  }
}
