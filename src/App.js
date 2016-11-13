import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

class Home extends Component {
    componentWillMount() {
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeaveee
        )
    }

    routerWillLeaveee( nextLocation ){
        return `leaving home for ${nextLocation.pathname}`
    }
    
    render() {
        return (
            <div><h1>Home</h1><Links/></div>
        )
    }
}

Home.contextTypes = { router: React.PropTypes.object.isRequired }

const About = () => <div><h1>About</h1><Links/></div>
const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
)

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </Router>
    );
};

export default App;