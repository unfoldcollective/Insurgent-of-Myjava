import { CANVAS } from '../constants';

export const advanceStep = () => dispatch => {
  return dispatch({ type: CANVAS.STEP_ADVANCED });
};

export const retreatStep = () => dispatch => {
  return dispatch({ type: CANVAS.STEP_RETREATED });
};

export const changeStep = step => dispatch => {
  return dispatch({ type: CANVAS.STEP_CHANGED, payload: step });
};

export const resetCanvas = () => dispatch => {
  return dispatch({ type: CANVAS.RESET });
};

export const activateHelp = () => dispatch => {
  return dispatch({ type: CANVAS.HELP_ACTIVATED });
};

export const deactivateHelp = () => dispatch => {
  return dispatch({ type: CANVAS.HELP_DEACTIVATED });
};

export const selectCharacter = index => (dispatch, getState) => {
  const {
    data: {
      content: { characters }
    }
  } = getState();

  if (index < characters.length && index > -1)
    return dispatch({ type: CANVAS.CHARACTER_SELECTED, payload: index });
};

export const dressCharacter = (slot, item) => dispatch => {
  return dispatch({ type: CANVAS.CHARACTER_DRESSED, payload: { slot, item } });
};
