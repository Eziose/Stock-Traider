import Home from './components/Home';
import Header from './components/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Stocks from './components/Stocks/Stocks';






export const routes = [
  {path: '/', component: Home},
  {path: '/header', component: Header},
  {path: '/stocks', component: Stocks},
  {path: '/portfolio', component: Portfolio},
  
];