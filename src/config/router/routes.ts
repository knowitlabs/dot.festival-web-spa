import { KIRouteType } from '../../types/module/router';

export const routes: KIRouteType[] = [
  { path: '/', page: 'StartPage', name: 'Start', regex: /^\/$/ },
  { path: '/about', page: 'AboutPage', name: 'About', regex: /^\/about$/ },
  {
    path: '/register/receipt',
    page: 'RegisterReceiptPage',
    name: 'Receipt',
    regex: /^\/register\/receipt$/
  },
  {
    path: '/register',
    page: 'RegisterPage',
    name: 'Register',
    regex: /^\/register$/
  },
  {
    path: '/program',
    page: 'ProgramPage',
    name: 'Program',
    regex: /^\/program$/
  },
  {
    path: '/speakers',
    page: 'SpeakersPage',
    name: 'Speakers',
    regex: /^\/speakers$/
  },
  {
    path: '/sessions',
    page: 'SessionsPage',
    name: 'Sessions',
    regex: /^\/sessions$/
  },
  {
    path: '/practicalities',
    page: 'PracticalitiesPage',
    name: 'Practicalities',
    regex: /^\/practicalities$/
  },
  {
    path: '/register',
    page: 'RegisterPage',
    name: 'Register',
    regex: /^\/register$/
  }
];
