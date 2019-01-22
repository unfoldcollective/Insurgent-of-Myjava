import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  canvas: canvasReducer,
  data: dataReducer
});
