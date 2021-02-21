import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider"

// We need "React Router" to create routing
function App() {
  const [{ basket }, dispatch] = useStateValue();

  // useEffect - A piece of code runs on a given condition

  useEffect(() => {
    effect
    
    return () => {
      cleanup
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* The main home page must be at the bottom */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
