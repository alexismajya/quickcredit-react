import '@babel/polyfill';
import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './Pages/login.page';

toast.configure();
class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={LogIn} />
					<Route path='/'>
						<p> Welcome to Quick Credit </p>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
