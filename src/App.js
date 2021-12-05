import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AllProjects from './Pages/AllProjects/AllProjects';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path='/allProjects'>
            <AllProjects />
          </Route>
          <Route path={['/', '/home']}>
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
