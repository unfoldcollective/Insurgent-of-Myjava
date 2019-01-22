import { CANVAS } from '../constants';

export const advanceStep = () => dispatch => {
  return dispatch({ type: CANVAS.STEP_ADVANCED });
};

export const retreatStep = () => dispatch => {
  return dispatch({ type: CANVAS.STEP_RETREATED });
};

export const resetStep = () => dispatch => {
  return dispatch({ type: CANVAS.STEP_RESETED });
};
