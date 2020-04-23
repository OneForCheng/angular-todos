import { Injectable } from '@angular/core';
import store from '../../store';
import { switchFilter } from '../../actions/footerActions';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  constructor() {}

  switchFilter(label: string) {
    store.dispatch(switchFilter(label));
  }
}
