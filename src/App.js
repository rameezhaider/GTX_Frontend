import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './contents/Home';


import './assets/scss/navbar.scss';

class App extends Component {

    render() {
      return (
        <HashRouter>
            <div>

                <div className="clear"></div>

                <Container>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                    </div>
                </Container>
            </div>
        </HashRouter>
      );
    }
}

export default App;