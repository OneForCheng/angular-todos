import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FiltersService } from '../../services/filters.service';
import store from '../../../store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit, OnDestroy {

  activeCount = 0;

  isShowClearBtn = false;

  filters: IFilter[] = [];

  private readonly unsubscribe: any;

  constructor(private todosService: TodosService, private filtersService: FiltersService) {
    this.unsubscribe = store.subscribe(this.updateState);
  }

  private updateState = () => {
    const state = store.getState();
    const todos = state.todos;
    this.filters = state.filters;
    this.activeCount = todos.filter(todo => !todo.completed).length;
    this.isShowClearBtn = todos.some(todo => todo.completed);
  }

  ngOnInit() {
    this.updateState();
  }

  switchFilter = (label: string) => {
    this.filtersService.switchFilter(label);
  }

  clearCompleted() {
    this.todosService.clearCompleted();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
