import ACTION_TYPES from '../constants/actions';

export const toggleAll = checked => ({
  type: ACTION_TYPES.TOGGLE_ALL,
  data: checked
});
