import Home from './components/Home';
import './App.css';
import './components/CreateProfile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProfile from './components/CreateProfile';
import Profiles from './components/Profiles';
import Header from './components/Header';
import LifePaths from './components/LifePaths';
import About from './components/About';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
  
    {isAuthenticated} ? {CreateProfile} : {Home}
    <Router>
    <Header />
    <Switch>
  <Route path="/CreateProfile" component={CreateProfile}/>
    <Route path="/About" component={About}/> 
    <Route path="/LifePaths" component={LifePaths}/> 
    <Route path="/Profiles" component={Profiles}/> 
    <Route path="/" component={Home}/> 
    </Switch>
    </Router>
            
    </div>
  );
}

export default App;