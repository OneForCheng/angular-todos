import ACTION_TYPES from '../constants/actions';

export const toggleTodo = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id
});

export const  removeTodo = id => ({
  type: ACTION_TYPES.REMOVE_TODO,
  id
});

export const  updateTodo = (id, label) => ({
  type: ACTION_TYPES.UPDATE_TODO,
  data: {
    id,
    label
  }
});
