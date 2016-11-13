import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

const Message = (props) => <div><h1>{props.params.message || 'Hello'}</h1><Links/></div>

const Links = () => (
    <nav>
        <Link activeStyle={{color: 'green'}} to="/">Hello</Link>
        <Link activeStyle={{color: 'green'}} to="/Hi">Hi</Link>
        <Link activeClassName="active" to="/Ni_Hao">Ni_Hao</Link>
    </nav>
)

class App extends Component {
    render() {
        return (
            <Router history = {hashHistory}>
                <Route path="/(:message)" component={Message}>
                </Route>
            </Router>
        );
    }
}

export default App;