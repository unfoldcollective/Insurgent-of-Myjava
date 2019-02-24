import { FINISH } from '../constants';

export const finishAdvance = () => dispatch => {
  return dispatch({ type: FINISH.STEP_ADVANCED });
};

export const setInsurgentName = name => dispatch => {
  return dispatch({ type: FINISH.NAME_SET, payload: name });
};

export const setInsurgentEmail = email => dispatch => {
  return dispatch({ type: FINISH.EMAIL_SET, payload: email });
};

export const setInsurgentBackground = () => (dispatch, getState) => {
  const {
    data: {
      content: { backgrounds }
    }
  } = getState();

  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return dispatch({ type: FINISH.BG_SET, payload: bg });
};

export const finishFinished = payload => async dispatch => {
  dispatch({ type: FINISH.SAVING_REQUESTED });
  try {
    await fetch('/prepare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return dispatch({ type: FINISH.FINISH_DONE });
  } catch (error) {
    return dispatch({ type: FINISH.FINISH_FAILED, payload: error.message });
  }
};
