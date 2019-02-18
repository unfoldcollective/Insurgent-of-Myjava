import { FINISH } from '../constants';

const initialState = {
  step: 0,
  name: null,
  email: null,
  done: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FINISH.STEP_ADVANCED: {
      return {
        ...state,
        step: state.step + 1
      };
    }

    case FINISH.NAME_SET: {
      return {
        ...state,
        name: action.payload
      };
    }

    case FINISH.EMAIL_SET: {
      return {
        ...state,
        email: action.payload
      };
    }

    case FINISH.FINISH_DONE: {
      return {
        ...state,
        done: true
      };
    }

    case FINISH.FINISH_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
