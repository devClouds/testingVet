// import logo from './logo.svg';
// import './App.css';
import './css/Responsive.scss'
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './pages/Home'
import Staff from './pages/Staff'
import Building from './pages/Building'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/personel'} className="nav-link">Personel</Link></li>
              <li><Link to={'/przychodnia'} className="nav-link">Przychodnia</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/personel' component={Staff} />
            <Route path='/przychodnia' component={Building} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
