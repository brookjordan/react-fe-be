import AppRoot from './components/AppRoute.js';
import Home from './components/Home.js';
import NotFound from './components/404.js';
import Spitter from './components/Spitter.js';

const routes = [
  {
    path      : '/',
    exact     : true,
    component : Home,
  },

  {
    path      : '/home',
    component : Home,
  },

  {
    path      : '/spitter',
    component : Spitter,
  },

  {
    path      : '*',
    component : NotFound,
  },
];

const router = [
  {
    component : AppRoot,
    routes,
  },
];

export default router;
