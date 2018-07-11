import React, { Component } from 'react';

import './assets/Shared.css';

import AppRoutes from './routes';
import MenuButton from './components/menu/MenuButton';
import MenuContainer from './components/menu/MenuContainer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    render() {

        if ( !this.state.showMenu ) {
            return (
                <div>
                    <MenuButton/>
                    <AppRoutes/>
                </div>
            )
        } else {
            return (
                <div>
                    <MenuContainer/>
                    <AppRoutes/>
                </div>
            )
        }

    }

}

export default App;