import ACTION_TYPES from '../constants/actions';

export const clearCompleted = () => ({
  type: ACTION_TYPES.CLEAR_COMPLETED
});

export const switchFilter = data => ({
  type: ACTION_TYPES.SWITCH_FILTER,
  data
});
