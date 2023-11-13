import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import PrivateRoute from './components/privateRoute';
import RegistrationPage from './pages/Registration';
import LoginPage from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/registration' component={RegistrationPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/project' />
      </Switch>
    </Router>
  );
}


export default App;
