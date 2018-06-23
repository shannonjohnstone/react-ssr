import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/store/reducers';

export default () => {
  const middleware = [thunk];

  return createStore(reducers, {}, applyMiddleware(...middleware));
};
