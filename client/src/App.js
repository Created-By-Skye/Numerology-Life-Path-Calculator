import Home from './components/Home';
import './App.css';
import './components/CreateProfile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProfile from './components/CreateProfile';
import Profiles from './components/Profiles';
import Header from './components/Header';
import LifePaths from './components/LifePaths';
import About from './components/About';

function App() {

  
  return (
    <div className="App">
  
    <Header />

    <Router>
    <Switch>
  <Route path="/CreateProfile" component={CreateProfile}/>
    <Route path="/Profiles" component={Profiles}/> 
    <Route path="/About" component={About}/> 
    <Route path="/Profiles" component={LifePaths}/> 
    </Switch>
      <Route path="/" component={Home}/> 
</Router>
            
    </div>
  );
}

export default App;
