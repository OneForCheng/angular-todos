import ACTION_TYPES from '../constants/actions';

export const addTodo = label => ({
  type: ACTION_TYPES.ADD_TODO,
  label
});
