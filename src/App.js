import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
