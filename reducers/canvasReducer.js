import { CANVAS } from '../constants';

const initialState = {
  step: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CANVAS.STEP_ADVANCED: {
      const step = step + 1;
      return {
        ...state,
        step
      };
    }
    case CANVAS.STEP_RETREATED: {
      const step = step - 1;
      return {
        ...state,
        step: step < 0 ? 0 : step
      };
    }
    case CANVAS.STEP_RESETED: {
      return {
        ...state,
        step: 0
      };
    }

    default:
      return state;
  }
};
