import AboutPage from './AboutPage';
import Navbar from './Navbar';
import Home from './Home';
import StateCompareForm from './StateCompareForm';
import YearCompareForm from './YearCompareForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Agencies from './Agencies';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/state-compare'>
              <StateCompareForm/>
            </Route>
            <Route exact path='/year-compare'>
              <YearCompareForm/>
            </Route>
            <Route exact path='/about'>
              <AboutPage/>
            </Route>
            <Route exact path='/agency-spending'>
              <Agencies/>
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
