import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const composeEnhancers = composeWithDevTools({
  name: 'Insurgent Composer'
});

export const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(thunkMiddleware)
      : composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};
