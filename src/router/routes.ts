import { KIRouteType } from '../@types/module/router';

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
    path: '/code-of-conduct',
    page: 'CodeOfConductPage',
    name: 'Code of Conduct',
    regex: /^\/code-of-conduct$/
  }
];
