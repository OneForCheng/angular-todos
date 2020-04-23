import { createStore } from 'redux';
import reducers from './reducers/index';

const win: any = window as any;

export default createStore(
  reducers,
  undefined,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);
