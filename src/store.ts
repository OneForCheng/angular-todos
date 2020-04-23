import { createStore } from 'redux';
import reducers from './reducers/index';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './utils/localStorage';

const win: any = window as any;

const persistedState = loadStateFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
