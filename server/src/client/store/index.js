import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* createStore
 * create redux store
 * TODO: possibly merge client createStore and server createStore
 */

export default (initialState) => {
  const middleware = [thunk];

  return createStore(reducers, initialState, applyMiddleware(...middleware));
};
