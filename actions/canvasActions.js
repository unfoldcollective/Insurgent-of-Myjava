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
