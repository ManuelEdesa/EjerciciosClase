import { Home } from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import Series from '../components/Series';
import PelisGhibli from '../components/PelisGhibli';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/series',
    title: 'Series',
    component: Series,
  },
  {
    id: 5,
    path: '/ghibli',
    title: 'Películas Ghibli',
    component: PelisGhibli,
  },
];

/*
  path
  id
  title
  component

*/