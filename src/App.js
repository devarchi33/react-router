import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links/>{props.children}</div>
const About = () => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>

const Links = () => (
    <nav>
        <Link activeStyle={{color: 'green'}} to="/">Home</Link>
        <Link activeStyle={{color: 'green'}} to="/about">About</Link>
        <Link activeClassName="active" to="/contact">Contact</Link>
    </nav>
)

class App extends Component {
    render() {
        return (
            <Router history = {hashHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Route>
            </Router>
        );
    }
}

export default App;