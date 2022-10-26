import React from 'react';
import '../App.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginstatus: false
		};
	}

	Checkauth = () => {
		alert('Checkauth');
	};

	Cleartxt = () => {
		alert('Cleartxt');
	};

	render() {

		const label = {
			n: 'Username',
			p: 'Password'
		};

		return (
			<div className="#">
				<h1>Test React Router V1</h1>
				<form className="md-form">
					<p>{label.n}</p>
					<input type="text" name="uname" autoComplete='off' />
					<br />
					<p>{label.p}</p>
					<input type="password" name="upwd" autoComplete='off' />
				</form>
				<br />
				<br />
				<input type="button" name="btnlogin" onClick={this.Checkauth} value="Login" className="btn btn-outline-success waves-effect" />
				<input type="button" name="btnreset" onClick={this.Cleartxt} value="Reset" className="btn btn-outline-warning waves-effect" />

				<br></br>
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

export default Home;
