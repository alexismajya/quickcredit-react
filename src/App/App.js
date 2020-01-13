import '@babel/polyfill';
import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './Pages/login.page';
import home from './Pages/home';

toast.configure();
class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={LogIn} />
					<Route path='/' component={home}></Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
