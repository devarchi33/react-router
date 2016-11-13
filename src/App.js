import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const Page = (props) => <div><h1>{props.location.query.message || 'Hello'}</h1><Links/></div>

const Links = () => (
    <nav>
        <Link to={ { pathname : "/", query : {message : ''} } }>Hello</Link>
        <Link to={ { pathname : "/", query : {message : 'Yop'} } }>Yop</Link>
    </nav>
)

class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Page}>
                </Route>
            </Router>        
        );
    }
}

export default App;