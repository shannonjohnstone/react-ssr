import { matchRoutes } from 'react-router-config';

/* loadData
 * loadData will matchRoutes and find any loadData methods and create new array
*/

export const loadData = (routes, path, store) => (
  matchRoutes(routes, path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ))
);
