import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainComponent from "./components/MainComponent";
import Login from "./components/Login";

function App() {

    const handleUser = (res) => {
        const userObject = {
            email: res.email,
            name: res.name,
            picture: res.picture,
            identificationNumber: res.identificationNumber,
            auth: false
        }
        if(userObject != undefined){
            userObject.auth = true
            console.log(userObject);
            // window.location = '/main'
        }
    }

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/main" component={MainComponent}/>
                    <Route exact path="/"
                           render={() => <Login handleUser={handleUser}/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
