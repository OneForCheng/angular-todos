const TODOS_STATE_KEY = 'TODOS_STATE_KEY'

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(TODOS_STATE_KEY);

    if (serializedState) {
      return JSON.parse(serializedState);
    }

    return undefined;
  } catch (err) {
    console.log('[loadStateFromLocalStorage-exception]: ', err)
    return undefined;
  }
};

export const saveStateToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TODOS_STATE_KEY, serializedState);
  } catch (err) {
    console.log('[saveStateToLocalStorage-exception]: ', err);
  }
};
