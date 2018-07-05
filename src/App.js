import React, { Component } from 'react';

import Resume from './views/Resume';
import MenuButton from './components/menu/MenuButton';
import MenuContainer from './components/menu/MenuContainer';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

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
                    <Resume/>
                    <MenuButton/>
                </div>
            )
        } else {
            return <MenuContainer/>
        }

    }

}

export default App;