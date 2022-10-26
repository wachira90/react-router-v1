import React from 'react';
import '../App.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class User extends React.Component {
	render() {
		return (
			<div>
				<h1>User</h1>
				<p>User</p>
				<button type="button" className="btn btn-outline-primary waves-effect">Primary</button>
				<button type="button" className="btn btn-outline-default waves-effect">Default</button>
				<button type="button" className="btn btn-outline-secondary waves-effect">Secondary</button>
				<button type="button" className="btn btn-outline-success waves-effect">Success</button>
				<button type="button" className="btn btn-outline-info waves-effect">Info</button>
				<button type="button" className="btn btn-outline-warning waves-effect">Warning</button>
				<button type="button" className="btn btn-outline-danger waves-effect">Danger</button>

			</div>
		);
	}
}
export default User;
