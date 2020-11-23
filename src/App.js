//npm i react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './screen/Home'
import About from './screen/About'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path='/' component={Home}  exact />
      <Route path='/about' component={About}  exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
