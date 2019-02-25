import { CANVAS } from '../constants';

let ffTimeout = null;

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

export const chooseFunFact = () => (dispatch, getState) => {
  dispatch({ type: CANVAS.FUNFACT_DISCARDED });
  const {
    canvas: { step },
    data: {
      lang,
      content: { funfacts }
    }
  } = getState();

  if (ffTimeout) clearTimeout(ffTimeout);

  if (funfacts[step]) {
    const ff =
      funfacts[step][Math.floor(Math.random() * funfacts[step].length)];

    dispatch({ type: CANVAS.FUNFACT_CHOSEN, payload: ff[lang] });

    ffTimeout = setTimeout(() => {
      dispatch({ type: CANVAS.FUNFACT_DISCARDED });
    }, 10000);
  }
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

export const selectWeapon = index => (dispatch, getState) => {
  const {
    data: {
      content: { weapons }
    }
  } = getState();

  if (index < weapons.length && index > -1)
    return dispatch({ type: CANVAS.WEAPON_SELECTED, payload: index });
};

export const addAccessory = accessory => (dispatch, getState) => {
  const {
    canvas: {
      insurgent: {
        weapon: { extras }
      }
    }
  } = getState();

  if (extras.length) {
    accessory.z = Math.max(...extras.map(e => e.z || 0)) + 10;
  } else {
    accessory.z = 10;
  }

  return dispatch({ type: CANVAS.ACCESSORY_ADDED, payload: accessory });
};

export const updateAccessory = (accessory, data) => dispatch => {
  return dispatch({
    type: CANVAS.ACCESSORY_UPDATED,
    payload: { accessory, data }
  });
};

export const reorderAccessory = accessory => (dispatch, getState) => {
  const {
    canvas: {
      insurgent: {
        weapon: { extras }
      }
    }
  } = getState();

  const z = Math.max(...extras.map(e => e.z || 0)) + 10;

  return dispatch({
    type: CANVAS.ACCESSORY_REORDERED,
    payload: { accessory, z }
  });
};

export const flipAccessory = accessory => dispatch => {
  return dispatch({
    type: CANVAS.ACCESSORY_FLIPPED,
    payload: accessory
  });
};

export const removeAccessory = index => dispatch => {
  return dispatch({
    type: CANVAS.ACCESSORY_REMOVED,
    payload: index
  });
};

export const saveInsurgent = () => async (dispatch, getState) => {
  const {
    canvas: { insurgent }
  } = getState();

  dispatch({ type: CANVAS.SAVING_REQUESTED });

  try {
    const saved = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ insurgent: insurgent })
    });

    dispatch({ type: CANVAS.SAVING_DONE, payload: await saved.json() });
  } catch (error) {
    dispatch({ type: CANVAS.SAVING_FAILED, payload: error.message });
  }
};
