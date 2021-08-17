import './css/App.scss';
import './css/Responsive.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import Staff from './pages/Staff'
import Building from './pages/Building'
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Menu/>
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
