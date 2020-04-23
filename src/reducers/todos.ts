import ACTION_TYPES from '../constants/actions';

const initState = [];

const todos = (state: ITodo[] = initState, action) => {
  let clone;
  let todo;
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      clone = [...state];
      clone.push({
        id:
          state.length === 0
            ? 1
            : Math.max(...state.map(item => item.id)) + 1,
        label: action.label
      });
      return clone;
    case ACTION_TYPES.CLEAR_COMPLETED:
      return state.filter(item => !item.completed);
    case ACTION_TYPES.TOGGLE_ALL:
      return state.map(item => {
        return {
          id: item.id,
          label: item.label,
          completed: action.data
        };
      });
    case ACTION_TYPES.TOGGLE_TODO:
      clone = [...state];
      todo = clone.find(item => item.id === action.id);
      todo.completed = !todo.completed;
      return clone;
    case ACTION_TYPES.REMOVE_TODO:
      clone = [...state];
      const index = clone.findIndex(item => item.id === action.id);
      clone.splice(index, 1);
      return clone;
    case ACTION_TYPES.UPDATE_TODO:
      clone = [...state];
      todo = clone.find(item => item.id === action.data.id);
      todo.label = action.data.label;
      return clone;
  }
  return state;
};

export default todos;
