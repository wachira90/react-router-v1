import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Users from './page/user';
import About from './page/about';
import Home from './page/home';
import CheckLogin from './page/checklogin';

// import '@fortawesome/react-fontawesome/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="text-center">
						<Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/users">Users</Link>
					</nav>

					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/users" component={Users} />
					<Route component={CheckLogin} />
				</div>
			</Router>
		);
	}
}
export default App;