import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <p>1231241</p>
      </Switch>
    </Router>
  );
}


export default App;
