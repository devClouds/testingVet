import './scss/App.scss';
import './scss/Responsive.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import React, { Suspense, lazy } from 'react';

import Menu from './components/Menu';

const Home = lazy(() => import('./pages/Home'));
const Staff = lazy(() => import('./pages/Staff'));
const Building = lazy(() => import('./pages/Building'));
const News = lazy(() => import('./pages/News'));
const Shop = lazy(() => import('./pages/Shop'));

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <ScrollToTop />
          <Menu />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/personel' component={Staff} />
              <Route path='/przychodnia' component={Building} />
              <Route path='/aktualnosci' component={News} />
              <Route path='/sklep' component={Shop} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
