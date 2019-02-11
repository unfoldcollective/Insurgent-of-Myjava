import { ACCESSORIZE } from '../constants';

export const dragAccessory = item => dispatch => {
  return dispatch({ type: ACCESSORIZE.ACCESSORY_DRAGGED, payload: item });
};

export const dropAccessory = () => dispatch => {
  return dispatch({ type: ACCESSORIZE.ACCESSORY_DROPPED });
};
