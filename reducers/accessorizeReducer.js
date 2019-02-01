import { ACCESSORIZE } from '../constants';

const initialState = {
  isDragging: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCESSORIZE.ACCESSORY_DRAGGED: {
      return {
        ...state,
        isDragging: true
      };
    }
    case ACCESSORIZE.ACCESSORY_DROPPED: {
      return {
        ...state,
        isDragging: false
      };
    }
    default:
      return state;
  }
};
