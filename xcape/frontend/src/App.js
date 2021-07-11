import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainComponent from "./components/MainComponent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        {/*<Router>*/}
        {/*    <Switch>*/}
        {/*        <Route exact path="/" component={Login} />*/}
        {/*        <Route path="/main" component={MainComponent} />*/}
        {/*    </Switch>*/}
        {/*</Router>*/}
        <MainComponent />
    </div>
  );
}

export default App;
