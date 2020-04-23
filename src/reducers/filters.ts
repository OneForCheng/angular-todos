import ACTION_TYPES from '../constants/actions';
import FILTER_TYPES from '../constants/filterTypes';

const initState = [
  {
    label: FILTER_TYPES.ALL,
    selected: true
  },
  {
    label: FILTER_TYPES.COMPLETED,
    selected: false
  },
  {
    label: FILTER_TYPES.ACTIVE,
    selected: false
  }
];

type State = IFilter[];

const getFilterResults = (state: State, label: string): State => {
  return state.map(item => {
        if (item.label === label) {
          return {
            label: item.label,
            selected: true
          };
        }
        return {
          label: item.label,
          selected: false
        };
      });
};

const filters = (state: State = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SWITCH_FILTER:
      return getFilterResults(state, action.data);
    default:
      return state;
  }
};

export default filters;
