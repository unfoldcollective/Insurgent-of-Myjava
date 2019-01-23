import { DATA } from '../constants';

const initialState = {
  loaded: false,
  lang: 'sk',
  content: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA.LOADED: {
      return {
        ...state,
        loaded: true,
        content: action.payload
      };
    }

    case DATA.SWITCHED_LANGUAGE: {
      return {
        ...state,
        lang: ['en', 'sk'].includes(action.payload) ? action.payload : 'sk'
      };
    }

    default:
      return state;
  }
};
