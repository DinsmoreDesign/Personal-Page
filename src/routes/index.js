import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Resume from './Resume';
import Home from './Home';

class AppRoutes extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/resume" component={ Resume }/>
                </Switch>
            </Router>
        )
    }

}

export default AppRoutes;