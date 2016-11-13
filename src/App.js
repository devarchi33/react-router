import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const Home = () => <h1>Home Page</h1>
const HomeBody = () => <div><p>This is home page.</p></div>
const Other = () => <h1>Other Page</h1>
const OtherBody = () => <div><p>This is other page.</p></div>

const Container = (props) => <div>{props.header}{props.body}<Links/></div>

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
    </nav>
)

class App extends Component {
    render() {
        return (
            <Router history = {hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute components={ {header : Home, body : HomeBody} }>
                    </IndexRoute>
                    <Route path="/other" components={ {header : Other, body : OtherBody} }>
                    </Route>
                </Route>
            </Router>
        );
    }
}

export default App;