import './css/App.scss';
import './css/Responsive.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//Pages
import Home from './pages/Home'
import Staff from './pages/Staff'
import Building from './pages/Building'
import News from './pages/News'
import Shop from './pages/Shop'


import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <ScrollToTop />
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/personel' component={Staff} />
            <Route path='/przychodnia' component={Building} />
            <Route path='/aktualnosci' component={News} />
            <Route path='/sklep' component={Shop} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
