import { renderRoutes } from 'react-router-config';
import Home from './pages/Home';
import UsersList from './pages/UsersList';

/* routes
 * using renderRoutes to configure a routes array to have more control
 */

export const routes = [
  {
    path: '/',
    exact: true,
    ...Home,
  },
  {
    loadData: UsersList.loadData,
    path: '/users',
    exact: true,
    ...UsersList,
  },
];

export default () => renderRoutes(routes);
