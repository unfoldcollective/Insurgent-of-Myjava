import { DATA } from '../constants';

const initialState = {
  loaded: false,
  language: 'en',
  content: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA.DATA_LOADED: {
      return {
        ...state,
        loaded: true,
        content: action.payload
      };
    }

    default:
      return state;
  }
};
