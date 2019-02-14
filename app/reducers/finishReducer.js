import { FINISH } from '../constants';

const initialState = {
  step: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FINISH.STEP_ADVANCED: {
      return {
        ...state,
        step: state.step + 1
      };
    }

    default:
      return state;
  }
};
