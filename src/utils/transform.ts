import FILTER_TYPES from '../constants/filterTypes';

export const getFilterTodos = (todos, filters) => {
  const filter = filters.find(item => item.selected);
  switch (filter.label) {
    case FILTER_TYPES.ACTIVE:
      return todos.filter(m => !m.completed);
    case FILTER_TYPES.COMPLETED:
      return todos.filter(m => m.completed);
    default:
      return todos;
  }
};
