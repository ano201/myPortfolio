import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import LeftAside from "./Pages/Shared/Asides/LeftAside";
import RightAside from "./Pages/Shared/Asides/RightAside";
import AllProjects from "./Pages/AllProjects/AllProjects/AllProjects";
import Login from "./Pages/Login/Login";
import Management from "./Pages/Management/Management";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <LeftAside />
          <RightAside />
          <Switch>
            <Route path="/allProjects">
              <AllProjects />
            </Route>
            <Route path="/admin">
              <Login />
            </Route>
            <PrivateRoute path="/management">
              <Management />
            </PrivateRoute>
            <Route path={["/", "/home"]}>
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
