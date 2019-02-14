import { FINISH } from '../constants';

export const finishAdvance = () => dispatch => {
  return dispatch({ type: FINISH.STEP_ADVANCED });
};
