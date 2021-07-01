import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Article from "./Article";
import Header from "./Header";

class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Article />
                <Route path="/main" component={Header} />
            </Router>
        )
    }
}

export default TopMenuComponent;