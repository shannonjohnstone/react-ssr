import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default () => {
  const middleware = [thunk];

  return createStore(reducers, {}, applyMiddleware(...middleware));
};
