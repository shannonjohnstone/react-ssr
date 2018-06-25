import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/store/reducers';

/* createStore
 * create redux store
 * TODO: possibly merge client createStore and server createStore
 */

export default () => {
  const middleware = [thunk];

  return createStore(reducers, {}, applyMiddleware(...middleware));
};
