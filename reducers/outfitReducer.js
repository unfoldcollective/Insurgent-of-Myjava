import { OUTFIT } from '../constants';

const initialState = {
  isDragging: false,
  filter: 'head'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OUTFIT.FILTER_CHANGED: {
      return {
        ...state,
        filter: action.payload
      };
    }
    default:
      return state;
  }
};
