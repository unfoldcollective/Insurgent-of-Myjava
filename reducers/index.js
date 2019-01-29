import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import dataReducer from './dataReducer';
import outfitReducer from './outfitReducer';

export default combineReducers({
  canvas: canvasReducer,
  data: dataReducer,
  outfit: outfitReducer
});
